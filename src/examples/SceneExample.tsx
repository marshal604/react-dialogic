import React from 'react';
import { DialogProvider } from '../components/DialogProvider';
import { DialogSystem } from '../components/DialogSystem';
import { SequenceItem } from '../types';

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
    defaultPosition: 'left' as 'left'
  },
  kai: {
    name: '小凱',
    images: {
      default: '/images/kai-default.png',
      surprised: '/images/kai-surprised.png'
    },
    textColor: '#457b9d',
    defaultPosition: 'right' as 'right'
  }
};

// 新格式的對話配置
const dialogue = {
  // 場景1：公園
  park: {
    background: '/images/park.jpg',
    sequence: [
      // 角色對話
      { speaker: 'mei', emotion: 'happy', text: '今天天氣真好啊！', position: 'left' as 'left' },
      { speaker: 'kai', text: '是啊，要不要一起去公園走走？', position: 'right' as 'right' },
      
      // 旁白 - 不指定角色
      { text: '兩人一邊聊天，一邊朝公園深處走去。' },
      
      // 背景切換 - 同一場景內
      { background: '/images/park-lake.jpg', text: '他們走到了公園的湖邊。' },
      
      // 角色對話
      { speaker: 'mei', text: '你想做什麼呢？', emotion: 'default' },
      
      // 選項分支
      { 
        speaker: 'mei',
        text: '你有什麼想法嗎？',
        choices: [
          { text: '去野餐', next: 'picnic' },
          { text: '去看電影', next: 'cinema' }
        ]
      }
    ]
  },
  
  // 場景2：野餐
  picnic: {
    background: '/images/park-picnic.jpg',
    sequence: [
      { speaker: 'kai', emotion: 'happy', text: '野餐是個好主意！我們去準備吧。' },
      { speaker: 'mei', text: '我帶了一些三明治，你要嗎？' },
      { speaker: 'kai', text: '好啊，謝謝！' },
      { text: '兩人享受著陽光下的美好時光。' }
    ]
  },
  
  // 場景3：電影院
  cinema: {
    background: '/images/cinema.jpg',
    sequence: [
      { speaker: 'kai', text: '這部電影聽說很好看。' },
      { speaker: 'mei', emotion: 'happy', text: '我期待很久了！' },
      { text: '燈光暗了下來，電影開始了。' }
    ]
  }
};

// 示例組件
function SceneExample() {
  // 事件處理函數
  const handleMessageStart = (item: SequenceItem) => {
    console.log('對話開始:', item);
  };
  
  const handleMessage = (item: SequenceItem) => {
    console.log('對話進行中:', item);
  };
  
  const handleMessageEnd = (item: SequenceItem) => {
    console.log('對話結束:', item);
  };

  return (
    <div className="app">
      <DialogProvider 
        characters={characters}
        dialogue={dialogue}
        startScene="park"
        onMessageStart={handleMessageStart}
        onMessage={handleMessage}
        onMessageEnd={handleMessageEnd}
      >
        <DialogSystem />
      </DialogProvider>
    </div>
  );
}

export default SceneExample; 