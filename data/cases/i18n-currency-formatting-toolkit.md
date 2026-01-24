---
title: "Internationalization Quality: Currency Amount Formatting Toolkit"
slug: i18n-currency-formatting-toolkit
date: 2024-12
subtitle: Standardized currency amount formatting across multi-currency products with clear guidelines and a Figma plugin.
---

## Role&Scope

### Guideline + Components: From research to scalable standards
I owned the **Currency** track in our i18n quality initiative (Date/Time, English Copy, Currency). I led **research and internal audits** to turn fragmented patterns into a clear, scenario-based guideline, then partnered with engineering to ship **code-backed components** that made the standard easy to adopt.

### Figma Plugin: Automating i18n QA in the design workflow
To scale consistency beyond documentation, I also built an **AI-assisted Figma QA plugin** that checks i18n issues across all three areas and provides actionable fix suggestions (including one-click apply where safe).


## Background

### Why currency became the first i18n priority
As our org scaled internationalization (i18n), recurring quality issues showed up across products: **currency amounts, English copy, and date/time formats**. I owned the **currency amounts** track.

Money appears everywhere—travel, procurement, contracts, and finance—yet teams used different conventions and levels of precision. The result was inconsistent UI, extra review cycles, and avoidable implementation churn.

### Media
![Examples of inconsistent currency formatting across products](/images/Currency/Currency 01.jpg)


## Challenge

### Scaling one standard across many products
"Correct formatting" rules were relatively straightforward (e.g., ISO code placement, spacing, separators). The harder part was **how teams choose the right format** across:

- different business contexts (travel vs procurement/contract/finance)
- different surfaces (cards, tables, forms, detail pages)
- different intent (scan vs compare vs verify)
- legacy patterns and edge cases

The goal was guidance that is **consistent, practical, and adoptable**—clear defaults with room for valid exceptions.

### Media
![Different business contexts/surfaces/intents](/images/Currency/Currency 02.jpg)


## Design Process

### 1. Synthesis from industry references
I reviewed **50+ references** across B2B and B2C products, official documentation, and design systems to extract durable patterns that work under real UI constraints (layout, truncation, scanability).

### Media
![Competitive analysis snapshot](/images/Currency/Currency 03.jpg)

### 2. Audit and alignment across business lines
I audited currency usage across key business lines and reviewed real scenarios with domain owners. This helped align on:

- where inconsistency was coming from,
- what should be treated as best practice,
- and which variations could remain as accepted exceptions.

### 3. Standardizing into three formats
From research + internal needs, I consolidated the system into three formats that cover most scenarios while staying easy to learn:

- **Short** — simplified for price display when the currency is unambiguous in context
- **Standard** — the default when currency can't be safely inferred, keeping amounts accurate and complete
- **Precise** — symbol + ISO for price displays in multi-currency contexts.

### Media
![](/images/Currency/Currency 04.jpg)


## Solution

### Design Principle

> Deliver a toolkit, not just formatting rules

### 1. Clear format definitions teams can trust
I documented the core rules (ISO usage, spacing conventions, separators…) so teams had a single source of truth for implementation.

### Media
![](/images/Currency/Currency 05.jpg)

### 2. Scenario-based guidance for choosing formats
Instead of introducing a rigid decision framework, I documented **recommended usage patterns** for Short / Standard / Explicit across real product scenarios—so teams could make consistent choices based on context.

For each scenario, I provided:

- the **recommended format** (Compact / Standard / Precise)
- **example UI patterns** (best practice)

I also provide **accepted alternatives** when teams had valid constraints

This made the guideline easier to adopt because it gave teams a clear "most common best practice" plus flexibility for edge cases.

### Media
![](/images/Currency/Currency-06.jpg)

### 3. Patterns and components for money workflows
Currency display is only one part of a money workflow. To cover end-to-end use cases, I added interaction guidance and reusable patterns for:

- **Estimated amounts** (communicating uncertainty)
- **Currency conversion** (original vs converted values)
- **Currency selector** (defaults, fallbacks)
- **Amount input** (validation, formatting states)

These patterns were implemented as reusable components and added to the component library (code-backed) to keep new work consistent by default.

### Media
![](/images/Currency/component1.jpg)

### Media
![](/images/Currency/component2.jpg)

### Media
![](/images/Currency/component3.jpg)

### 4. Figma Plugin - Workflow automation with a design QA checker
Designers can't realistically memorize every i18n rule across currency, date/time, and English copy. To reduce avoidable mistakes and review churn, I built a lightweight **Figma QA plugin**—**coded with Cursor + GPT**—that brings i18n checks directly into the design workflow.

- **Scans frames** and flags non-compliant patterns
- Gives **actionable suggestions** (what's wrong + what to change)
- Supports **one-click apply** for safe fixes

### Media
![](/images/Currency/Currency 09.gif)

> [!PDF]
> ### Read the full guideline
> If you're interested in the full specification (format rules, scenario examples, and component usage), you can view the document here:
> [Currency Amount Formatting Guidelines.pdf](/images/Currency/Currency_Amount_Formatting_Guidelines.pdf)


## Impact

### Scaling consistency across the organization
- **Department-wide adoption:** The currency formatting toolkit has been adopted across our Corporate Information Systems department and is expected to scale to multiple design teams (Legal, Contracts, Finance, Business Travel, HR). It received strong internal feedback and has also been referenced by other orgs (e.g., Douyin and Volcano Engine) as a reusable best practice.
- **Efficiency + quality gains through code-backed components:** By partnering with engineering to ship the currency component into the shared component library, we significantly improved design–development efficiency, increased consistency of currency display across products, and raised overall UI quality.
- **Early validation for the plugin:** In a small pilot, multiple designers reported the Figma QA plugin was highly helpful for catching i18n issues early and reducing avoidable rework.
