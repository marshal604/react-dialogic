import React from 'react';
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

function BasicExample() {
  // 事件處理函數
  const handleMessageStart = (dialogueNode) => {
    console.log('對話開始:', dialogueNode);
  };
  
  const handleMessage = (dialogueNode) => {
    console.log('對話進行中:', dialogueNode);
  };
  
  const handleMessageEnd = (dialogueNode) => {
    console.log('對話結束:', dialogueNode);
  };

  return (
    <div className="app">
      <DialogProvider 
        theme="gameClassic"
        characters={characters}
        dialogue={dialogue}
        startNode="start"
        onMessageStart={handleMessageStart}
        onMessage={handleMessage}
        onMessageEnd={handleMessageEnd}
      >
        <DialogSystem />
      </DialogProvider>
    </div>
  );
}

export default BasicExample; 