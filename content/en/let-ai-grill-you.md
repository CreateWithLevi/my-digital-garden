---
title: Don't Just Ask AI—Let AI Ask You Questions Too
date: 2026-07-31
tags:
  - AI
  - Writing
  - AI collaboration
aliases:
  - Don't Just Ask AI—Let AI Ask You Questions Too
description: When something is unclear but important, let AI ask you questions first so you can form your own judgment through a multi-turn conversation.
---

This article didn't start out looking like this.

I originally just wanted to write down an experience of working with AI. A little while ago, I finished a fairly complex website project. AI was involved from clarifying requirements and planning features to making the actual changes; my job was to keep reviewing the results, point out problems, and decide what to do next. The experience was worth writing about, but I wasn't sure whether I really wanted to talk about the engineering workflow, how to review AI's work, or how to make vague requirements clear one step at a time.

If I asked AI to produce an article spec directly, it could probably list the audience, topic, examples, and structure. Then I could give it feedback section by section and have it start drafting.

But this time, I didn't ask for a spec first. I told AI to “Grill me.”

Here, “Grill me” means asking one question at a time and giving me a few possible directions along with a recommendation. It would only ask the next question after I had accepted the suggestion, pushed back on it, or added my own thoughts, using that new judgment to decide what to ask next.

In the end, the article gradually shifted from a broad account of how I work with AI to a clearer point of view: **We can learn not only how to ask AI questions; we can also give AI a chance to ask us questions in return.**

Only later did I realize that this process itself was what I actually wanted to write about.

### A Spec Is More Than a Document; It Can Also Be a Process of Forming Judgment

A common approach now is to give AI a set of requirements, ask it to produce a spec, and then have a person review it. That is certainly more reliable than saying, “Just do it for me,” and it works well when the requirements are already clear and only need to be organized into an implementation document.

But sometimes, the answer has not taken shape yet. It is not merely that I have not expressed it completely. The judgment becomes clearer as I compare different options, revise AI's recommendation, and answer the next question.

If AI produces a complete spec too early, it is easy to slip into review mode: this part works, that part needs to change, and it is missing an example. At that point, feedback is constrained by the frame AI has already built. This multi-turn questioning gave me several more chances to redefine the problem.

Both approaches are reasonable. The difference is simply whether I need an actionable document right now, or whether I still need more opportunities to form my own judgment.

### Recommended Answers Make It Easier to Know What I Disagree With

One particularly helpful thing about Grill Me is that it does not just throw out one huge open-ended question.

“What kind of article do you want to write?” is still hard to answer. But if AI offers a few directions, explains where each one would take the article, and makes a recommendation, I can usually react quickly: this one is too much like a tool tutorial; that one is too specific to the project; this direction is close, but what really matters is not a better spec, but how a person brings their own judgment to the work.

So the value of a recommended answer is not necessarily that it gets the answer right. Often, it simply gives me something concrete enough to accept, revise, or push back on.

AI should not always offer a single answer that looks like the most professional one. That makes it easy to adopt AI's framing without thinking. A better approach is to offer a small number of meaningfully different options, explain why one is recommended, and leave room for the answer “none of these.”

AI is not deciding for me here. It is helping an implicit decision come to the surface.

### Sometimes You Don’t Know What Needs Deciding Until You’re Partway Through

This approach is not just for writing.

For example, the initial requirement might be simple: we want a content page to play a very long recording. It sounds clear enough, and AI could immediately plan an upload field, a player, and support for various platforms.

But as we work through the questions one by one, we may discover that the real choices include: Where should the audio file live? Should it be served as a direct audio file or through a podcast platform? Can the existing body content already handle other embeds? Should the new feature solve every possible audio source, or only support the long audio files we currently cannot handle? Does the player need its own title and description?

Once those questions were answered, the feature actually got smaller. The new feature only needed to solve playback for long audio files; other complex sources could keep using the existing body content. There was no need to build every imaginable form of flexibility all at once.

Planning also does not have to happen entirely before the build. Once we build a first reviewable piece, the actual interface and data can expose new problems. At that point, we can stop and confirm the next step instead of asking AI to write a complete spec covering every case from the start.

This is the pace I prefer now: think through one part, build one part, look at the new evidence, and then decide on the next part.

### Not Everything Needs a Full Grill

If the work is well-defined, easy to reverse, and has a clear way to verify it, it is usually better to just do it. There is no need to add an interview process to every small task just to use a skill.

But even when the requirements are already fairly clear, having AI ask a quick round of questions can still help. This is not discovery from scratch; it is asking a third party for a brief blind-spot check: Did we miss a use case? Which assumption still lacks evidence? Is there a choice that looks simple now but will be hard to reverse once we start?

The one thing worth remembering is this: when you run into something ambiguous, important, or worth clarifying carefully one step at a time, tell AI, “Grill me.”

If you use Claude, Codex, or another tool that supports skills, you can also ask AI to install `grill-me` or `grilling` directly. But installing it is not the point. Even without a skill, you can say:

> Don’t start doing it yet. Ask me one question at a time. For each question, give me a few options and your recommendation, until we have a shared understanding of the requirements, tradeoffs, and completion criteria.

### Put AI Usage Toward Direction, Not Just Output

Even when there is plenty of AI usage available, spending it in the wrong direction is still wasteful. For me, the real question is not how much content can be generated, but whether better models and more thinking time are being used on the judgments that actually matter.

A multi-turn conversation does not mean starting over with all the content each time. Systems that support caching can reuse a fair amount of existing context. We can also choose an appropriate model and effort level based on how much reasoning, research, and tool use the task requires. But actual usage still varies by tool, so we should not present Grill as a method that definitely saves tokens.

More important: once the direction is right, the tokens that follow are actually useful.

If the initial framing is off, even if AI quickly produces a complete spec, code, or article, we still have to spend time reviewing and correcting it—and may even have to redo the whole thing. By contrast, spending some of that usage on a few more important questions can often reduce a large amount of wasted output.

What is actually worth maximizing is not how much text each token produces, but how much of that content genuinely carries my judgment.

What I really want is not for AI to finish more important things on my behalf. I want to use AI to help me complete the work with more of my own judgment, so that it matters because of how I did it—not just because it got done.

---

If the direction has taken shape, the next step is to read [“From Input to Concrete Output Is a Skill You Can Train”](https://createwithlevi.com/en/input-to-concrete-output).

If AI has already started handling several kinds of work at once, you can read [“When AI Starts Handling Different Kinds of Work, How Should You Organize Them?”](https://createwithlevi.com/en/organizing-ai-tasks).
