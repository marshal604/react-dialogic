# React-Dialogic

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license">
</p>

<p align="center">一個專為 React 應用開發的對話系統 UI 套件<br>A dialogue system UI kit for React applications</p>

---

![React-Dialogic Example](https://via.placeholder.com/800x400?text=React-Dialogic+Demo)

<details open>
<summary>繁體中文</summary>

## 功能目的

React-Dialogic 旨在提供一個易於集成且功能豐富的對話系統，可用於：

- 視覺小說和互動遊戲
- 教學指引和用戶引導
- 互動式故事敘述
- 角色驅動的用戶介面
- 任何需要對話框和角色互動的應用

## 主要特性

### 1. 滿版顯示系統
- 組件初始化時自動佔滿整個視窗/容器
- 提供沉浸式體驗，背景填充整個視圖
- 響應式設計，適配不同屏幕尺寸和設備

### 2. 人物配置系統
- 支援設定角色信息（ID、名稱、圖片、聲音等）
- 多個表情/狀態的圖片管理
- 自定義角色文字顏色和顯示速度
- 角色在對話中的位置控制（左/右側）

### 3. 對話框系統
- 底部顯示對話文字區域
- 打字機效果逐字顯示文本
- 可調整文字顯示速度
- 支援文字特效和停頓

### 4. 選項系統
- 支援對話選項分支
- 選項結果影響後續對話流程
- 自定義選項樣式和效果
- 條件性選項顯示

### 5. 主題系統
- 預設多種主題風格
- 支援自定義主題配置
- 運行時動態切換主題
- 統一調整整體色系和風格

### 6. 背景管理
- 自定義背景圖片或顏色
- 背景轉場效果
- 透明背景選項，適應不同場景

### 7. 事件鉤子系統
- `onMessageStart` - 對話節點開始時觸發
- `onMessage` - 對話節點結束時觸發
- `onMessageEnd` - 對話流結束時觸發（無next屬性時）
- 自定義事件處理和遊戲邏輯整合

## 安裝

```bash
npm install react-dialogic
# 或
yarn add react-dialogic
```

## 基本用法

```jsx
import { ReactDialogic } from 'react-dialogic';
// 重要：引入樣式
import 'react-dialogic/dist/styles.css';

// 角色配置
const characters = {
  mei: {
    name: '小美',
    images: {
      default: '/images/mei-default.png',
      happy: '/images/mei-happy.png',
      sad: '/images/mei-sad.png'
    },
    textColor: '#e63946',
    defaultPosition: 'left'
  },
  kai: {
    name: '小凱',
    images: {
      default: '/images/kai-default.png',
      surprised: '/images/kai-surprised.png'
    },
    textColor: '#457b9d',
    defaultPosition: 'right'
  }
};

// 對話配置
const dialogue = {
  // 場景：公園
  park: {
    background: '/images/park.jpg',
    sequence: [
      // 角色對話
      { speaker: 'mei', emotion: 'happy', text: '今天天氣真好啊！', position: 'left' },
      { speaker: 'kai', text: '是啊，要不要一起去公園走走？', position: 'right' },
      
      // 旁白 - 不指定角色
      { text: '兩人一邊聊天，一邊朝公園深處走去。' },
      
      // 選項分支
      { 
        speaker: 'mei',
        text: '你想做什麼呢？',
        choices: [
          { text: '去野餐', next: 'picnic' },
          { text: '去看電影', next: 'cinema' }
        ]
      }
    ]
  },
  
  // 場景：野餐
  picnic: {
    background: '/images/park-picnic.jpg',
    sequence: [
      { speaker: 'kai', emotion: 'happy', text: '野餐是個好主意！我們去準備吧。' },
      { speaker: 'mei', text: '那就這麼決定了！' }
    ]
  },
  
  // 場景：電影院
  cinema: {
    background: '/images/cinema.jpg',
    sequence: [
      { speaker: 'kai', text: '看電影也不錯，最近有很多新上映的片子。' },
      { speaker: 'mei', emotion: 'happy', text: '那就這麼決定了！' }
    ]
  }
};

function App() {
  // 事件處理函數
  const handleMessageStart = (item) => {
    console.log('對話開始:', item);
    // 可以觸發音效、動畫或更新遊戲狀態
  };
  
  const handleMessage = (item) => {
    console.log('對話進行中:', item);
    // 可以記錄玩家選擇、更新變數等
  };
  
  const handleMessageEnd = (item) => {
    console.log('對話結束:', item);
    // 可以返回遊戲主流程或觸發後續事件
  };

  return (
    <ReactDialogic 
      characters={characters}
      dialogue={dialogue}
      startScene="park"
      onMessageStart={handleMessageStart}
      onMessage={handleMessage}
      onMessageEnd={handleMessageEnd}
    />
  );
}
```

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

## 更多功能

- 角色進入/退出動畫
- 對話框出現/消失特效
- 背景切換過渡效果
- 音效和語音支援
- 自定義事件鉤子
- 鍵盤和觸控控制
- 無障礙支援

## 技術需求

- React 16.8+
- Tailwind CSS
- 可選：Three.js（進階動畫效果）
- 可選：Anime.js（進階動畫效果）

</details>

<details>
<summary>English</summary>

## Purpose

React-Dialogic aims to provide an easy-to-integrate and feature-rich dialogue system for:

- Visual novels and interactive games
- Tutorials and user onboarding flows
- Interactive storytelling
- Character-driven user interfaces
- Any application requiring dialogue boxes and character interactions

## Key Features

### 1. Fullscreen Display System
- Components automatically fill the entire window/container on initialization
- Provides an immersive experience with background filling the entire view
- Responsive design adapting to different screen sizes and devices

### 2. Character Configuration System
- Support for character information settings (ID, name, images, sounds, etc.)
- Multiple emotion/state image management
- Custom character text color and display speed
- Character positioning control (left/right side)

### 3. Dialogue Box System
- Bottom-anchored text display area
- Typewriter effect for character-by-character text display
- Adjustable text display speed
- Support for text effects and pauses

### 4. Choice System
- Support for dialogue option branches
- Choice results affecting subsequent dialogue flow
- Custom option styling and effects
- Conditional option display

### 5. Theme System
- Multiple preset theme styles
- Support for custom theme configuration
- Runtime dynamic theme switching
- Unified adjustment of overall color schemes and styles

### 6. Background Management
- Custom background images or colors
- Background transition effects
- Transparent background option for different contexts

### 7. Event Hook System
- `onMessageStart` - Triggered when a dialogue node begins
- `onMessage` - Triggered when a dialogue node ends
- `onMessageEnd` - Triggered when the dialogue flow ends (when no next property is present)
- Custom event handling and game logic integration

## Installation

```bash
npm install react-dialogic
# or
yarn add react-dialogic
```

## Basic Usage

```jsx
import { ReactDialogic } from 'react-dialogic';
// Important: import styles
import 'react-dialogic/dist/styles.css';

// Character configuration
const characters = {
  mei: {
    name: 'Mei',
    images: {
      default: '/images/mei-default.png',
      happy: '/images/mei-happy.png',
      sad: '/images/mei-sad.png'
    },
    textColor: '#e63946',
    defaultPosition: 'left'
  },
  kai: {
    name: 'Kai',
    images: {
      default: '/images/kai-default.png',
      surprised: '/images/kai-surprised.png'
    },
    textColor: '#457b9d',
    defaultPosition: 'right'
  }
};

// Dialogue configuration
const dialogue = {
  // Scene: Park
  park: {
    background: '/images/park.jpg',
    sequence: [
      // Character dialogue
      { speaker: 'mei', emotion: 'happy', text: 'What a beautiful day today!', position: 'left' },
      { speaker: 'kai', text: 'Yes, shall we go to the park for a walk?', position: 'right' },
      
      // Narration - no character specified
      { text: 'The two chatted as they walked deeper into the park.' },
      
      // Choice branch
      { 
        speaker: 'mei',
        text: 'What would you like to do?',
        choices: [
          { text: 'Have a picnic', next: 'picnic' },
          { text: 'Go see a movie', next: 'cinema' }
        ]
      }
    ]
  },
  
  // Scene: Picnic
  picnic: {
    background: '/images/park-picnic.jpg',
    sequence: [
      { speaker: 'kai', emotion: 'happy', text: 'A picnic is a great idea! Let\'s prepare.' },
      { speaker: 'mei', text: 'Then it\'s decided!' }
    ]
  },
  
  // Scene: Cinema
  cinema: {
    background: '/images/cinema.jpg',
    sequence: [
      { speaker: 'kai', text: 'A movie sounds good too, there are many new releases.' },
      { speaker: 'mei', emotion: 'happy', text: 'Then it\'s decided!' }
    ]
  }
};

function App() {
  // Event handlers
  const handleMessageStart = (item) => {
    console.log('Dialogue start:', item);
    // Can trigger sound effects, animations, or update game state
  };
  
  const handleMessage = (item) => {
    console.log('Dialogue in progress:', item);
    // Can record player choices, update variables, etc.
  };
  
  const handleMessageEnd = (item) => {
    console.log('Dialogue end:', item);
    // Can return to main game flow or trigger subsequent events
  };

  return (
    <ReactDialogic 
      characters={characters}
      dialogue={dialogue}
      startScene="park"
      onMessageStart={handleMessageStart}
      onMessage={handleMessage}
      onMessageEnd={handleMessageEnd}
    />
  );
}
```

## Custom Themes

React Dialogic uses CSS variables to control the appearance of components. You can customize the theme in the following ways:

### Method 1: Override CSS Variables

Override default variables in your CSS:

```css
/* Override defaults */
:root {
  --dialogic-dialog-bg: rgba(255, 255, 255, 0.9);
  --dialogic-dialog-border: #FF5500;
  --dialogic-dialog-text: #333333;
  --dialogic-name-text: #FF5500;
}
```

### Method 2: Create Custom Theme Classes

You can create your own theme classes:

```css
/* Custom theme */
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

### Available CSS Variables

Here are the available CSS variables and their purposes:

| Variable Name | Description | Default Value |
|--------|------|--------|
| `--dialogic-dialog-bg` | Dialog background color | rgba(0, 0, 0, 0.8) |
| `--dialogic-dialog-border` | Dialog border color | #FFCC00 |
| `--dialogic-dialog-text` | Dialog text color | #FFFFFF |
| `--dialogic-name-text` | Character name color | #FFCC00 |
| `--dialogic-choice-bg` | Choice background color | rgba(0, 0, 0, 0.7) |
| `--dialogic-choice-bg-hover` | Choice hover background color | rgba(255, 204, 0, 0.3) |
| `--dialogic-choice-text` | Choice text color | #FFFFFF |
| `--dialogic-choice-text-hover` | Choice hover text color | #FFCC00 |
| `--dialogic-font-dialog` | Dialog font | 'Press Start 2P', system-ui, sans-serif |
| `--dialogic-font-choice` | Choice font | 'Press Start 2P', system-ui, sans-serif |
| `--dialogic-typewriter-speed` | Typewriter effect speed | 40ms |
| `--dialogic-dialog-radius` | Dialog border radius | 4px |
| `--dialogic-choice-radius` | Choice border radius | 2px | 

## More Features

- Character entry/exit animations
- Dialogue box appearance/disappearance effects
- Background transition effects
- Sound effects and voice support
- Custom event hooks
- Keyboard and touch controls
- Accessibility support

## Technical Requirements

- React 16.8+
- Tailwind CSS
- Optional: Three.js (for advanced animation effects)
- Optional: Anime.js (for advanced animation effects)

</details>

## License

MIT