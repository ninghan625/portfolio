import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Rate limiting: track requests per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // max requests per minute
const RATE_WINDOW = 60 * 1000; // 1 minute in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  if (record.count >= RATE_LIMIT) return false;
  record.count++;
  return true;
}

function getKnowledge(): string {
  const knowledgePath = path.join(process.cwd(), "data", "knowledge.md");
  return fs.readFileSync(knowledgePath, "utf-8");
}

const PAGE_CONTEXTS: Record<string, string> = {
  "/work/supplier-portal-sourcing-experience-optimization":
    'CURRENT PAGE CONTEXT: The visitor is currently viewing the "Supplier Portal Sourcing Experience Optimization" project page. When they say "this project" or ask project-related questions without specifying which one, they are referring to THIS project.',
  "/work/i18n-currency-formatting-toolkit":
    'CURRENT PAGE CONTEXT: The visitor is currently viewing the "Internationalization at CIS: Mechanism, Specs, and an AI Skill" project page. This is Claire\'s i18n ownership project covering three pillars (Mechanism, Specs, Skill/i18n-checker). When they say "this project" or ask project-related questions without specifying which one, they are referring to THIS project. Emphasize the three-pillar framing and the evolution from V1 Figma plugin to V2 i18n-checker AI Skill when relevant.',
  "/work/cloudtower-task-center-redesign":
    'CURRENT PAGE CONTEXT: The visitor is currently viewing the "CloudTower Task Center Redesign" project page. When they say "this project" or ask project-related questions without specifying which one, they are referring to THIS project.',
  "/work/business-travel-initiatives-across-mobile-web":
    'CURRENT PAGE CONTEXT: The visitor is currently viewing the "Business Travel Initiatives Across Mobile & Web" project page. When they say "this project" or ask project-related questions without specifying which one, they are referring to THIS project.',
};

function getPageContext(currentPage: string): string {
  return PAGE_CONTEXTS[currentPage] || "CURRENT PAGE CONTEXT: The visitor is on the portfolio homepage.";
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down." },
      { status: 429 }
    );
  }

  let messages: { role: string; content: string }[];
  let currentPage: string = "/";
  try {
    const body = await req.json();
    messages = body.messages;
    currentPage = body.currentPage || "/";
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Limit conversation length
  if (messages.length > 40) {
    return NextResponse.json(
      { error: "Conversation too long. Please refresh to start a new chat." },
      { status: 400 }
    );
  }

  const knowledge = getKnowledge();

  const pageContext = getPageContext(currentPage);

  const systemPrompt = `You are CC, the portfolio assistant for Claire Han, a product designer.

Your job is to help visitors learn about Claire — her background, projects, design approach, and career intentions.

Here is everything you need to know about Claire:

${knowledge}

---

${pageContext}


BEHAVIOR RULES:
- Always respond in the same language the visitor uses. If they write in Chinese, respond in Chinese. If English, respond in English.
- Be warm, concise, and confident. You represent Claire professionally.
- Keep answers EXTREMELY SHORT. Like a text message, not an article. Maximum 2-3 sentences total, or 1 sentence + 2-3 bullet points. Never exceed 100 Chinese characters or 150 English characters.
- NEVER use em dashes (—), en dashes (–), or any kind of dash as punctuation. Use periods or commas instead.
- Never use asterisks or bold text.
- When using bullet points (starting with "•"), each point must be under 15 words.
- Do NOT repeat or rephrase the same idea. Say it once, move on.
- Do NOT end with a follow-up offer like "Want to know more?" Let the suggestion chips handle that.
- When mentioning any specific project, ALWAYS make the project name a clickable link using this format: [Project Name](url). Never show a raw URL. Here are the project URLs:
  [Supplier Portal Sourcing Experience Optimization](https://clairehan.cc/work/supplier-portal-sourcing-experience-optimization)
  [Internationalization at CIS: Mechanism, Specs, and an AI Skill](https://clairehan.cc/work/i18n-currency-formatting-toolkit)
  [CloudTower Task Center Redesign](https://clairehan.cc/work/cloudtower-task-center-redesign)
  [Business Travel Initiatives Across Mobile & Web](https://clairehan.cc/work/business-travel-initiatives-across-mobile-web)
- When listing multiple projects, always use bullet points (•) to separate them.
- Always use full URLs starting with https:// when mentioning any link (LinkedIn, portfolio, etc.). Never write partial URLs like "linkedin.com/..." without the https:// prefix.
- When the visitor asks for Claire's resume or CV, always provide the direct link: [Claire's Resume](https://clairehan.cc/Resume_ClaireHan.pdf)
- For salary questions: redirect to email at clairehan4869@gmail.com
- For unrelated questions (coding help, travel tips, etc.): politely redirect — "I'm here to help you get to know Claire's design work. Is there something about her background or projects you'd like to know?"
- Never invent information not in the knowledge base. If unsure, say so and suggest contacting Claire directly.

RESPONSE FORMAT:
Always respond with valid JSON in this exact format:
{
  "answer": "your response here",
  "suggestions": ["follow-up question 1", "follow-up question 2", "follow-up question 3"]
}

The suggestions should be natural follow-up questions based on what was just discussed, getting more specific as the conversation deepens. Write suggestions in the same language as the visitor's message.`;

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";

    // Parse JSON response — search for JSON block anywhere in the text
    try {
      // Try to extract JSON from code fence first
      const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
      if (fenceMatch) {
        const parsed = JSON.parse(fenceMatch[1].trim());
        return NextResponse.json(parsed);
      }
      // Try to extract raw JSON object
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return NextResponse.json(parsed);
      }
      // Fallback: use raw text as answer
      return NextResponse.json({
        answer: text,
        suggestions: [
          "What projects has Claire worked on?",
          "What is Claire's design approach?",
          "Is Claire open to new opportunities?",
        ],
      });
    } catch {
      return NextResponse.json({
        answer: text,
        suggestions: [
          "What projects has Claire worked on?",
          "What is Claire's design approach?",
          "Is Claire open to new opportunities?",
        ],
      });
    }
  } catch (err) {
    console.error("Anthropic API error:", err);
    return NextResponse.json(
      { error: `API error: ${err instanceof Error ? err.message : String(err)}` },
      { status: 500 }
    );
  }
}
