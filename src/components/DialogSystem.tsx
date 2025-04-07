import React from 'react';
import { Character } from './Character';
import { DialogBox } from './DialogBox';
import { ChoiceMenu } from './ChoiceMenu';
import { Background } from './Background';
import { useDialog } from '../context/DialogContext';

/**
 * 對話系統主組件
 */
export const DialogSystem: React.FC = () => {
  const {
    currentNode,
    handleNext,
    handleChoiceSelect,
    dialogue,
    characters,
    onMessageStart,
    onMessage,
    onMessageEnd
  } = useDialog();

  // 如果沒有當前節點或無效的節點ID，則不渲染
  if (!currentNode || !dialogue[currentNode]) {
    return null;
  }

  const currentDialogue = dialogue[currentNode];
  const character = characters[currentDialogue.character];

  const onNext = () => {
    handleNext();
    if (onMessageEnd) onMessageEnd(currentDialogue);
  };

  return (
    <div className="dialogic-container fixed inset-0 flex flex-col justify-end overflow-hidden z-50" style={{ userSelect: 'none' }}>
      {/* 背景 */}
      <Background src={currentDialogue.background} />

      {/* 角色 */}
      <div className="dialogic-characters-container relative w-full flex-1">
        {character && (
          <Character
            config={character}
            emotion={currentDialogue.emotion}
            position={currentDialogue.position || character.defaultPosition}
            active={true}
          />
        )}
      </div>

      {/* 對話框和選項 */}
      <div className="dialogic-controls-container w-full max-w-5xl mx-auto mb-8 px-4">
        <DialogBox
          name={character?.name}
          text={currentDialogue.text}
          textColor={character?.textColor}
          onNext={onNext}
          onTypingComplete={() => {
            if (onMessage) onMessage(currentDialogue);
          }}
        />

        {/* 選項 */}
        {currentDialogue.choices && (
          <ChoiceMenu
            choices={currentDialogue.choices}
            onSelect={handleChoiceSelect}
          />
        )}
      </div>
    </div>
  );
}; 