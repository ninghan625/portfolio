---
title: Supplier Portal Sourcing Experience Optimization
slug: supplier-portal-sourcing-experience-optimization
date: 2025-06
subtitle: Solved low adoption and compliance risks by pivoting to a transparent, email-first workflow with visualized timelines.
---

## Role&Scope

### Product direction + cross-surface execution

I owed problem framing, research synthesis, and end-to-end design across **Email + Web**. I led a strategy pivot (**dashboard-first → email-first**) and shipped a trust system by aligning **Buyer, Compliance, and Engineering**. 

I used **AI-assisted rapid prototyping** to pressure-test assumptions early and de-risk the pivot before committing engineering time.


## Background

### Why sourcing became a compliance risk, not just a UX issue

Sourcing is a high-stakes procurement workflow with strict deadlines, documentation, and audit requirements.

However, **most supplier actions happened in offline email threads**, making decision trails hard to trace and increasing compliance risk. This project aimed to move work back into the portal by rebuilding trust in system communications and making progress transparent.

### Media
![The core workflow of sourcing](/images/supplier/Supplier%2001.jpg)


## Challenge

### 94% of activity lived in an unauditable "email black box"

Although we had a supplier portal, **most sourcing activities happened in offline emails**, making progress hard to track and decisions difficult to audit. 

**What was broken:** 

- Buyers didn't trust system notifications → **manual follow-up emails became the norm**
- Suppliers missed critical requirements → **got blocked by confusing steps or dense legal content**
- Compliance lacked consistent checkpoints → **consent and traceability were fragile**

**Design goal**

> Rebuild trust and auditability by making the portal the source of truth—without adding steps to suppliers' core tasks.


## Design Process

### 1. De-risk a dashboard-first direction before committing engineering time

We initially explored an industry-standard pattern: a "Task Center" dashboard to improve task discoverability. However, dashboard changes were expensive and cross-module, with unclear ROI.

### Media
![Market leaders: a centralized "To-Do Center" on the dashboard](/images/supplier/Supplier%2002.jpg)

To avoid a high-cost build based on assumptions, I used **AI-assisted prototyping** and stakeholder walkthroughs to pressure-test the hypothesis early and clarify what would actually shift behavior.

### Media
![Use GPT to generate prototype](/images/supplier/Supplier%2003.gif)

### 2. Aha moment: Stop fixing navigation—fix the entry point

Almost 70% of suppliers hadn't registered in the portal before they were shortlisted/awarded, so they couldn't start from the portal homepage. For them, **email deep-links + the detail page** was the real entry flow.

This shifted our strategy from **"improve portal navigation"** to **"rebuild trust at the entry point"** — treating the detail page as the supplier's homepage.

### Media
![](/images/supplier/Supplier%2004.jpg)

### 3. Synthesize research into decision criteria (not just findings)

Three root causes became our decision anchors:

- **System emails weren't actionable at first glance** — critical updates (deadlines, required steps, changes) were buried, so suppliers missed intent and buyers stopped trusting notifications.
- **The Sourcing Detail Page didn't communicate "where we are / what's next"** — unclear separation between requirements vs legal content and low process transparency pushed buyers to go offline.
- **Buyers needed early intent signals (Participate)** — without a clear participation commitment, they couldn't gauge bidding pool health and had to manually chase suppliers.


> Design Principle: Make the next action obvious, make progress visible, and make compliance enforceable — without increasing supplier effort.


## Solution

### 1. Trustworthy notifications — Email as a first-class product surface

I redesigned system emails to function as a reliable entry point, not a passive alert:

- surfaced what matters (deadline, key changes, required action)
- reduced cognitive load with predictable structure
- drove confidence so buyers stop sending manual follow-ups

**Why it matters:** if the first touchpoint is untrusted, work will keep leaking into offline threads.

### Media
![](/images/supplier/Supplier%2005.jpg)

**Built for Scale:** I delivered a **standardized email component**. This allows other internal procurement teams (like TikTok and Auto business lines) to reuse the templates, ensuring a unified brand voice while reducing design debt.

### Media
![Email Template](/images/supplier/Supplier%2006.jpg)

### 2. A stage model that makes progress auditable

On the detail page, I introduced: 

- A stage-based timeline that acts as the backbone of the workflow. Stage clarity aligned with compliance on what can be transparently shown
- Early visibility of participation signals to reduce buyer uncertainty
- One primary action per stage to reduce confusion

**Why it matters:** progress becomes legible and traceable, which is essential for enterprise trust.

### Media
![](/images/supplier/Supplier-07.jpg)

### 3. Compliance enforcement at the moment of commitment

To balance usability and risk mitigation, I separated "read once" compliance content from "read every time" task content:

- kept requirements scannable and action-oriented
- moved long legal content out of the main task path
- enforced explicit consent via a checkbox gate right before submission

**Why it matters:** compliance is satisfied without derailing the core task flow.

### Media
![](/images/supplier/Supplier-08.jpg)


## Impact

### Design-led solution that improved adoption and earned strong user feedback

- **High satisfaction in usability validation (buyer-facing results).**
    - Visual appeal: **4.8/5**
    - Willingness to promote to suppliers: **4.8/5**
    - Perceived improvement vs. legacy: **4.7/5**
    - "Suppliers can easily understand the new flow": **4.7/5**
- **Strong results after phased rollout.** In the **GGP** department's **Q4 pilot**, online sourcing adoption increased from **3.9% → 19.92%** (vs. **15%** target).
- **Recognized internally.** The design-driven proposal was positively received by the product team and became the direction for rollout.


## Thoughts

### The Designer as an Orchestrator Navigating Ambiguity

Looking back at this project, the interface might look simple—often just standard components—but the decision-making behind it is incredibly complex.

At the start, the path forward was unclear. I stepped beyond the traditional design role to act as a **Product Strategist**, bridging the gap between Buyers, Suppliers, Legal, and Engineering.

### The Balancing Act

My core responsibility was to find the "Sweet Spot" amidst conflicting forces:

- **User Experience vs. Strict Compliance:** I ensured that mandatory legal checks (like the checkbox) were implemented without destroying the usability flow.
- **Design Value vs. Dev Cost:** I worked closely with R&D to weigh feature impact against engineering effort, ensuring we delivered a high-quality solution that was technically feasible and cost-effective.
