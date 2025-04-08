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

### 步驟一：引入組件和樣式

```jsx
import { ReactDialogic } from 'react-dialogic';
// 重要：引入樣式
import 'react-dialogic/dist/styles.css';
```

### 步驟二：定義角色配置

```jsx
// 定義位置常量（可選）
const Position = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
};

// 角色配置
const characters = {
  yangGuo: {
    name: '楊過',
    images: {
      default: '/images/yangGuo.png'
    },
    textColor: '#3a86ff',
    defaultPosition: Position.LEFT
  },
  xiaoLongNv: {
    name: '小龍女',
    images: {
      default: '/images/xiaoLongNv.png',
      blindfolded: '/images/xiaoLongNv-blindfolded.png'
    },
    textColor: '#8338ec',
    defaultPosition: Position.RIGHT
  }
};
```

### 步驟三：定義對話場景

```jsx
// 對話配置
const dialogue = {
  // 場景一：開始
  start: {
    background: '/images/grassland.png',
    sequence: [
      // 角色對話
      { 
        speaker: 'yangGuo', 
        text: '姑姑，我們今天練什麼武功？', 
        position: Position.LEFT 
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '我們今天練習玉女心經。', 
        position: Position.RIGHT 
      },
      
      // 旁白 - 不指定角色
      { 
        text: '（兩人來到了練武場）' 
      },
      
      // 選項分支
      { 
        speaker: 'xiaoLongNv',
        text: '你想先練習哪個部分？',
        choices: [
          { text: '內功心法', next: 'innerPower' },
          { text: '劍法招式', next: 'swordSkills' }
        ]
      }
    ]
  },
  
  // 場景二：內功
  innerPower: {
    background: '/images/cave.png',
    sequence: [
      { 
        speaker: 'xiaoLongNv', 
        text: '讓我們先打坐冥想，修煉內功。', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: '好的，姑姑。', 
        position: Position.LEFT 
      },
      // 下一個場景
      {
        text: '（兩人開始打坐）',
        next: 'ending'
      }
    ]
  },
  
  // 場景三：劍法
  swordSkills: {
    background: '/images/grassland.png',
    sequence: [
      { 
        speaker: 'xiaoLongNv', 
        text: '拿起你的劍，讓我們練習劍法。', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: '遵命，姑姑。', 
        position: Position.LEFT 
      },
      // 下一個場景
      {
        text: '（兩人開始練劍）',
        next: 'ending'
      }
    ]
  },
  
  // 結束場景
  ending: {
    background: '/images/sunset.png',
    sequence: [
      { 
        speaker: 'xiaoLongNv', 
        text: '今天的練習到此為止。', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: '謝謝姑姑指導。', 
        position: Position.LEFT 
      }
      // 沒有next，對話結束
    ]
  }
};
```

### 步驟四：使用組件

```jsx
import React from 'react';
import { ReactDialogic } from 'react-dialogic';
import 'react-dialogic/dist/styles.css';

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
    <div className="app">
      <ReactDialogic 
        characters={characters}
        dialogue={dialogue}
        startScene="start"
        onMessageStart={handleMessageStart}
        onMessage={handleMessage}
        onMessageEnd={handleMessageEnd}
      />
    </div>
  );
}

export default App;
```

### 步驟五：圖片引入（如使用打包工具如Webpack）

如果您使用Webpack等打包工具，可以直接引入本地圖片：

```jsx
import yangGuoImg from './images/yangGuo.png';
import xiaoLongNvImg from './images/xiaoLongNv.png';
import blindfoldedImg from './images/xiaoLongNv-blindfolded.png';
import grasslandBg from './images/grassland.png';
import caveBg from './images/cave.png';
import sunsetBg from './images/sunset.png';

// 角色配置
const characters = {
  yangGuo: {
    name: '楊過',
    images: {
      default: yangGuoImg
    },
    // ...其他設定
  },
  xiaoLongNv: {
    name: '小龍女',
    images: {
      default: xiaoLongNvImg,
      blindfolded: blindfoldedImg
    },
    // ...其他設定
  }
};

// 對話配置
const dialogue = {
  start: {
    background: grasslandBg,
    // ...序列
  },
  // ...其他場景
};
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

### Step 1: Import Components and Styles

```jsx
import { ReactDialogic } from 'react-dialogic';
// Important: import styles
import 'react-dialogic/dist/styles.css';
```

### Step 2: Define Character Configuration

```jsx
// Define position constants (optional)
const Position = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
};

