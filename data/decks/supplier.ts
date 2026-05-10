import type { DeckData } from "./types";

// Supplier Portal deck — sliced from Claire's 20-minute presentation script.
// Slides are English to match the case study detail page; Chinese script lives
// in `notes` for later use once we agree on the speaker-notes UI.
//
// Target: ~30 slides / 20 minutes.

const W = 1600;
const H = 1000;

const deck: DeckData = {
  meta: {
    title: "Supplier Portal",
    subtitle: "Rebuilding the sourcing experience",
    durationMin: 20,
    detailPath: "/work/supplier-portal-sourcing-experience-optimization",
  },
  slides: [
    // ----- Cover -----
    {
      kind: "title",
      title: "Supplier Portal",
      subtitle: "Rebuilding the sourcing experience",
      meta: "Claire Han  ·  20 min",
    },

    // =========================================================
    // 01  Context
    // =========================================================
    {
      kind: "section",
      eyebrow: "Context",
      title: "The supplier portal's sourcing flow was being bypassed.",
    },
    {
      kind: "content",
      eyebrow: "What it is",
      title: "ByteDance's internal portal for suppliers.",
      body: [
        "The portal is the system suppliers use to transact with ByteDance's buyers. The full procurement lifecycle runs through it: sourcing, contracting, acceptance, and settlement.",
      ],
    },
    {
      kind: "content",
      eyebrow: "The gap",
      title: "But in sourcing, suppliers fell back to email.",
      body: [
        "Suppliers quoted, negotiated, and revised over email with the buyer. The portal was technically there, but most of the actual sourcing activity happened off-system.",
      ],
    },
    {
      kind: "content",
      eyebrow: "Why it mattered",
      title: "Three downstream problems came out of the email workaround.",
      bullets: [
        "Compliance: no auditable record when a price or negotiation gets disputed.",
        "Data: no historical pricing or comparison data accumulating in any system.",
        "Efficiency: buyers manually maintained every supplier's flow over inbox.",
      ],
    },
    {
      kind: "content",
      eyebrow: "Goal",
      title: "Move sourcing online.",
      body: [
        "Pull suppliers off email and into the portal, and raise the share of sourcing flows that complete in-system.",
      ],
    },

    // =========================================================
    // 02  Design Process
    // =========================================================
    {
      kind: "section",
      eyebrow: "Design Process",
      title: "A homepage hypothesis, then a pivot.",
    },
    {
      kind: "content",
      eyebrow: "Where to look",
      title: "Sourcing topped the complaint list across procurement.",
      body: [
        "An earlier study across the full procurement system pointed to sourcing as the most complained-about area. \u201CBad experience\u201D isn't a designable problem on its own, so we ran a deeper round just on sourcing.",
      ],
    },
    {
      kind: "image-text",
      title: "A workshop turned vague complaints into four concrete areas.",
      body: [
        "Working with ops, I ran a workshop where the team role-played buyers and suppliers and walked the full sourcing flow. I tagged and clustered every issue surfaced afterward.",
      ],
      image: {
        src: "/images/supplier-new/1.png",
        alt: "Workshop output clustered into problem areas",
        width: W,
        height: H,
      },
      layout: "image-right",
    },
    {
      kind: "content",
      eyebrow: "Four clusters",
      title: "Issues collapsed into four areas of the product.",
      bullets: [
        "Homepage",
        "Detail page",
        "Quote form",
        "Negotiation form",
      ],
    },
    {
      kind: "content",
      eyebrow: "ROI",
      title: "We bet the homepage task center had the highest leverage.",
      body: [
        "Quote and negotiation forms sit at the tail of the flow. The homepage is the supplier's first landing point. A task center surfacing the right action regardless of stage could cover the entire journey. Coupa and Oracle both anchor on this pattern.",
      ],
    },
    {
      kind: "quote",
      text: "One intervention that covered the whole flow. That was the bet.",
    },
    {
      kind: "content",
      eyebrow: "Validation",
      title: "I took the homepage demo to interviews. The assumption broke.",
      body: [
        "Our model: supplier \u2192 email \u2192 login \u2192 homepage \u2192 task center \u2192 action.",
        "Reality: supplier \u2192 email \u2192 login \u2192 straight to the sourcing event detail page. The homepage was never on the path.",
      ],
    },
    {
      kind: "content",
      eyebrow: "Why",
      title: "Most suppliers use temp accounts that skip the homepage entirely.",
      body: [
        "Suppliers don't register a full portal account until they win a deal. Until then, they sign in with a temporary account, and that landing page goes directly to the sourcing event detail. Login data confirmed temp-account suppliers were the majority.",
      ],
    },
    {
      kind: "quote",
      text: "The homepage we'd been optimizing, most suppliers never saw.",
    },
    {
      kind: "content",
      eyebrow: "Refocus",
      title: "We pivoted to the decision moments inside the supplier journey.",
      body: [
        "What actually moves a supplier to participate is whether the right information shows up at the moments where they decide. We dropped the homepage scope and refocused on four decision moments along the sourcing flow.",
      ],
    },

    // =========================================================
    // 03  Solution
    // =========================================================
    {
      kind: "section",
      eyebrow: "Solution",
      title: "Four decision moments in the supplier journey.",
    },

    // ---- Moment 1: Email ----
    {
      kind: "content",
      eyebrow: "Moment 1",
      title: "The email is the real first touch, not the homepage.",
      body: [
        "Before a supplier ever clicks into the portal, the email itself has already decided whether they engage.",
      ],
    },
    {
      kind: "image-text",
      title: "The old email buried the action.",
      body: [
        "Plain text. Deadline, login info, and next steps collapsed into one paragraph. Buyers were so unsure suppliers would catch it that they sent a manual follow-up to highlight the key parts. Extra work on top of an already broken flow.",
      ],
      image: {
        src: "/images/supplier-new/2.png",
        alt: "Old email layout",
        width: W,
        height: H,
      },
      layout: "image-right",
    },
    {
      kind: "image-text",
      title: "The new email is a reusable template with a clear hierarchy.",
      body: [
        "I rebuilt the information architecture around three things: what the email is for, when the deadline is, what to do next. Then templated it. Sourcing has multiple email types and multiple buying orgs, so a shared template keeps maintenance and extension cheap.",
      ],
      image: {
        src: "/images/supplier-new/3.png",
        alt: "Redesigned email template",
        width: W,
        height: H,
      },
      layout: "image-left",
    },

    // ---- Moment 2: Detail page ----
    {
      kind: "content",
      eyebrow: "Moment 2",
      title: "The detail page is the temp-account supplier's first surface.",
      body: [
        "Old version: a single wall of text that mixed sourcing details with a long block of legal terms. Legal took up most of the page.",
      ],
    },
    {
      kind: "content",
      eyebrow: "Constraint",
      title: "Two requirements pulled in opposite directions.",
      bullets: [
        "Suppliers needed the sourcing context first.",
        "Legal required full disclosure of terms, with no summarization or skip patterns.",
        "\u201CShow summary\u201D and \u201Cunlock after 5s\u201D both failed legal review.",
      ],
    },
    {
      kind: "image-text",
      title: "Scroll the terms to the bottom to enable the checkbox.",
      body: [
        "Sourcing details sit at the top. The legal block follows. The supplier scrolls all the way through, and only then does the consent checkbox enable. Legal gets full-attention disclosure, and the sourcing context is no longer crowded out by terms.",
      ],
      image: {
        src: "/images/supplier-new/4.png",
        alt: "Detail page with scroll-to-unlock terms",
        width: W,
        height: H,
      },
      layout: "image-left",
    },

    // ---- Moment 3: Confirm before quote ----
    {
      kind: "content",
      eyebrow: "Moment 3",
      title: "Putting \u201Cconfirm participation\u201D before \u201Csubmit quote\u201D.",
      body: [
        "Old: two buttons showed up at once. Confirm participation and Submit quote. Suppliers froze. Many clicked neither.",
      ],
    },
    {
      kind: "image-text",
      title: "Confirmation gives buyers a signal they need before quoting starts.",
      body: [
        "If buyers know how many suppliers intend to participate, they can decide whether to widen the invite list. Confirm-first wasn't just UX cleanup. It carried real upstream business value.",
        "Until the confirm-by deadline, only Confirm shows. The quote action is hidden, with copy that reassures the supplier that confirming won't lock them out of quoting later.",
      ],
      image: {
        src: "/images/supplier-new/5.png",
        alt: "Confirm-first action sequence",
        width: W,
        height: H,
      },
      layout: "image-right",
    },

    // ---- Moment 4: Progress bar ----
    {
      kind: "content",
      eyebrow: "Moment 4",
      title: "A progress bar made the whole flow legible.",
      body: [
        "Old: suppliers had no view of where they were in procurement, or what came next.",
      ],
    },
    {
      kind: "image-text",
      title: "The hard part wasn't drawing the bar. It was mapping the flow.",
      body: [
        "Which steps are mandatory and which are skippable. Where the deadlines live. Which steps involve internal buyer-side decisions that shouldn't be exposed to the supplier. Each had to be aligned with procurement and ops before the bar could honestly represent the journey.",
      ],
      image: {
        src: "/images/supplier-new/6.png",
        alt: "Sourcing progress bar across stages",
        width: W,
        height: H,
      },
      layout: "image-left",
    },

    // =========================================================
    // 04  Impact
    // =========================================================
    {
      kind: "section",
      eyebrow: "Impact",
      title: "Online adoption tripled, and buyers became advocates.",
    },
    {
      kind: "stat",
      items: [
        {
          value: "3.9% \u2192 19.92%",
          label: "Adoption",
          note: "vs. 15% target",
        },
        {
          value: "4.91 / 5",
          label: "Satisfaction",
          note: "80+ post-launch responses",
        },
        {
          value: "~10 buyers",
          label: "Recommending",
          note: "from skeptical to proactive",
        },
      ],
    },
    {
      kind: "content",
      eyebrow: "Buyer behavior",
      title: "Buyers stopped fearing the support cost.",
      body: [
        "We talked to about ten buyers post-launch. They said they had confidence in the system and would proactively recommend it to suppliers. With the old version, buyers actively avoided introducing the portal because they didn't want to absorb the support burden it would generate.",
      ],
    },

    // =========================================================
    // 05  Reflection
    // =========================================================
    {
      kind: "section",
      eyebrow: "Reflection",
      title: "Two project judgments I keep coming back to.",
    },
    {
      kind: "content",
      eyebrow: "Takeaway 1",
      title: "Validate assumptions with real data, early.",
      body: [
        "The homepage hypothesis was logically sound and the ROI math was reasonable. Real user paths weren't anywhere near it. In B2B products, designers reach for inference fast, and inference often misses where users actually go.",
      ],
    },
    {
      kind: "content",
      eyebrow: "Takeaway 2",
      title: "Demos and design files in front of users beat pure interviews.",
      body: [
        "Users often can't articulate what they want. Put a design in front of them and they'll tell you exactly what's right and what's wrong. This was the project habit that paid off the most.",
      ],
    },

    // ----- Closing -----
    {
      kind: "closing",
      title: "Thank you",
      body: "Questions?",
    },
  ],
};

export default deck;
