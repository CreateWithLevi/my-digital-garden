# My Digital Garden | 我的數位花園

> "[One] who works with the door open gets all kinds of interruptions,  
> but [they] also occasionally gets clues as to what the world is and  
> what might be important."  
> — Richard Hamming

歡迎來到我的數位花園！這裡是我個人的知識探索與創作空間，記錄了各種學習心得與主題研究，也運用 [Quartz](https://quartz.jzhao.xyz/) 工具將筆記公開成網站，方便分享與互動。

---

## 目錄導覽

- [關於我與數位花園](#關於我與數位花園)
- [內容主題](#內容主題)
- [技術與架構](#技術與架構)
- [部署與開發](#部署與開發)
- [贊助](#贊助)
- [結語](#結語)

---

## 關於我與數位花園

這個數位花園（Digital Garden）是我在進行個人知識管理、持續寫作與學習的實踐場域。  
同時，我也樂於分享自己的思考與過程，盼望能與更多人交流、獲得回饋，並一起探索有趣的想法。

**核心特色：**

- 🌱 **持續成長**：我的筆記隨著時間、經驗、興趣而不斷演進。
- 🤝 **分享與互動**：歡迎在此基礎上給予建議或進行討論。
- 🚀 **中英雙語**：母語為繁體中文，部分技術或國際化內容使用英文撰寫。

---

## 內容主題

### 1. 產品設計與開發紀錄

- 分享在產品設計、介面規劃與軟體開發中踩過的坑與心得。

### 2. 軟體工程學習筆記

- 收錄程式語言、框架與工具的使用筆記，以及實作案例。

### 3. 出國工作研究與心得

- 整理各國簽證、文化適應與海外職場經驗的相關筆記。

### 4. 旅遊與生活觀察

- 記錄旅途中的見聞、個人觀察與生活靈感。

---

## 技術與架構

### 1. 筆記撰寫

- 使用 [Obsidian](https://obsidian.md/) 進行知識管理與雙語筆記設定。
- 以中文為主，搭配英文 `aliases` 或雙語說明。
- 採用 MOC（Map of Content）系統化整理主題。

### 2. 框架與開發

- 利用 [Quartz v4](https://github.com/jackyzha0/quartz) 將筆記轉化為靜態網站。
- 結合 VSCode 進行技術內容的開發與配置管理。
- 自動化部署流程（CI/CD）確保內容更新同步到線上。

---

## 部署與開發

若你對技術細節與部署流程感興趣，以下為簡化步驟：

### 1. Clone & Setup

```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npx quartz create
```

### 2. Configure Git Remote

```bash
git remote set-url origin git@github.com:CreateWithLevi/my-digital-garden.git
git push origin v4
```

### 3. Local Build & Serve

```bash
npx quartz build --serve # Build and serve locally
npx quartz sync --no-pull # Sync content without pulling
```

---

## 贊助

<div align="center">

[![Sponsor](https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg)](https://github.com/sponsors/jackyzha0)

</div>

如果你喜歡我的內容並想要支持持續創作，歡迎透過以下方式贊助：

- [Buy Me a Coffee](https://www.buymeacoffee.com/YourUsername)

---

## 結語

感謝你造訪我的數位花園！如果有任何建議或想法，歡迎透過以下方式與我聯繫：

### Contact | 交流方式

- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 📝 Blog: [Your Blog](https://your-blog-url.com)

期待在這個數位花園裡，與你一同探索、成長、創造更多可能性！
