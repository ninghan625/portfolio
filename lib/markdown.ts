import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CaseStudyData } from "@/components/case-study/types";

const casesDirectory = path.join(process.cwd(), "data/cases");

export interface MarkdownFrontmatter {
  title: string;
  slug: string;
  date: string;
  subtitle?: string;
}

export function getCaseStudyBySlug(slug: string): CaseStudyData | null {
  try {
    const fullPath = path.join(casesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as MarkdownFrontmatter;

    // Parse the markdown content into sections
    const parsedData = parseMarkdownContent(content, frontmatter);
    return parsedData;
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error);
    return null;
  }
}

function parseMarkdownContent(
  content: string,
  frontmatter: MarkdownFrontmatter
): CaseStudyData {
  // Split content by ## headers (main sections)
  const sectionRegex = /^## (.+)$/gm;
  const matches = [...content.matchAll(sectionRegex)];

  const anchors: string[] = [];
  const sections: CaseStudyData["sections"] = [];

  matches.forEach((match, index) => {
    const sectionLabel = match[1].trim();
    anchors.push(sectionLabel);

    // Get content between this section and the next
    const startIndex = match.index! + match[0].length;
    const endIndex =
      index < matches.length - 1 ? matches[index + 1].index! : content.length;
    const sectionContent = content.substring(startIndex, endIndex).trim();

    // Parse the section content
    const parsedSection = parseSectionContent(sectionLabel, sectionContent);
    sections.push(parsedSection);
  });

  return {
    title: frontmatter.title,
    subtitle: frontmatter.subtitle || "",
    anchors,
    sections,
    cta: {
      secondary: "Take Me Home",
      primary: "Next Project",
    },
    footerText: "@ 2026 Claire Han",
  };
}

