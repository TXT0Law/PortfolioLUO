# PortfolioLUO

個人作品集網站，使用 React + Vite + react-parallax 打造分段視差滾動的單頁面。內容涵蓋個人簡介、學經歷、專案輪播、聯絡表單，並提供快速錨點導覽。

## 快速開始
- 安裝依賴：`npm install`
- 本地開發：`npm run dev`
- 產生正式版：`npm run build`
- 本地預覽產物：`npm run preview`
- GitHub Pages 部署：`npm run deploy`（依賴 package.json 的 `homepage` 設定與 gh-pages）

## 技術棧
- React 18、Vite 5
- react-parallax：視差滾動效果
- CSS Modules（按鈕）+ 全域 CSS：版面與互動

## 專案結構（重點）
- [src/main.jsx](src/main.jsx) / [src/App.jsx](src/App.jsx)：應用入口與分段組裝
- [src/index.css](src/index.css)：全域樣式（含各 Section、導航條、表單）
- Sections：分段內容
	- [src/sections/sectionOne.jsx](src/sections/sectionOne.jsx)：首頁視差背景＋個人卡片
	- [src/sections/sectionTwo.jsx](src/sections/sectionTwo.jsx)：About me 簡介
	- [src/sections/sectionThree.jsx](src/sections/sectionThree.jsx)：Education / Experience / Skill 列表與 CV 下載
	- [src/sections/sectionFour.jsx](src/sections/sectionFour.jsx)：專案輪播（左右切換，三卡可見）
	- [src/sections/sectionFive.jsx](src/sections/sectionFive.jsx)：Contact 表單（mailto）
- Components / UI
	- [src/components/ProfileCard.jsx](src/components/ProfileCard.jsx)：姓名、頭像、社群連結、內部導航按鈕
	- [src/buttons/P_buttons.jsx](src/buttons/P_buttons.jsx) + [src/buttons/P_buttons.module.css](src/buttons/P_buttons.module.css)：卡片內錨點按鈕（CSS Module）
	- [src/components/topnavigation.jsx](src/components/topnavigation.jsx)：頁頂固定導航（錨點跳轉）
- Assets：背景圖、專案截圖、個人照片、CV(POLYU_JOB).pdf

## 版塊與行為說明
- Hero（Section1）：視差背景，疊加個人卡片與社群連結、內部導航按鈕。
- About me（Section2）：圖片＋文字敘述，含強調標題高亮。
- Resume / Skills（Section3）：學歷與經驗列表，技能 UL；附簡歷下載按鈕。
- Project Experience（Section4）：可左右切換的三張卡片輪播，點卡片可鏈出專案連結。
- Contact me（Section5）：mailto 表單，包含姓名、Email、訊息欄位與提交按鈕。
- Navigation：頂部固定錨點導覽，對應各分段 ID。

## 待辦建議
- 為各專案補齊描述與外部連結（Section4 的 `projects` 陣列）。
- 補齊 About/Resume 文案與圖片資產（如需更新）。
- 若需收集表單資料，改用後端 API 或表單服務替代 mailto。
