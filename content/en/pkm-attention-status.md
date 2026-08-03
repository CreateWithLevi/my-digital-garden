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
description: "I redefined status in my PKM as a cross-domain, cross-level attention state; each domain can still keep its own lifecycle status."
---

## I Originally Used status for the Wrong Thing

I recently reorganized my PKM system. The biggest change was not adding a new feature, but starting to unpack what the `status` field was actually tracking.

At first, I put the GTD workflow into Obsidian: capture, clarify, organize, reflect, engage. This felt intuitive because I wanted to know what state each note was currently in.

After using it for a while, the statuses on my dashboard started to lose their meaning.

Sometimes `status` meant “this piece of content is incomplete.” Sometimes it meant “this project still needs to be organized.” Sometimes it meant “what stage this opportunity has reached.” The same field was answering three different questions, so in the end each option had to be guessed from context.

The real problem was not that there were too few options. It was that the field’s responsibility was unclear.

So I eventually left `status` with only one question:

> What kind of attention does this container need right now?

## Lifecycle and Attention Are Two Dimensions

When people talk about status in knowledge management or project management, they are usually talking about the thing’s own lifecycle: an article is a draft or published, an opportunity is being contacted or finished, and a project is in progress or complete.

These states answer:

> Where has this thing reached in its own process?

Attention Status answers a different question:

> What kind of attention does this thing need from me now?

Both are needed, but they should not be put in the same field. A clearer approach is to let the same piece of information have both kinds of status:

- One field describes what state this thing is in for me right now: does it need attention? Should I invest in it, organize it, rethink it, or leave it alone for now?
- The other field describes where the thing is in its own process: has the article been published, which interview stage has it reached, or is the project in planning, execution, or complete?

The first is a general-purpose Attention Status that can apply across domains and different levels of information. The second is the domain’s own conventional status, such as `postStatus`, an interview `stage`, or a project phase. Neither replaces the other; they answer different questions.

This approach was inspired by GTD’s Capture, Clarify, Organize, Reflect, and Engage, but it is not meant to copy GTD into my notes unchanged. It is more like turning a workflow into metadata that both AI and I can read.

## My Six General-Purpose Statuses

My `status` field now keeps only six options:

- `1 Capture`: brought in, but not yet judged.
- `2 Clarify`: needs clarification — what is it, why does it matter, and what is the next step?
- `3 Organize`: the direction is roughly clear, but it needs to be organized into a usable structure.
- `4 Reflect`: needs review, integration, or re-evaluation.
- `5 Engage`: ready to act on, ideally with a clear next action.
- `0 Archived`: temporarily does not need attention; it exits the active loop.

These statuses are not a linear measure of completion. `Reflect` is not necessarily closer to finished than `Organize`, and `Archived` does not mean failure. They tell me how to handle this information the next time I notice it.

For example, a project may enter `Reflect` because one stage is complete and I need to reconsider the next step, rather than continue adding tasks. An Area that has existed for a long time may also return to `Organize` because its structure has drifted out of shape.

## The Same Status Set Can Span Different Levels

The benefit of a general-purpose status is that, in theory, it can apply to every kind of information: a Goal, Project, Area, individual note, Capture category, or even a workflow.

For example:

- A Project can be `5 Engage` because it is ready for execution; its own project phase is “in progress.”
- An Area can be `4 Reflect` because it needs to be re-evaluated; an Area itself does not have a complete or incomplete state.
- A Clippings category can be `3 Organize` because its input-to-output workflow still needs organizing.
- An article can be `2 Clarify` because its core idea is not clear yet; its own `postStatus` can still be Draft.

The same status set can therefore help me cross information levels and find everything that currently needs a certain kind of attention. It is not limited to Outcomes, and the fact that a Capture category tracks a workflow does not make it unsuitable for Attention Status.

When the field is responsible only for attention, I can ask questions across domains:

- Is this Goal actually moving forward right now?
- Which Projects exist but are still stuck at `3 Organize`?
- Which Areas need `4 Reflect` instead of more tasks?
- Which things can actually move to `0 Archived`?

## It Can Also Become a Shared Index for AI

I also hope this general-purpose status set can become an interface AI uses to read long-term state.

For example, I can ask AI to check: which Projects’ statuses no longer match reality? Which Outcomes look as if they are moving forward but have no next step? Which containers should move from `Engage` back to `Reflect` so they do not keep occupying attention?

Its potential value is that AI does not need to understand every domain’s lifecycle first. It can find all the information marked `Clarify`, `Reflect`, or `Engage`, then use the Project note’s Current Focus, Next, Waiting, and recent evidence to make a judgment.

I need more results before I can say whether this actually helps AI execute better. At least the meaning is more stable: Attention Status finds attention needs across domains, while domain status describes the progress of the thing itself.

Once the basic structure is stable, I do not need to maintain it every day like a database. I need to focus more on three things:

1. Imagining the outcome I want.
2. Taking actions that move the outcome forward.
3. Handling the relationships among notes, projects, and goals.

AI can help read the system, organize state, find inconsistencies, and suggest possible next steps.

Humans are responsible for direction, judgment, and tradeoffs. AI is responsible for maintaining structure, reading state, and helping things stay aligned.

## Two Statuses, Each Answering One Question

This design ultimately comes down to a simple distinction:

- General-purpose status: What kind of attention does this thing need from me now?
- Domain status: Where has this thing reached in its own process?

If a field is answering two questions at once, splitting it into two fields is usually clearer than adding more options. The general-purpose status should stay small and stable so it can work across domains; each domain can keep the process details it actually needs.

A good system does not describe every detail. It makes the next judgment easier.

> A good system should not make me spend more time managing the system. It should make it easier to return to what actually matters.

If you want to continue seeing how long-term state supports multiple AI Tasks, you can read [[en/organizing-ai-tasks|When AI Starts Handling Different Kinds of Work, How Should You Organize Them?]].
