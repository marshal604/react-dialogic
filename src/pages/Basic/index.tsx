import { ReactDialogic, SequenceItem } from 'react-dialogic';
import { characters, dialogue } from './config';

function BasicExample() {
  // 事件處理函數
  const handleMessageStart = (item: SequenceItem) => {
    console.log('對話開始:', item);
  };
  
  const handleMessageEnd = (item: SequenceItem) => {
    console.log('對話結束:', item);
  };
  
  const handleSceneEnd = (item: SequenceItem) => {
    console.log('場景結束:', item);
  };

  return (
    <div className="app">
      <ReactDialogic 
        characters={characters}
        dialogue={dialogue}
        startScene="mountain"
        onMessageStart={handleMessageStart}
        onMessageEnd={handleMessageEnd}
        onSceneEnd={handleSceneEnd}
      />
    </div>
  );
}

export default BasicExample; 