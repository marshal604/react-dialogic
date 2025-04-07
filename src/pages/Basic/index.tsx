import React from 'react';
import { ReactDialogic, SequenceItem } from 'react-dialogic';
import { characters, dialogue } from './config';

function BasicExample() {
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
      <ReactDialogic 
        characters={characters}
        dialogue={dialogue}
        startScene="mountain"
        onMessageStart={handleMessageStart}
        onMessage={handleMessage}
        onMessageEnd={handleMessageEnd}
      />
    </div>
  );
}

export default BasicExample; 