---
title: Lesson 0002 — 先定義輸出，再和 AI 協作
date: 2026-07-05
tags:
  - AI
  - 學習
  - Lab
description: 用 output-first prompt 讓 AI 產出可修改版本
---

## Lesson 0002 — 先定義輸出，再和 AI 協作

這堂課只練一個動作：

> 不要從「我有好多東西」開始，而是從「我想產出哪一種具體成果」開始。

<div style="margin: 1rem 0 1.5rem;">
  <a href="/zh/ai-collaboration-learning-lab">← 回到 AI 協作學習實驗室</a>
</div>

## 核心觀念

AI 很適合幫你展開、整理、比較、產生初稿。

但如果你只丟一堆 input，它很容易把事情整理得很完整，卻不一定變成你真正需要的成果。

所以比起說：

```text
幫我整理這些內容。
```

更好的起點是：

```text
我想把這些內容變成一份可以用來做決策的 brief。
```

或是：

```text
我想把這些內容變成一篇 70 分版本的草稿，之後我會再修改。
```

## Output-first Prompt

可以用三句話開始：

1. **Input**：我剛看到 / 經歷的是……
2. **Question**：我現在真正需要學會或判斷的是……
3. **Output**：請先幫我做出一個……，我會再用自己的判斷修正。

範例：

```text
我剛看到的是：幾篇關於 AI agent 節省 token 和 context 管理的文章。
我現在真正需要判斷的是：這些技巧是否值得整合進我的 Claudian / Codex 工作流。
請先幫我做出一份決策筆記，包含：可用技巧、適用情境、風險、下一步測試。
```

## 為什麼這樣比較好

因為 AI 需要知道你要的是哪一種「完成」。

不同 output 會讓同一份 input 走向完全不同的結果：

| 你要的 output | AI 會偏向做什麼 |
|---|---|
| 摘要 | 壓縮內容 |
| 決策筆記 | 比較選項與取捨 |
| 文章草稿 | 找主軸、段落與語氣 |
| Checklist | 提取可重複流程 |
| 專案 action | 轉成可執行任務 |
| Reference note | 建立長期可重用知識 |

所以 output-first 不是形式，而是協作方向的設定。

## 互動練習區

下面保留原本的 HTML 互動版本，用來練習選 output，並組成一段 output-first prompt。

<iframe src="https://createwithlevi.com/lab/lessons/0002-output-first-ai-collaboration.html" style="width:100%; min-height:820px; border:1px solid var(--lightgray); border-radius:12px; background:white;"></iframe>

## 下一次怎麼用

當你準備丟 input 給 AI 前，先停 10 秒，選一個 output 類型。

這會讓 AI 從「整理者」變成「成果協作者」。

如果你不確定 output 是什麼，可以先問：

```text
這份 input 最值得變成哪三種具體成果？請按對我目前 Goal 的價值排序。
```


## 相關連結

- 上一課：[[zh/lab/lesson-0001|Lesson 0001 — 具體成果迴圈]]
- 速查：[[zh/lab/reference-artifact-loop|具體成果迴圈 reference]]
- 下一課：[[zh/lab/lesson-0003|Lesson 0003 — 把具體成果包裝成影響力實驗]]
