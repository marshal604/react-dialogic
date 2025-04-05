import React, { useEffect } from 'react';
import { DialogueConfig, DialogueNode, CharacterConfig } from '../types';
import { Character } from './Character';
import { DialogBox } from './DialogBox';
import { ChoiceMenu } from './ChoiceMenu';
import { Background } from './Background';
import { useDialog } from '../context/DialogContext';

export interface DialogSystemProps {
  /**
   * 角色配置集合
   */
  characters: Record<string, CharacterConfig>;
  /**
   * 對話配置
   */
  dialogue: DialogueConfig;
  /**
   * 起始對話節點
   */
  startNode: string;
  /**
   * 對話開始的回調
   */
  onMessageStart?: (node: DialogueNode) => void;
  /**
   * 對話節點結束的回調
   */
  onMessage?: (node: DialogueNode) => void;
  /**
   * 對話流結束的回調
   */
  onMessageEnd?: (node: DialogueNode) => void;
}

/**
 * 對話系統主組件
 */
export const DialogSystem: React.FC<DialogSystemProps> = ({
  characters,
  dialogue,
  startNode,
  onMessageStart,
  onMessage,
  onMessageEnd
}) => {
  const {
    currentNode,
    setCurrentNode,
    handleNext,
    handleChoiceSelect
  } = useDialog();

  // 初始化對話系統
  useEffect(() => {
    if (startNode) {
      setCurrentNode(startNode);
    }
  }, [startNode, setCurrentNode]);

  // 如果沒有當前節點或無效的節點ID，則不渲染
  if (!currentNode || !dialogue[currentNode]) {
    return null;
  }

  const currentDialogue = dialogue[currentNode];
  const character = characters[currentDialogue.character];

  return (
    <div className="dialogic-container fixed inset-0 flex flex-col justify-end overflow-hidden z-50">
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
          onNext={handleNext}
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