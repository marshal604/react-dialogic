import React from 'react';
import { ReactDialogic, DialogueNode } from 'react-dialogic';
import { characters, dialogue } from './config';

function BasicExample() {
  // 事件處理函數
  const handleMessageStart = (dialogueNode: DialogueNode) => {
    console.log('對話開始:', dialogueNode);
  };
  
  const handleMessage = (dialogueNode: DialogueNode) => {
    console.log('對話進行中:', dialogueNode);
  };
  
  const handleMessageEnd = (dialogueNode: DialogueNode) => {
    console.log('對話結束:', dialogueNode);
  };

  return (
    <div className="app">
      <ReactDialogic 
        characters={characters}
        dialogue={dialogue}
        startNode="start"
        onMessageStart={handleMessageStart}
        onMessage={handleMessage}
        onMessageEnd={handleMessageEnd}
      />
    </div>
  );
}

export default BasicExample; 