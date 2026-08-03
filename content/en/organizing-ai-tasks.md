---
title: When AI Starts Handling Different Kinds of Work, How Should You Organize Them?
date: 2026-07-31
tags:
  - AI
  - PKM
  - AI collaboration
  - Workflow
aliases:
  - When AI Starts Handling Different Kinds of Work, How Should You Organize Them?
description: How I use Main, long-term, and one-off Tasks to organize AI work while preserving global judgment, reducing context switching, and maintaining a trustworthy state.
---

Once AI started being able to help me with more and more things, the question was no longer only how to write prompts.

AI can organize goals, screen job opportunities, prepare applications, write articles, research information, and even work directly in a codebase or Webflow to change a real project. But when these kinds of work appear at the same time, new questions emerge: which Task, or working space, should each one go into? Which context needs to stay together? Once a Task is finished, how should its result flow back into the overall plan?

If these questions are not handled well, opening more AI conversations does not necessarily make things smoother. It may only scatter the mess that was originally concentrated in one place across more places.

### One Main Conversation Used to Be Convenient

I used to do many things in one long conversation with Claudian in Obsidian. This had a major advantage: I rarely had to switch context. AI already knew what I had been working on, how my knowledge base worked, and roughly how different projects related to one another. As long as automatic compaction let the conversation continue, I tended to stay in the original conversation.

Projects with very clear boundaries sometimes got their own Task. But work that was still vague or crossed different domains was not assigned very systematically. Once I split something out, new questions appeared: who would integrate it later? Would the main conversation know about a decision made in another conversation? Would I have to explain it all again?

Most of my work has now moved to the Codex app, and there is even a cute pet beside me while I run Tasks. Obsidian and the original PKM structure are still there, but I do not necessarily open and operate them every day. Much of the work happens directly in Codex; I return to Obsidian when I need to read, make a judgment, or look at the whole system again.

The real change was not opening more conversations. It was gradually separating different kinds of work into three kinds of responsibility: Main Task, long-term Task, and one-off Task.

### A Task Is Not a Topic Category; It Is a Workroom

I do not create a permanent Task simply because a topic is important. A Task is usually worth keeping around because it has a clear responsibility, continues across multiple stages of work, and has something specific to leave behind after one round is complete.

At minimum, a Task should answer a few questions: What outcome is it meant to complete? What does it own, and what does it not own? Which steps will it repeat? Where does it need human judgment? What counts as complete? Where should the result be written back?

If these questions have no answer, a Task can easily become another chat window where anything can be discussed.

This is roughly how I use the three kinds of Task today.

### Main Task: Keep the Global View Without Owning Every Execution

The Main Task reads the Goals, Current Focus, the status of different Projects, and what has recently happened in other long-term Tasks. It is more like a control room, responsible for comparing work across domains, planning, and keeping states aligned.

For example, it can review the currently pinned Task conversations and update Current Actions and Outcomes. If a conversation has become too long, it can ask another Task to provide a handoff summary. If a progress update has not been written back to a Project note, it can help fill in a trustworthy current state.

The Main Task can also plan new workflows for other Tasks. For now, though, I still trigger this deliberately. I keep the decision of whether something should start and who should take it. Once a workflow has succeeded repeatedly and its responsibility and acceptance criteria are stable, I may consider automating more of the dispatching or scheduling.

This means the Main Task is not just a router. It can make cross-project judgments, organize state, and complete small modifications. But when a piece of work starts to need its own dedicated context, a continuous sequence of actions, and evidence for verification, it should return to the Task responsible for that work instead of continuing to stuff every detail into the Main Task.

### Long-Term Task: Let the Same Kind of Work Accumulate Over Time

Long-term Tasks fit two situations. One is a workflow that repeats, such as searching and screening job opportunities or editing and publishing content. The other is a Project that continues for some time, such as a client website, a product, or a project with its own codebase.

They do not need to be completely standardized, but they do need a stable responsibility boundary and a single source of truth. Each time I return to one of these Tasks, I am not only continuing a conversation. I am continuing the same work loop and accumulating preferences, decisions, evidence, and unresolved items.

But a Task existing for a long time does not mean it is active right now. A Job Screening Task can stay around indefinitely, but if I am not looking for work this week, it should go dormant rather than automatically becoming Current Focus just because it is pinned.

This distinction matters. A Task is a reusable entry point for work; a current commitment is what I am actually going to invest in now.

### One-Off Task: Complete a Limited Outcome, Then Return

Not every important thing needs a long-term Task. Some work can be complex and take a lot of time while still having a limited goal: completing one application, preparing for one interview, doing one research project, handling one data migration, or producing an article that requires a lot of research.

