# React-Dialogic

<p align="center">
  <img src="https://img.shields.io/badge/version-2.x.x-blue.svg" alt="version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license">
</p>

<p align="center">
  一個專為 React 應用開發的對話系統 UI 套件，提供類遊戲風格的對話介面<br>
  A dialogue system UI kit for React applications with game-style interface
</p>

---

## 介紹 Introduction

React-Dialogic 是一個功能完整的 React 對話系統元件庫，專為建立互動式對話體驗而設計。無論是視覺小說、游戲對話、教學引導還是角色驅動的用戶界面，本套件都能提供令人印象深刻的對話流程。

React-Dialogic is a comprehensive React dialogue system component library designed for creating interactive dialogue experiences. Whether for visual novels, game dialogues, onboarding tutorials, or character-driven interfaces, this library provides engaging conversation flows.

[📺 Live Demo](https://marshal604.github.io/react-dialogic/)

<p align="center">
  <img src="https://github.com/user-attachments/assets/a83847fe-1b9e-4274-8a46-fd8c9542d94f" alt="React-Dialogic - 展示對話框、角色和選項介面" width="80%">
</p>

## ✨ 主要特性 Key Features

### 🖥️ 沉浸式顯示系統 Immersive Display System
- 組件初始化時自動佔滿整個視窗/容器 | Components automatically fill the entire container
- 響應式設計，適配不同屏幕尺寸 | Responsive design for all screen sizes

### 👥 角色配置系統 Character Configuration
- 支援設定角色信息（名稱、圖片、顏色等）| Support for character settings (name, images, colors)
- 多個表情/狀態的圖片管理 | Multiple emotion/state image management 
- 角色在對話中的位置控制 | Character positioning control

### 💬 對話框系統 Dialogue Box System
- 打字機效果逐字顯示文本 | Typewriter effect for text display
- 可調整文字顯示速度 | Adjustable text display speed
- 支援文字特效和停頓 | Support for text effects and pauses

### 🔄 選項系統 Choice System
- 支援對話選項分支 | Support for dialogue branching options
- 選項結果影響後續對話流程 | Choices affecting dialogue flow
- 條件性選項顯示 | Conditional option display

### 🎨 主題系統 Theme System
- 支援自定義主題配置 | Support for custom theme configuration

### 🏞️ 背景管理 Background Management
- 自定義背景圖片或顏色 | Custom background images or colors
- 背景轉場效果 | Background transition effects

### 🔌 事件鉤子系統 Event Hook System
- 完整的事件處理機制 | Comprehensive event handling
- 自定義事件處理和遊戲邏輯整合 | Custom game logic integration

---

## 📦 安裝 Installation

```bash
npm install react-dialogic
# 或/or
yarn add react-dialogic
```

---

<details>
<summary>🇹🇼 繁體中文使用指南</summary>

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


## 應用場景

React-Dialogic 特別適合以下應用場景：

- **視覺小說和互動式遊戲**：建立角色對話和情節分支
- **教學引導和使用者導覽**：透過角色引導用戶了解產品功能
- **互動式故事敘述**：創建引人入勝的故事體驗
- **角色驅動的用戶介面**：將應用程式介面擬人化
- **教育應用**：建立互動式教學內容
- **客戶服務聊天界面**：開發有個性的客服對話介面
- **產品展示**：透過對話方式介紹產品特點

## 支援與貢獻

- **問題報告**：如發現問題，請在 GitHub Issues 頁面提交
- **功能請求**：歡迎提出新功能建議
- **代碼貢獻**：請參閱貢獻指南提交 Pull Request
- **文檔改進**：幫助我們完善文檔

</details>

<details>
<summary>🇬🇧 English Usage Guide</summary>

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
        text: 'Aunt, what martial arts are we practicing today?', 
        position: Position.LEFT 
      },
      { 
        speaker: 'xiaoLongNv', 
        text: 'We will practice the Jade Maiden Heart Sutra today.', 
        position: Position.RIGHT 
      },
      
      // Narration - no character specified
      { 
        text: '(They arrive at the training ground)' 
      },
      
      // Choice branch
      { 
        speaker: 'xiaoLongNv',
        text: 'Which part would you like to practice first?',
        choices: [
          { text: 'Inner Power Techniques', next: 'innerPower' },
          { text: 'Sword Skills', next: 'swordSkills' }
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
        text: 'Let us meditate first to cultivate inner power.', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: 'Yes, Aunt.', 
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
        text: 'Take your sword, let us practice sword techniques.', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: 'As you command, Aunt.', 
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
        text: 'That concludes our training for today.', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: 'Thank you for your guidance, Aunt.', 
        position: Position.LEFT 
      }
      // No next, dialogue ends
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
  // Event handler functions
  const handleMessageStart = (item) => {
    console.log('Dialogue started:', item);
    // Can trigger sound effects, animations, or update game state
  };
  
  const handleMessage = (item) => {
    console.log('Dialogue in progress:', item);
    // Can record player choices, update variables, etc.
  };
  
  const handleMessageEnd = (item) => {
    console.log('Dialogue ended:', item);
    // Can return to game main flow or trigger subsequent events
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

### Step 5: Image Imports (when using bundlers like Webpack)

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

React Dialogic uses CSS variables to control component appearance. You can customize themes in the following ways:

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
| `--dialogic-dialog-bg` | Dialog box background color | rgba(0, 0, 0, 0.8) |
| `--dialogic-dialog-border` | Dialog box border color | #FFCC00 |
| `--dialogic-dialog-text` | Dialog text color | #FFFFFF |
| `--dialogic-name-text` | Character name color | #FFCC00 |
| `--dialogic-choice-bg` | Choice option background color | rgba(0, 0, 0, 0.7) |
| `--dialogic-choice-bg-hover` | Choice option hover background color | rgba(255, 204, 0, 0.3) |
| `--dialogic-choice-text` | Choice option text color | #FFFFFF |
| `--dialogic-choice-text-hover` | Choice option hover text color | #FFCC00 |
| `--dialogic-font-dialog` | Dialog box font | 'Press Start 2P', system-ui, sans-serif |
| `--dialogic-font-choice` | Choice option font | 'Press Start 2P', system-ui, sans-serif |
| `--dialogic-typewriter-speed` | Typewriter effect speed | 40ms |
| `--dialogic-dialog-radius` | Dialog box border radius | 4px |
| `--dialogic-choice-radius` | Choice option border radius | 2px | 

## Additional Features

- Character enter/exit animations
- Dialog box appearance/disappearance effects
- Background transition effects
- Sound effects and voice support
- Custom event hooks
- Keyboard and touch controls
- Accessibility support

## Technical Requirements

- React 16.8+
- Tailwind CSS


## Use Cases

React-Dialogic is particularly well-suited for:

- **Visual novels and interactive games**: Create character dialogues and storyline branches
- **Tutorials and user onboarding**: Guide users through product features with character-driven tutorials
- **Interactive storytelling**: Create engaging story experiences
- **Character-driven user interfaces**: Personify your application interfaces
- **Educational applications**: Build interactive learning content
- **Customer service chat interfaces**: Develop personalized service chat interfaces
- **Product showcases**: Present product features through dialogue

## Support and Contribution

- **Issue reporting**: Submit issues on the GitHub Issues page
- **Feature requests**: Suggest new features
- **Code contributions**: Submit Pull Requests following contribution guidelines
- **Documentation improvements**: Help improve documentation

</details>

---

## 相關連結 Links

- [NPM Package](https://www.npmjs.com/package/react-dialogic)
- [GitHub Repository](https://github.com/marshal604/react-dialogic)
- [Bug Report](https://github.com/marshal604/react-dialogic/issues)
- [Documentation](https://marshal604.github.io/react-dialogic/docs)