function parseSectionContent(
  label: string,
  content: string
): CaseStudyData["sections"][0] {
  // Split by ### headings (subsections)
  const subsectionRegex = /^### (.+)$/gm;
  const matches = [...content.matchAll(subsectionRegex)];

  const subSections: CaseStudyData["sections"][0]["subSections"] = [];
  let textBeforeFirstSubsection = "";

  // Get text before first ### (if any)
  if (matches.length > 0) {
    textBeforeFirstSubsection = content.substring(0, matches[0].index).trim();
  } else {
    textBeforeFirstSubsection = content.trim();
  }

  // If there's text before subsections, create a subsection for it
  if (textBeforeFirstSubsection) {
    const paragraphs = parseParagraphs(textBeforeFirstSubsection);
    if (paragraphs.length > 0) {
      subSections.push({
        heading: label, // Use section label as heading
        body: paragraphs,
      });
    }
  }

  // Parse each subsection, building ordered content
  matches.forEach((match, index) => {
    const subsectionHeading = match[1].trim();

    const startIndex = match.index! + match[0].length;
    const endIndex =
      index < matches.length - 1 ? matches[index + 1].index! : content.length;
    const subsectionContent = content.substring(startIndex, endIndex).trim();

    // Check if this is a Media subsection
    if (subsectionHeading.toLowerCase() === "media") {
      // Parse image from markdown: ![alt text](image-path)
      const imageMatch = subsectionContent.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      
      // Add media to the previous subsection if it exists
      if (subSections.length > 0 && imageMatch) {
        const caption = imageMatch[1] || "Media Caption";
        const imagePath = imageMatch[2];
        
        const mediaItem = {
          type: "image" as const,
          caption: caption,
          src: imagePath,
        };
        
        // Initialize content array if it doesn't exist
        if (!subSections[subSections.length - 1].content) {
          subSections[subSections.length - 1].content = [];
        }
        
        // Append media to content array
        subSections[subSections.length - 1].content!.push({
          type: "media",
          data: mediaItem,
        });
      }
      
      // Check if there's content after the image (like "After" sections)
      const imageString = imageMatch ? imageMatch[0] : "";
      const remainingContent = subsectionContent
        .substring(subsectionContent.indexOf(imageString) + imageString.length)
        .trim();
      
      // If there's substantial content after the media, append to the content array
      if (remainingContent && subSections.length > 0) {
        const paragraphs = parseParagraphs(remainingContent);
        if (paragraphs.length > 0) {
          // Append text paragraphs to content array
          paragraphs.forEach((paragraph) => {
            subSections[subSections.length - 1].content!.push({
              type: "text",
              content: paragraph,
            });
          });
        }
      }
      return;
    }

    // For non-media subsections, initialize with text content
    const paragraphs = parseParagraphs(subsectionContent);
    const contentItems = paragraphs.map((paragraph) => ({
      type: "text" as const,
      content: paragraph,
    }));
    
    subSections.push({
      heading: subsectionHeading,
      body: paragraphs,
      content: contentItems,
    });
  });

  // Extract callout if present (blockquote or special marker)
  // Look for pattern: > [!PDF] or > [!CALLOUT] followed by heading and content
  const pdfCalloutRegex = /^> \[!PDF\]\s*\n> ### (.+?)\n((?:> .+\n?)*)/m;
  const pdfCalloutMatch = content.match(pdfCalloutRegex);
  
  let callout: { heading: string; body: string; pdfUrl?: string } | undefined;
  
  if (pdfCalloutMatch) {
    const heading = pdfCalloutMatch[1].trim();
    const bodyLines = pdfCalloutMatch[2]
      .split('\n')
      .map(line => line.replace(/^>\s*/, '').trim())
      .filter(line => line.length > 0);
    
    // Extract PDF URL from markdown link [text](url)
    const pdfLinkMatch = pdfCalloutMatch[2].match(/\[([^\]]+)\]\(([^)]+\.pdf)\)/i);
    const pdfUrl = pdfLinkMatch ? pdfLinkMatch[2] : undefined;
    
    // Body is everything except the PDF link line
    const body = bodyLines
      .filter(line => !line.match(/\[([^\]]+)\]\(([^)]+\.pdf)\)/i))
      .join(' ');
    
    callout = {
      heading,
      body,
      pdfUrl,
    };
  } else {
    // Fallback to simple blockquote callout
    const calloutMatch = content.match(/^> (.+)$/m);
    if (calloutMatch) {
      callout = {
        heading: "Note",
        body: calloutMatch[1].replace(/^Callout:\s*/i, "").trim(),
      };
    }
  }

  return {
    label,
    subSections,
    callout,
  };
}

function parseParagraphs(text: string): string[] {
  // First split by blank lines to preserve paragraph structure
  const paragraphs = text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  // Then filter out TODO lines, image lines, and blockquotes from each paragraph
  const cleanedParagraphs = paragraphs
    .map((paragraph) => {
      const lines = paragraph
        .split("\n")
        .filter((line) => {
          const trimmed = line.trim();
          return (
            trimmed &&
            !trimmed.startsWith("TODO:") &&
            !trimmed.startsWith("![") &&
            !trimmed.startsWith(">")
          );
        });
      
      // Check if this is a bullet list (all lines start with -)
      const isBulletList = lines.every(line => line.trim().startsWith("-"));
      
      if (isBulletList) {
        // Convert markdown list to HTML list
        const listItems = lines
          .map(line => {
            const content = line.trim().substring(1).trim(); // Remove the "-" and trim
            return `<li>${convertInlineMarkdown(content)}</li>`;
          })
          .join("");
        return `<ul>${listItems}</ul>`;
      } else {
        // Join lines within a paragraph with space
        const joined = lines.join(" ");
        // Convert markdown inline formatting to HTML
        return convertInlineMarkdown(joined);
      }
    })
    .filter((p) => p.length > 0);

  return cleanedParagraphs;
}

function convertInlineMarkdown(text: string): string {
  // Convert **bold** to <strong>
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  
  // Convert *italic* to <em>
  text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
  
  // Convert `code` to <code>
  text = text.replace(/`(.+?)`/g, "<code>$1</code>");
  
  return text;
}
