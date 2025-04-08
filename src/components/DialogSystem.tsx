import React from 'react';
import { Character } from './Character';
import { DialogBox } from './DialogBox';
import { ChoiceMenu } from './ChoiceMenu';
import { Background } from './Background';
import { useDialog } from '../context/DialogContext';
import styles from '../styles/DialogicContainer.module.css';

/**
 * 對話系統主組件
 */
export const DialogSystem: React.FC = () => {
  const {
    getCurrentItem,
    getCurrentScene,
    handleNext,
    handleChoiceSelect,
    characters,
    onMessageStart,
    onMessage,
    onMessageEnd,
    handleTypingComplete
  } = useDialog();

  // 獲取當前場景和當前對話項
  const currentScene = getCurrentScene();
  const currentItem = getCurrentItem();

  // 如果沒有當前場景或對話項，則不渲染
  if (!currentScene || !currentItem) {
    return null;
  }

  // 獲取背景（優先使用當前對話項的背景，其次使用場景背景）
  const backgroundSrc = currentItem.background || currentScene.background;

  // 獲取角色（如果對話項有指定角色的話）
  const character = currentItem.speaker ? characters[currentItem.speaker] : null;

  const onNext = () => {
    handleNext();
    if (onMessageEnd) onMessageEnd(currentItem);
  };

  return (
    <div className={`${styles.container} flex flex-col`} style={{ userSelect: 'none' }}>
      {/* 背景 */}
      <Background src={backgroundSrc} />

      {/* 角色顯示區域 */}
      <div className={styles.charactersContainer}>
        {character && (
          <Character
            config={character}
            emotion={currentItem.emotion}
            position={currentItem.position || character.defaultPosition}
            active={true}
          />
        )}
      </div>

      {/* 底部區域：對話框和選項 */}
      <div className={styles.dialogArea}>
        <div className="w-full max-w-5xl mx-auto px-4 mb-4">
          <DialogBox
            name={character?.name}
            text={currentItem.text}
            textColor={character?.textColor}
            onNext={onNext}
            onTypingComplete={handleTypingComplete}
          />

          {/* 選項 */}
          {currentItem.choices && (
            <ChoiceMenu
              choices={currentItem.choices}
              onSelect={handleChoiceSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}; 