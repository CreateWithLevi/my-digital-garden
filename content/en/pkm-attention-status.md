---
title: How I Redesigned the Status System in My PKM
date: 2026-06-28
tags:
  - PKM
  - Obsidian
  - GTD
  - AI
aliases:
  - How I Redesigned the Status System in My PKM
description: "I redefined status in my PKM as Attention Status: not a way to track completeness, but a way to track what kind of attention a container needs now."
---
> 中文版: [[zh/pkm-attention-status|我如何重新設計 PKM 的 status 系統]]

This note is published as a Digital Garden reference. It is not a complete tutorial for my entire system. It is a snapshot of how I currently think about PKM status, views, and AI collaboration.

If I wanted to make this easier for external readers, this topic could probably become several separate essays: Current Actions, Outcomes, Captures, and References. Each view has its own purpose. This note keeps the core design decisions in one place.

### I Was Using Status for Too Many Things

I recently redesigned part of my PKM system. The biggest change was not adding a new feature, but redefining what the `status` field is supposed to mean.

At first, I took the GTD workflow and placed it into Obsidian: capture, clarify, organize, reflect, engage. This felt natural. I wanted to know what state each note was in.

After using it for a while, I realized the problem was not that I had too few statuses. The problem was that I was using the same status field to track too many different things.

Sometimes status meant “this content is not complete yet.” Sometimes it meant “this project still needs to be organized.” Sometimes it meant “this opportunity is at a certain stage in the external process.” When I looked at my dashboard, I could not always tell whether I was looking at content maturity, task progress, or attention state.

So I separated these concerns:

> status should not track content completeness. It should track the attention workflow: does this container need my attention now, and what kind of attention does it need?

### Attention Status Is a Separate Dimension

When people talk about status in PKM or project management, they often mean lifecycle: draft / published, applied / interviewing, active / done. These are useful, but they answer one kind of question:

> Where is this thing in its own process?

Attention Status answers a different question:

> What kind of attention does this thing need from me now?

This idea is close to GTD, but I do not know whether GTD officially uses the phrase “Attention Status.” A more accurate description is that I took GTD’s five steps — Capture, Clarify, Organize, Reflect, Engage — and turned them into PKM metadata.

GTD already uses the language of attention. The capture step is about collecting what has your attention. But GTD’s five steps are more of a workflow than a set of note statuses. My version turns that workflow into a state that Obsidian and AI can read.

So this is not pure GTD. It is more like:

> GTD workflow × PKM metadata × AI collaboration.

### My Six Attention Statuses

I now keep only a small set of statuses:

- `1 Capture`: collected, but not yet evaluated.
- `2 Clarify`: needs clarification — what is it, why does it matter, what is the next step?
- `3 Organize`: the direction is roughly clear, but the structure is not trustworthy yet.
- `4 Reflect`: needs review, integration, or re-evaluation.
- `5 Engage`: ready to act on, ideally with a clear next action.
- `0 Archived`: no longer needs active attention.

Domain-specific lifecycles no longer go into `status`. Articles can have `postStatus`. Opportunities can have `stage`. Evergreen notes can use `#🌱 / #🌿 / #🌲` for maturity. Each field should answer one question. This makes the system much quieter.

### I Do Not Apply Status to Everything

There is an important constraint: I do not apply Attention Status to every note, every task, or every piece of information.

Right now, status is mainly used in two places.

The first is Outcome: containers for output.

Outcomes include projects, areas, and goals — things that are meant to be moved forward. These are usually not raw inputs anymore. They already represent some kind of formed outcome. Because of that, they usually do not start from `1 Capture`. They mostly use:

- `3 Organize`: this outcome still needs a trustworthy structure.
- `4 Reflect`: this outcome needs review or realignment.
- `5 Engage`: this outcome is ready to be advanced and should have a next action.

In other words, Outcome status does not track the completion of individual actions. It tracks what kind of attention the output container needs.

The second is Capture: workflows for input categories.

Capture does not track every clipping, every journal entry, or every reference. It tracks categories of input that I want to maintain over time, such as Journal, Clippings, Meetings, Evergreen, Projects, Areas of Focus, and Opportunities.

Capture status usually uses:

- `1 Capture`: this input category is still being collected, but the workflow is not stable yet.
- `2 Clarify`: I need to clarify how this kind of input should be processed, transformed, or used.
- `3 Organize`: I need to turn it into a stable workflow or dashboard.

If every note, task, and clipping required an Attention Status, the system would become too heavy very quickly. So I only use status on a limited number of containers: roughly a few dozen outcomes and a few dozen capture categories.

This is not a system for managing all metadata. It is a system for helping me and AI align on which containers need attention.

### My Outcome View Now Starts from Goals

Another important change: my Outcome view no longer starts mainly from project status. It starts from the Goal level.

I used to get stuck asking: “Is this project Engage? Is this area Organize?” Now I more often ask: which 1–2 year goal do these projects and areas serve? What is the most important goal right now? Which stage outcome actually needs to move forward?

GTD also has another dimension: Horizons of Focus. Strictly speaking, the common GTD model has six horizons: Ground (calendar / next actions), Projects, Areas, Goals, Vision, and Purpose / Principles.

Visually, my system now feels like two axes:

| Axis | Question | In my system |
|---|---|---|
| Horizons / Outcome Level | What level does this belong to — next action, project, area, goal, vision, purpose? | Outcomes mainly start from Goals, then link down to Projects / Areas |
| Attention Status | What kind of attention does this need now? | `1 Capture` → `2 Clarify` → `3 Organize` → `4 Reflect` → `5 Engage` / `0 Archived` |

This lets me ask more precise questions:

- Is this Goal actually being advanced?
- Which Projects exist but are still stuck in `3 Organize`?
- Which Areas need `4 Reflect` instead of more tasks?
- Which things can be moved to `0 Archived`?

### Status Became an Interface for AI Collaboration

Status still exists, but it is not necessarily something I manually operate every day. It has become metadata that AI can read.

For example, I can ask AI: which projects are still in `3 Organize`? Which notes no longer match their current status? Which outcomes look active but do not have a next action?

Checking all of this manually would be tiring. But for AI, status, frontmatter, links, and tasks are all readable signals.

This changed how I use my PKM.

Once a basic structure is in place, I do not need to use the system like a database manager every day. I should focus on three things:

1. Imagining the outcome I want.
2. Taking actions that move those outcomes forward.
3. Handling relationships between notes, projects, and goals.

AI can help read the system, organize state, detect inconsistencies, and suggest next steps.

So this status system is not ultimately about building a beautiful dashboard. It is about creating an interface that both I and AI can understand.

> status is no longer just a dashboard filter. It is an interface through which AI can understand the current state of my system.

Humans provide direction, judgment, and tradeoffs. AI helps maintain structure, read state, and support alignment.

That is my biggest realization about PKM right now:

> A good system should not make me spend more time managing the system. It should make it easier to return to what actually matters.
