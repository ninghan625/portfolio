---
title: Business Travel Initiatives Across Mobile & Web
slug: business-travel-initiatives-across-mobile-web
date: 2025-05
subtitle: Design contributions across request, booking, and in-trip management
---

## Role&Scope

### Business travel initiatives (Mobile + Web)

This case study summarizes main **business travel initiatives** I designed on the ByteDance Travel team, delivered at different times but under the same constraints: **policy compliance, approval efficiency, and travel decision-making**.

I grouped them to show how I design **end-to-end enterprise workflows across mobile and web**, for both **travelers (applicants)** and **approvers**.


## Challenge

### Recurring patterns in business travel

- **Flexibility vs compliance:** trips change often, but policy and approval rules must stay enforceable.
- **Two mental models:** travelers optimize for speed + control; approvers optimize for clarity + risk reduction.
- **High decision effort in booking:** hotel choice needs location context, but default map UI can be noisy and inconsistent in an internal product.


## Solution

### 1. Mobile Trip Request: Structured itinerary planning with low editing friction

**Goal:**Increase approval clarity by requiring travelers to specify **daily schedule per city** (time + work plan), instead of a single date range + generic reason—so approvers can better judge necessity and reduce unnecessary spend.

### Media
![](/images/travel/travel%2001.jpg)

**Key UX decision: **This added input is unavoidable, so I focused on making edits fast and non-blocking. I introduced **drag-and-drop itinerary cards** to let users reorder trip segments without re-entering details.

### Media
![](/images/travel/travel%2002.jpg)

**Impact:**

- Adoption: **31.02% of employees**, **22.68% of requests**
- Estimated annual savings: **146M RMB**
- Satisfaction: **4.98/5**

### 2. Web Hotel Booking: Map-based decision support near company location

**Goal: **Help employees choose hotels faster by adding **spatial context** to the booking flow.

**Key UX decision: **Designed a **map + list** experience where the map supports comparison and confidence (not just "a map view").

### Media
![](/images/travel/travel 03a.jpg)

### Media
![](/images/travel/travel 03b.jpg)

**Highlight: Making Google Maps feel first-party (Map Styling)**

Default Google Maps UI felt visually external and too dense. I validated feasibility and applied **custom map styling** as part of the product UI system:

- Decomposed map elements into **points / lines / areas**
- Defined what to **keep vs remove** for the "near company site" scenario
- Mapped remaining elements to the internal **color palette** for consistency + scanability

### Media
![](/images/travel/travel%2004.jpg)

### Media
![](/images/travel/travel%2005.jpg)

### Media
![](/images/travel/travel 06.jpg)

**Impact:**

- Shipped web hotel map **0→1** for **100K+ employees**
- **24%** of orders influenced by map search
- Booking flow time reduced by **9% (~9s)**
- Satisfaction: **4.82/5**
