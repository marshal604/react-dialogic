# React-Dialogic

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="版本">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="授權">
</p>

<p align="center">
  <a href="./README.md">主頁</a> | 
  <a href="./README.en.md">English</a>
</p>

一個專為 React 應用開發的對話系統 UI 套件，提供類遊戲風格的對話介面，支援豐富的對話功能和自定義主題。

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
import { DialogSystem, DialogProvider } from 'react-dialogic';
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
    textColor: '#e63946'
  },
  kai: {
    name: '小凱',
    images: {
      default: '/images/kai-default.png',
      surprised: '/images/kai-surprised.png'
    },
    textColor: '#457b9d'
  }
};

// 對話腳本
const dialogue = {
  start: {
    text: '今天天氣真好啊！',
    character: 'mei',
    emotion: 'happy',
    position: 'left',
    background: '/images/park-morning.jpg',
    next: 'response1'
  },
  response1: {
    text: '是啊，要不要一起去公園走走？',
    character: 'kai',
    position: 'right',
    next: 'choice1'
  },
  choice1: {
    text: '你想做什麼呢？',
    character: 'mei',
    emotion: 'default',
    choices: [
      { text: '去公園野餐', next: 'picnic' },
      { text: '去看電影', next: 'movie' }
    ]
  },
  picnic: {
    text: '野餐是個好主意！我們去準備吧。',
    character: 'kai',
    emotion: 'happy',
    background: '/images/park-picnic.jpg',
    next: 'picnic_continue'
  },
  movie: {
    text: '看電影也不錯，最近有很多新上映的片子。',
    character: 'kai',
    background: '/images/cinema.jpg',
    next: 'movie_continue'
  },
  movie_continue: {
    text: '那就這麼決定了！',
    character: 'mei',
    emotion: 'happy',
    // 沒有next屬性，對話將結束
  }
};

function App() {
  // 事件處理函數
  const handleMessageStart = (dialogueNode) => {
    console.log('對話開始:', dialogueNode);
    // 可以觸發音效、動畫或更新遊戲狀態
  };
  
  const handleMessage = (dialogueNode) => {
    console.log('對話進行中:', dialogueNode);
    // 可以記錄玩家選擇、更新變數等
  };
  
  const handleMessageEnd = (dialogueNode) => {
    console.log('對話結束:', dialogueNode);
    // 可以返回遊戲主流程或觸發後續事件
  };

  return (
    <DialogProvider theme="gameClassic">
      <DialogSystem 
        characters={characters}
        dialogue={dialogue}
        startNode="start"
        onMessageStart={handleMessageStart}
        onMessage={handleMessage}
        onMessageEnd={handleMessageEnd}
      />
    </DialogProvider>
  );
}
```

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

## 授權

MIT 