This kind of work is a good fit for a one-off Task. It should have clear completion criteria. Once it is done, write the result, evidence, and unresolved items back to the original Project, and then let the Task end.

Looking for suitable clients and business opportunities makes the difference among the three Task types easy to see.

The Main Task manages the overall direction: What do I want to develop right now? Which clients, collaborations, or product opportunities are worth investing in? What is my Current Focus this week?

Opportunity screening can be a long-term Task. Each batch of potential clients or collaboration opportunities goes through a similar process: read the source, assess the fit, choose Go / Hold / Skip, preserve the evidence, and decide whether it is worth looking into further.

When one opportunity is worth deeper attention, preparing a proposal, researching the other party, organizing relevant work, or preparing for a meeting can move into a clearly scoped one-off Task. Once it is complete, the collaboration status and important evidence go back to the corresponding Project note. There is no need for every opportunity to occupy the screening Task's context permanently.

The same approach can transfer to content creation. Editorial Loop is a long-term Task; a single article that needs extensive research or website changes can get its own one-off Task; and the Main Task decides whether the content is currently worth more investment than the other goals.

### Context Can Be Distributed, but State Must Still Make Sense When Revisited

Once work is split across different Tasks, another question naturally appears: where should the context live?

I do not rely on only one kind of memory. Task conversations and automatic compaction preserve the details of actual work, recent reasoning, and preferences. Project notes in Obsidian preserve the state that needs to be trusted across Tasks.

Some approaches split `goal.md`, `plan.md`, and `worklog.md` into three files. In this system, these represent three kinds of context, not three filenames that must be copied. A Project note usually contains the outcome to achieve and its success criteria, the current `Next` and `Waiting`, and completed evidence plus important unresolved items.

Detailed operations do not all need to be written back. The complete conversation can stay in the Task, code changes have Git, and tools have their own records. Only changes that future work will actually depend on need to be written back to the Project note: the direction changed, the priority changed, an important decision was accepted, an outcome was completed, new evidence appeared, or a new `Next` or `Waiting` emerged.

The PKM root also has an `AGENTS.md` that records the shared rules AI would keep getting wrong if it did not know them. More complete reasons and examples live in the Collaboration Protocol and can be read when needed. The Task itself only keeps the local rules related to its own responsibility. These rules were not designed perfectly from the start; they accumulated gradually through real collaboration, discovering friction, and making corrections.

So Obsidian is more like a trustworthy long-term state layer for me, rather than necessarily the main interface for daily work. Readers do not need to build a complete PKM system before starting. A clear document covering Goals, Projects, and Current Focus is already more reliable than letting every state remain scattered across chats.

### People Should Show Up Where Judgment Is Actually Needed

The point of dividing work across Tasks is not for me to step away from all of it, or to verify every operation AI performs.

If the requirements and completion criteria are clear, the outcome is easy to verify, and changes are reversible, I can let AI complete a whole stretch of work and review it together afterward. But if the requirements may still change, the work involves taste or important tradeoffs, or later implementation depends heavily on earlier decisions, I should first complete a reviewable slice, adjust the direction, and then continue.

This is close to the idea behind Grill Me: do not put every judgment into the first prompt, but also do not stop at every tiny step just for the sake of control. At the points that can genuinely change the direction, deliberately leave room for a person to intervene.

An ideal review interface can separate three things: what I need to decide, what has already been verified by tools or evidence, and what is ready to use directly. Then what needs review is not the entire work process, but the part I am actually responsible for right now.

### Start with a Very Small Version

To start using this division of responsibility, there is no need to design a complicated system for organizing AI work first.

Start by creating one Main Task and giving it your Goals, Projects, and Current Focus. Then find one kind of work that really does recur and is worth building context around, and create a long-term Task for it. Use one-off Tasks for everything else; when they are complete, write the results back to the original Project or outcome document.

After a few rounds, you will gradually notice which context has to be explained again every time, which judgments you need to keep for yourself, and which steps have become stable enough to turn into a skill, an automation, or a more complete workflow.

What matters is not how many Tasks you have opened. It is whether each piece of work knows why it exists, how far it needs to go, and where it should return when it is complete.

The purpose of this system is not for AI to take over more work on its own. It is to let me keep the global judgment while confidently handing different kinds of work to AI to keep moving. The condition is that I also need to give it enough context to understand what these tasks are ultimately meant to serve.

---

If the work itself is still unclear, you can first read [“Don’t Just Ask AI—Let AI Ask You Questions Too”](https://createwithlevi.com/en/let-ai-grill-you).

If you want to see how long-term state helps AI find what needs attention across domains, you can continue with [“How I Redesigned the Status System in My PKM”](https://createwithlevi.com/en/pkm-attention-status).
