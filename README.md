# React-Dialogic

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license">
</p>

<p align="center">一個專為 React 應用開發的對話系統 UI 套件<br>A dialogue system UI kit for React applications</p>

<p align="center">
  <a href="./README.zh-TW.md">繁體中文</a> | 
  <a href="./README.en.md">English</a>
</p>

---

![React-Dialogic Example](https://via.placeholder.com/800x400?text=React-Dialogic+Demo)

## 快速導航 / Quick Navigation

- [安裝 / Installation](#安裝--installation)
- [使用 / Usage](#使用--usage)
- [文檔 / Documentation](#文檔--documentation)
- [示例 / Examples](#示例--examples)
- [支持 / Support](#支持--support)

## 安裝 / Installation

```bash
npm install react-dialogic
# or
yarn add react-dialogic
```

## 使用 / Usage

```jsx
import { ReactDialogic } from 'react-dialogic';
// 重要：引入樣式
import 'react-dialogic/dist/index.css';

function App() {
  return (
    <ReactDialogic
      characters={charactersConfig}
      dialogue={dialogueConfig}
      startScene="intro"
    />
  );
}
```

## 文檔 / Documentation

- [中文文檔](./README.zh-TW.md)
- [English Documentation](./README.en.md)

## 示例 / Examples

查看 [examples](./examples) 目錄獲取完整示例。

See the [examples](./examples) directory for complete examples.


## 自定義主題

React Dialogic 使用 CSS 變量來控制組件的外觀。您可以通過以下方式自定義主題：

### 方法一：覆蓋 CSS 變量

在您的 CSS 中覆蓋預設變量：

```css
/* 覆蓋預設值 */
:root {
  --dialogic-dialog-bg: rgba(255, 255, 255, 0.9);
  --dialogic-dialog-border: #FF5500;
  --dialogic-dialog-text: #333333;
  --dialogic-name-text: #FF5500;
}
```

### 方法二：創建自定義主題類

您可以創建自己的主題類：

```css
/* 自定義主題 */
.theme-fantasy {
  --dialogic-dialog-bg: rgba(64, 41, 93, 0.85);
  --dialogic-dialog-border: #9951FF;
  --dialogic-dialog-text: #FFFFFF;
  --dialogic-name-text: #FFD700;
  --dialogic-choice-bg: rgba(64, 41, 93, 0.7);
  --dialogic-choice-bg-hover: rgba(153, 81, 255, 0.3);
  --dialogic-choice-text: #FFFFFF;
  --dialogic-choice-text-hover: #FFD700;
  --dialogic-font-dialog: 'Tangerine', cursive;
  --dialogic-font-choice: 'Tangerine', cursive;
  --dialogic-typewriter-speed: 35ms;
  --dialogic-dialog-radius: 12px;
  --dialogic-choice-radius: 8px;
}
```

### 可用的 CSS 變量

以下是可用的 CSS 變量及其用途：

| 變量名 | 說明 | 預設值 |
|--------|------|--------|
| `--dialogic-dialog-bg` | 對話框背景色 | rgba(0, 0, 0, 0.8) |
| `--dialogic-dialog-border` | 對話框邊框顏色 | #FFCC00 |
| `--dialogic-dialog-text` | 對話文本顏色 | #FFFFFF |
| `--dialogic-name-text` | 角色名稱顏色 | #FFCC00 |
| `--dialogic-choice-bg` | 選項背景色 | rgba(0, 0, 0, 0.7) |
| `--dialogic-choice-bg-hover` | 選項懸停背景色 | rgba(255, 204, 0, 0.3) |
| `--dialogic-choice-text` | 選項文本顏色 | #FFFFFF |
| `--dialogic-choice-text-hover` | 選項懸停文本顏色 | #FFCC00 |
| `--dialogic-font-dialog` | 對話框字體 | 'Press Start 2P', system-ui, sans-serif |
| `--dialogic-font-choice` | 選項字體 | 'Press Start 2P', system-ui, sans-serif |
| `--dialogic-typewriter-speed` | 打字效果速度 | 40ms |
| `--dialogic-dialog-radius` | 對話框圓角半徑 | 4px |
| `--dialogic-choice-radius` | 選項圓角半徑 | 2px | 

## 支持 / Support

如有問題，請在 GitHub Issues 中提出。

For issues and questions, please file a GitHub Issue.