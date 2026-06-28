---
title: 我如何重新設計 PKM 的 status 系統
date: 2026-06-28
tags:
  - PKM
  - Obsidian
  - GTD
  - AI
aliases:
  - 我如何重新設計 PKM 的 status 系統
description: "我把 PKM 裡的 status 重新定義為 Attention Status：不是追蹤內容完整度，而是追蹤一個容器現在需要哪一種注意力。"
---
> English version: [[en/pkm-attention-status|How I Redesigned the Status System in My PKM]]

這篇先作為我的 Digital Garden reference。它不是完整的系統教學，而是記錄我目前對 PKM status、view，以及 AI 協作方式的設計判斷。

如果之後要讓外部讀者更容易理解，這個主題其實可以拆成好幾篇：Current Actions view、Outcomes view、Captures view、References view，每一個 view 都有自己的設計目的。這篇先把核心想法放在一起。

### 我原本把 status 用錯了

我最近重新整理了一次自己的 PKM 系統，最大的改變不是多加了什麼新功能，而是重新定義了 `status` 這個欄位。

一開始我把 GTD 的流程放進 Obsidian：capture、clarify、organize、reflect、engage。直覺上這很合理，因為我想知道每個 note 現在處於什麼狀態。

但用了一陣子之後，我發現真正混亂的地方不是 status 太少，而是我用同一個 status 追蹤太多種不同的事情。

有時候我用 status 表示「這個內容還不完整」。有時候它表示「這個 project 還需要整理」。有時候它又像是在表示「這個機會目前走到哪個流程」。結果每次看 dashboard 時，我其實不太確定自己看到的是內容成熟度、任務進度，還是注意力狀態。

後來我把這件事拆開：

> status 不追蹤內容完整度，而是追蹤 attention workflow：這個容器現在需不需要我的注意力？需要哪一種注意力？

### Attention Status 是另一個維度

一般人在 PKM 或 project management 裡談 status，常常是在談生命週期：draft / published、applied / interviewing、active / done。這些都很有用，但它們回答的是：

> 這個東西在它自己的流程裡走到哪一步？

Attention Status 回答的是另一個問題：

> 這個東西現在需要我哪一種注意力？

這個概念和 GTD 很接近，但我不確定 GTD 是否真的用「Attention Status」這個詞。比較準確地說，它是我把 GTD 的五步驟——Capture, Clarify, Organize, Reflect, Engage——轉化成 PKM metadata 後的命名。

GTD 官方談 Capture 時，本來就會說要收集「what has your attention」。所以 attention 是 GTD 的核心語彙之一。但 GTD 的五步驟比較像一個 workflow，而不是一組 note status。我的做法是把這個 workflow 變成一個可以被 Obsidian / AI 讀取的狀態欄位。

因此它不是純粹的 GTD 原教旨用法，而比較像：

> GTD workflow × PKM metadata × AI collaboration。

### 我的六個 Attention Status

現在我的 status 只保留很少幾種：

- `1 Capture`：先收進來，還沒有判斷。
- `2 Clarify`：需要釐清它是什麼、為什麼重要、下一步是什麼。
- `3 Organize`：方向大致確定，但需要整理成可用結構。
- `4 Reflect`：需要回顧、整合、重新評估。
- `5 Engage`：可以投入執行，最好有清楚的 next action。
- `0 Archived`：暫時不需要注意，退出 active loop。

至於各領域自己的生命週期，我不再硬塞進 `status`。例如文章有 `postStatus`，機會有 `stage`，Evergreen note 用 `#🌱 / #🌿 / #🌲` 表示成熟度。這樣每個欄位只回答一種問題，系統就安靜很多。

### 我不把 status 套到所有東西

這套系統還有一個很重要的限制：我沒有把 Attention Status 套到每一筆資料、每一個 action、每一篇 note。

目前主要只有兩個地方會認真使用 status。

第一個是 Outcome：追蹤輸出的容器。

Outcome 包含 project、area、goal 這類「要被推進的容器」。這些東西通常已經不是單純的原始輸入，而是某種已經構成的 outcome。所以它們通常不會從 `1 Capture` 開始，而是主要落在：

