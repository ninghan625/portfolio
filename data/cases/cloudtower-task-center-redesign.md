---
title: CloudTower Task Center Redesign
slug: cloudtower-task-center-redesign
date: 2025-09
subtitle: Redesigned the Task Center to simplify complex status tracking and created a standardized component library to boost development efficiency.
---

## Role&Scope

### End-to-end redesign: Simplifying complex task tracking
Led the end-to-end redesign of CloudTower's **Task Center (Web)** to make complex task status tracking easier to understand and scale.

### Component standardization: Building a scalable design system
Built a **standard component library** by componentizing task cards with Figma variants as a single source of truth for future iterations.


## Background

### What is the Task Center?
In data center management, most operations are **asynchronous**—they don't finish immediately.

Users need to initiate a task and then switch to other work while waiting for the result. The **Task Center** acts as a unified hub, allowing users to track the status and outcome of all these background operations in one place.

### Why Redesign?
As **CloudTower** introduced more complex features, the legacy Task Center design could no longer handle the increasing data density and complexity.

We needed a scalable solution capable of displaying intricate task details and supporting the platform's future growth.


## Design Process

### 1. Understand task status transitions and user behavior
Through user interviews, competitive analysis, and UI walkthroughs, I identified the current task types, user behaviors, and needs.

### Media
![](/images/task/Task 01.jpg)

### 2. Map out tasks transitions status machine
A task transitions through various states from initiation by the user to completion. Different task states influence the actions a user can perform and vary in importance to the user.

### Media
![Task Transitions Between States](/images/task/Task 02.jpg)

### Media
![Operations available in different states and user feedback](/images/task/Task 03.jpg)


## Solution

### Part 1:

**❗️Before: No visibility into the task progress**

Regardless of whether it was a step-based task or a data transfer task, the same generic "In Progress" icon was used.

For most non-data transfer tasks, users had **no visibility** into the specific step, only seeing a spinning loading loop.

### Media
![](/images/task/Task 04.jpg)

**✅ After: Visualize progress and prompt necessary actions**

Designed distinct icons for each of the three states to help users visualize progress and prompt necessary actions.

### Media
![](/images/task/Task 05.jpg)

### Media
![Showcase: Task Status Transitions in Cross-Cluster VM Migration](/images/task/Task 06.jpg)

### Part 2:


**❗️Before: Sorting logic issues - critical tasks buried**

Sorting strictly by "Start Time" pushed critical "Paused" tasks (which require user action) out of the viewport. Users were forced to scroll extensively to locate them.

### Media
![](/images/task/Task 07.jpg)

**✅ After: Prioritize paused tasks**

The sorting logic is no longer strictly chronological (newest to oldest). Instead, I implemented **status-based sorting**.

Tasks requiring user attention are prioritized at the top, ensuring critical items are not pushed out of the viewport by new incoming tasks.

### Media
![](/images/task/Task 08.jpg)

### Part 3:


**❗️Before: Completed tasks vanished immediately**

Completed tasks vanished immediately after the panel was closed (marked as "Read"). This created an unstable experience—if a user closed the panel by mistake, they were forced to navigate to the full "All Tasks" page to find.

### Media
![](/images/task/Task 09.jpg)

**✅ After: Stable task history**

I removed the volatile "Read/Unread" states. Recently completed tasks are now **persistently displayed** in the panel, ensuring a stable reference for users.

### Media
![](/images/task/Task 10.jpg)

### Part 4:

**❗️Before: Users had to scroll repeatedly within a small window to track tasks**

The panel's fixed maximum height severely limited the number of visible tasks. During high-volume operations, users had to scroll repeatedly within a small window to track their target tasks.

### Media
![](/images/task/Task 11.jpg)

**✅ After: Dynamic height with fixed viewport bottom margin**

Removed the fixed height of the task panel. Instead, it now maintains a fixed 64px gap from the bottom of the screen, maximizing the available space to show more tasks.

### Media
![](/images/task/Task 12.jpg)

### Part 5:

**❗️Before: No status indication on task icon**

The task center button did not reflect any status changes. Users had to click the icon to view any specific details about task execution.

### Media
![](/images/task/Task 13.jpg)

**✅ After: Status combinations to inform task progress**

### Media
![](/images/task/Task 14.jpg)


## Impact

### Design Asset: Unifying Visual Style & Componentizing Task Cards
By encapsulating the task cards into **Figma Components with Variants**, I created a single source of truth for all task states. This reduced design redundancy and improved the **consistency and efficiency** of future design iterations.

### Media
![](/images/task/Task 15.jpg)
