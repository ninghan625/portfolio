---
title: "Internationalization at CIS: Mechanism, Specs, and an AI Skill"
slug: i18n-currency-formatting-toolkit
date: 2024-12
subtitle: Led CIS's internationalization initiative end-to-end: running the spec lifecycle, delivering the currency standard, and shipping i18n-checker, an AI Skill that brings spec enforcement into design, R&D, and QA.
---

> Note: the rendered case study lives in `app/work/i18n-currency-formatting-toolkit/page.tsx`. This markdown is kept as an archive/reference only.

## TL;DR

I own CIS's internationalization initiative, a company-level OKR covering 20+ product lines and 200K+ global employees. My work spans three pillars:

- **Mechanism**: a Collect → Iterate → Publish lifecycle so the spec system keeps improving itself
- **Specs**: led the Currency standard end-to-end; maintain the full library (Currency, Date/Time, Writing Style, Glossary)
- **Skill**: shipped i18n-checker, an AI Skill covering 4 dimensions and 1,939 glossary terms, running across Claude Code / Cursor / Mira

**Impact**: Currency toolkit adopted by 10+ design teams across 20+ product lines. i18n-checker shipped as a distributable Skill, now running across design, R&D, and QA.


## Context

CIS (Corporate Information Systems) serves 200K+ global employees across 20+ product lines such as Travel, Procurement, Contract, Finance, and ByteCanteen. As non-China-region employee share kept growing, i18n experience became a company-level OKR.

State of i18n when I took ownership:

- **Specs existed but were scattered.** A 2023–2024 push built the first generation of specs (Currency, Date/Time, English Writing), but they lived across different wiki pages with no single entry point.
- **Enforcement was fully manual.** Designers had to read the specs, apply them by hand, and cross-reference glossary entries. Coverage was inconsistent and review churn was high.
- **Coverage was incomplete.** Key modules such as multilingual typesetting, names, addresses, numbers, and RTL had no specs at all.


## Framework: three pillars

A spec document, by itself, doesn't change behavior. To own i18n at CIS scale, I built three things in parallel:

| Pillar | What it is | Answers |
|---|---|---|
| 1. Mechanism | Collect → Iterate → Publish lifecycle | How does the spec system sustain itself? |
| 2. Specs | Currency as deep case + full library maintenance | What does a great spec look like? |
| 3. Skill | i18n-checker (AI Skill across design / R&D / QA) | How do specs actually land in the product? |


## Pillar 1 · Mechanism

A lifecycle loop, not a one-time publish.

1. **Collect**: walkthroughs, reviews, and daily feedback flow into a unified problem log. Priority is data-driven: the shape of the problems decides what specs to build or revise next.
2. **Iterate**: each spec goes through audit, synthesize, validate. Currency is the showcase of this flow.
3. **Publish**: specs publish to a single entry point AND ship into i18n-checker the same day. Team sync happens via Bot pushes or focused sessions.

Every round: new problems → new/updated specs → updated Skill → better i18n quality.


## Pillar 2 · Specs: Currency deep case

Currency was the first spec I took from audit to production as owner. Same methodology now runs across Date/Time, Writing Style, and Glossary.

### The problems I was solving
- Inconsistent ISO code placement (USD 1,000 vs 1,000 USD)
- Mixed currency format ($ / USD / US$)
- Unclear large-number formatting (K / M / B)
- Inconsistent currency picker options
- Undefined visual hierarchy for totals

### Approach
1. **Audit** current patterns and tag issues
2. **Synthesize** from 50+ industry references, producing a draft 3-format framework (Short / Standard / Explicit)
3. **Validate** the 3-format model across design teams, aligning on edge cases and rollout expectations

### What shipped
- **Part 1 · Format rules**: ISO/number placement, spacing, separators, with correct vs incorrect examples
- **Part 2 · Decision guidance**: how to choose Short vs Standard vs Explicit, with accepted exceptions and surface examples
- **Part 3 · Components & patterns**: large-number shorthand, currency conversion, currency selector, amount input, shipped as code-backed components

Full guideline: `/images/Currency/Currency Amount Formatting Guidelines.pdf`

> Currency proved the methodology. But specs alone don't scale: teams can't memorize every rule across Currency, Date/Time, Writing Style, and 1,939 glossary entries. That's what Pillar 3 is for.


## Pillar 3 · Skill: i18n-checker

### Evolution

**Act 1 · V1: Figma QA plugin** (Cursor + GPT)
Scanned Figma frames for i18n issues with one-click fixes. Worked, but only inside Figma, only for designers, only at the design stage.

**Act 2 · The organizational shift**
- Designers started vibe coding (shipping code via Claude Code / Cursor, often bypassing Figma)
- Engineers wanted i18n checks on code, not just designs
- QA wanted pre-release validation on screenshots

The plugin couldn't follow the work. The delivery model had to change.

**Act 3 · V2: i18n-checker Skill**
One zip. One install. Runs wherever the work happens:

| Stage | Who | Where it runs |
|---|---|---|
| Design | Designers | Figma export → Mira / Cursor |
| R&D | Engineers (incl. vibe-coding designers) | Claude Code / Cursor / Trae |
| QA | PM / QA | Mira (screenshot upload) |

### 4 dimensions of coverage

- 💰 **Currency & Amount**: symbol/ISO position, separators, negative amounts, abbreviation, consistency
- ✍️ **Writing Style**: Title vs Sentence case, CN/EN punctuation, spacing, hyphens/en-dashes, line wrapping
- 🕐 **Date & Time**: month abbreviations, 12/24h, time ranges, timezones, info density
- 📖 **Glossary**: 1,939-term CN/EN glossary across Common, Procurement, Contract, Spend, Travel, ByteCanteen

### How it works
- **Input**: screenshots, UI text, Figma exports
- **Output**: structured table per dimension (Location / Current / Expected / Rule / Severity), with a summary count

> 4 spec families plus 1,939 glossary entries exceed anyone's memory. An AI Skill is the only scalable enforcement layer, and by delivering it as a Skill (not a plugin), it meets people where they already work.


## Impact

- **Currency (Pillar 2)**: adopted by 10+ design teams, 20+ product lines; referenced by Douyin and Volcano Engine as best practice.
- **i18n-checker (Pillar 3)**: shipped as a distributable Skill; 1,939-term glossary built in; runs across Claude Code / Cursor / Trae / Mira.
- **Mechanism (Pillar 1)**: lifecycle loop running across CIS; the spec system is now a living asset, not a one-time publish.


## Reflection

### 1. Specs ≠ enforcement
A spec document, no matter how well written, doesn't change behavior by itself. To ship i18n quality you need mechanism (how specs evolve) and tooling (how specs execute) as co-equals with the spec. Specs without a loop rot; specs without tooling live on wikis no one reads.

### 2. AI is the scalable leverage for i18n
At 4 spec families plus 1,939 glossary terms, human memory fails. Reframing i18n QA as an AI Skill was the unlock, and it only worked because the Skill distributes across wherever people already work, not just where designers happen to work.