- `3 Organize`：這個 outcome 還需要整理成可信任結構。
- `4 Reflect`：這個 outcome 需要回顧、重新判斷或對齊現況。
- `5 Engage`：這個 outcome 已經可以被推進，且應該有明確 next action。

也就是說，Outcome status 不追蹤細項 action，而是追蹤「這個輸出容器目前需要哪一種注意力」。

第二個是 Capture：追蹤輸入類別的 workflow。

Capture 不是追蹤每一則 clipping、每一篇 journal、每一個 reference，而是追蹤「我需要長期維護的資料類別」。例如 Journal、Clippings、Meeting、Evergreen、Project、Area of Focus、Opportunities 這類 category。

所以 Capture status 比較常用：

- `1 Capture`：這個資料類別仍在收集，還沒有穩定處理方式。
- `2 Clarify`：需要釐清這類資料到底要怎麼被處理、轉換或輸出。
- `3 Organize`：需要整理成穩定的 workflow 或 dashboard。

如果每一篇 note、每一個 task、每一則 clipping 都要有 Attention Status，系統會很快變得過度複雜。所以我現在只在有限的容器上使用 status：大概二、三十個 outcome，加上二、三十個 capture category。

它不是一套要管理所有 metadata 的系統，而是一套幫我和 AI 對齊「哪些容器需要注意力」的系統。

### Outcome 現在主要看 Goal 層級

另一個重要改變是：我現在的 Outcome view 不再主要看 project status，而是看 Goal 層級。

我以前容易陷入「這個 project 是不是 Engage？那個 area 是不是 Organize？」但現在我更常問的是：這些 project 和 area 到底在服務哪個 1–2 年的深度目標？目前最重要的 goal 是什麼？哪個 stage outcome 真的需要被推進？

GTD 還有另一個維度是 Horizons of Focus。嚴格來說，常見說法是六層視野：Ground（calendar / next actions）、Projects、Areas、Goals、Vision、Purpose / Principles。

如果把它視覺化，我現在的系統很像是兩個軸：

| 軸 | 回答的問題 | 在我的系統裡 |
|---|---|---|
| Horizons / Outcome Level | 這件事屬於哪個層級？下一步、project、area、goal、vision、purpose？ | Outcomes 主要看 Goal 層級，再往下連 Project / Area |
| Attention Status | 這件事現在需要哪一種注意力？ | `1 Capture` → `2 Clarify` → `3 Organize` → `4 Reflect` → `5 Engage` / `0 Archived` |

這樣我不是只問「這個 project active 嗎？」而是可以問更精準的問題：

- 這個 Goal 目前是否真的有被推進？
- 哪些 Project 雖然存在，但還停在 `3 Organize`？
- 哪些 Area 需要 `4 Reflect`，而不是繼續加 task？
- 哪些東西其實已經可以 `0 Archived`？

### Status 變成 AI 協作的介面

status 仍然存在，但它不一定是我每天手動操作的東西。它更像是 AI 可以讀的 metadata。

例如我可以直接請 AI 幫我看：目前有哪些 project 還在 `3 Organize`？哪些 note 的狀態已經不符合真實情況？哪些 outcome 看起來 active，但其實沒有下一步行動？

這些事情如果全部由我手動檢查會很累，但對 AI 來說，status、frontmatter、links、tasks 都是可讀的線索。

這讓我對 PKM 的使用方式也改變了。

在一個基本架構定好之後，我不需要每天像管理資料庫一樣去使用這個架構。我更需要專注在三件事：

1. 想像我要的成果。
2. 執行能推進成果的行動。
3. 處理不同 note、project、goal 之間的關聯性。

AI 則負責幫我讀取系統、整理狀態、發現不一致、提出可能的下一步。

所以這套 status 系統對我來說，最後不是為了做出一個漂亮的 dashboard，而是為了建立一個我和 AI 都能理解的協作介面。

> status 對我來說不只是 Dashboard filter，而是 AI 理解我目前系統狀態的介面。

人負責方向、判斷與取捨。AI 負責維護結構、讀取狀態、協助對齊。

這也是我現在對 PKM 最大的感受：

> 好的系統不是讓我花更多時間管理系統，而是讓我更容易回到真正重要的事情。