// Character configuration
const characters = {
  yangGuo: {
    name: 'Yang Guo',
    images: {
      default: '/images/yangGuo.png'
    },
    textColor: '#3a86ff',
    defaultPosition: Position.LEFT
  },
  xiaoLongNv: {
    name: 'Xiao Long Nv',
    images: {
      default: '/images/xiaoLongNv.png',
      blindfolded: '/images/xiaoLongNv-blindfolded.png'
    },
    textColor: '#8338ec',
    defaultPosition: Position.RIGHT
  }
};
```

### Step 3: Define Dialogue Scenes

```jsx
// Dialogue configuration
const dialogue = {
  // Scene One: Start
  start: {
    background: '/images/grassland.png',
    sequence: [
      // Character dialogue
      { 
        speaker: 'yangGuo', 
        text: 'Master, what skills shall we practice today?', 
        position: Position.LEFT 
      },
      { 
        speaker: 'xiaoLongNv', 
        text: 'Today we will practice the Jade Maiden Heart Sutra.', 
        position: Position.RIGHT 
      },
      
      // Narration - no character specified
      { 
        text: '(The two arrived at the training area)' 
      },
      
      // Choice branch
      { 
        speaker: 'xiaoLongNv',
        text: 'Which part would you like to practice first?',
        choices: [
          { text: 'Inner power cultivation', next: 'innerPower' },
          { text: 'Sword techniques', next: 'swordSkills' }
        ]
      }
    ]
  },
  
  // Scene Two: Inner Power
  innerPower: {
    background: '/images/cave.png',
    sequence: [
      { 
        speaker: 'xiaoLongNv', 
        text: 'Let us sit in meditation to cultivate inner power.', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: 'Yes, master.', 
        position: Position.LEFT 
      },
      // Next scene
      {
        text: '(They begin to meditate)',
        next: 'ending'
      }
    ]
  },
  
  // Scene Three: Sword Skills
  swordSkills: {
    background: '/images/grassland.png',
    sequence: [
      { 
        speaker: 'xiaoLongNv', 
        text: 'Take your sword and let us practice sword techniques.', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: 'As you command, master.', 
        position: Position.LEFT 
      },
      // Next scene
      {
        text: '(They begin sword practice)',
        next: 'ending'
      }
    ]
  },
  
  // Ending Scene
  ending: {
    background: '/images/sunset.png',
    sequence: [
      { 
        speaker: 'xiaoLongNv', 
        text: 'That\'s enough practice for today.', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: 'Thank you for your guidance, master.', 
        position: Position.LEFT 
      }
      // No next property, dialogue ends
    ]
  }
};
```

### Step 4: Use the Component

```jsx
import React from 'react';
import { ReactDialogic } from 'react-dialogic';
import 'react-dialogic/dist/styles.css';

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
    <div className="app">
      <ReactDialogic 
        characters={characters}
        dialogue={dialogue}
        startScene="start"
        onMessageStart={handleMessageStart}
        onMessage={handleMessage}
        onMessageEnd={handleMessageEnd}
      />
    </div>
  );
}

export default App;
```

### Step 5: Image Imports (When Using Bundlers like Webpack)

If you're using bundlers like Webpack, you can import local images directly:

```jsx
import yangGuoImg from './images/yangGuo.png';
import xiaoLongNvImg from './images/xiaoLongNv.png';
import blindfoldedImg from './images/xiaoLongNv-blindfolded.png';
import grasslandBg from './images/grassland.png';
import caveBg from './images/cave.png';
import sunsetBg from './images/sunset.png';

// Character configuration
const characters = {
  yangGuo: {
    name: 'Yang Guo',
    images: {
      default: yangGuoImg
    },
    // ...other settings
  },
  xiaoLongNv: {
    name: 'Xiao Long Nv',
    images: {
      default: xiaoLongNvImg,
      blindfolded: blindfoldedImg
    },
    // ...other settings
  }
};

// Dialogue configuration
const dialogue = {
  start: {
    background: grasslandBg,
    // ...sequence
  },
  // ...other scenes
};
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