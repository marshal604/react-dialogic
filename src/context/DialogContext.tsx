import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { SequenceItem, DialogueConfig, CharacterConfig, Scene } from '../types';

interface DialogContextType {
  currentScene: string | null;
  currentIndex: number;
  dialogue: DialogueConfig;
  characters: Record<string, CharacterConfig>;
  setCurrentScene: (sceneId: string) => void;
  handleNext: () => void;
  handleChoiceSelect: (next: string) => void;
  getCurrentItem: () => SequenceItem | null;
  getCurrentScene: () => Scene | null;
  onMessageStart?: (item: SequenceItem) => void;
  onMessage?: (item: SequenceItem) => void;
  onMessageEnd?: (item: SequenceItem) => void;
}

const defaultContext: DialogContextType = {
  currentScene: null,
  currentIndex: 0,
  dialogue: {},
  characters: {},
  setCurrentScene: () => {},
  handleNext: () => {},
  handleChoiceSelect: () => {},
  getCurrentItem: () => null,
  getCurrentScene: () => null
};

const DialogContext = createContext<DialogContextType>(defaultContext);

interface DialogProviderProps {
  children: ReactNode;
  dialogue: DialogueConfig;
  characters: Record<string, CharacterConfig>;
  startScene?: string;
  onMessageStart?: (item: SequenceItem) => void;
  onMessage?: (item: SequenceItem) => void;
  onMessageEnd?: (item: SequenceItem) => void;
}

/**
 * 對話系統上下文提供者
 */
export const DialogContextProvider: React.FC<DialogProviderProps> = ({
  children,
  dialogue,
  characters,
  startScene,
  onMessageStart,
  onMessage,
  onMessageEnd
}) => {
  const [currentScene, setCurrentScene] = useState<string | null>(startScene || null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  // 獲取當前場景
  const getCurrentScene = useCallback(() => {
    if (!currentScene || !dialogue[currentScene]) return null;
    return dialogue[currentScene];
  }, [currentScene, dialogue]);

  // 獲取當前對話項
  const getCurrentItem = useCallback(() => {
    const scene = getCurrentScene();
    if (!scene || !scene.sequence || currentIndex >= scene.sequence.length) return null;
    return scene.sequence[currentIndex];
  }, [getCurrentScene, currentIndex]);

  // 當對話項變化時觸發onMessageStart
  const handleSequenceChange = useCallback((sceneId: string, index: number) => {
    setCurrentScene(sceneId);
    setCurrentIndex(index);
    setIsTypingComplete(false);
    
    const scene = dialogue[sceneId];
    if (scene && scene.sequence && scene.sequence[index] && onMessageStart) {
      onMessageStart(scene.sequence[index]);
    }
  }, [dialogue, onMessageStart]);

  // 完成打字效果時觸發onMessage
  const handleTypingComplete = useCallback(() => {
    alert(`handleTypingComplete: true`)
    setIsTypingComplete(true);
    const currentItem = getCurrentItem();
    if (currentItem && onMessage) {
      onMessage(currentItem);
    }
  }, [getCurrentItem, onMessage]);

  // 前進到下一個對話項
  const handleNext = useCallback(() => {
    const scene = getCurrentScene();
    alert(`handleNext: scene: ${Boolean(scene)}`)
    if (!scene) return;
    const currentItem = getCurrentItem();
    alert(`handleNext: currentItem: ${Boolean(currentItem)}`)
    if (!currentItem) return;

    // 如果打字效果未完成，則完成打字效果
    alert(`handleNext: isTypingComplete: ${isTypingComplete}`)
    if (!isTypingComplete) {
      handleTypingComplete();
      return;
    }

    // 檢查是否有選項
    if (currentItem.choices) {
      // 有選項則等待用戶選擇，不自動前進
      return;
    }

    // 檢查是否是序列中的最後一項
    if (currentIndex < scene.sequence.length - 1) {
      // 移動到序列中的下一項
      handleSequenceChange(currentScene!, currentIndex + 1);
    } 
    // 如果是序列的最後一項且沒有選項，則對話結束
    else if (onMessageEnd) {
      onMessageEnd(currentItem);
    }
  }, [currentScene, currentIndex, getCurrentScene, getCurrentItem, isTypingComplete, handleTypingComplete, handleSequenceChange, onMessageEnd]);

  // 選擇對話選項
  const handleChoiceSelect = useCallback((next: string) => {
    // 跳轉到指定的場景
    handleSequenceChange(next, 0);
  }, [handleSequenceChange]);

  return (
    <DialogContext.Provider
      value={{
        currentScene,
        currentIndex,
        dialogue,
        characters,
        setCurrentScene: (sceneId: string) => handleSequenceChange(sceneId, 0),
        handleNext,
        handleChoiceSelect,
        getCurrentItem,
        getCurrentScene,
        onMessageStart,
        onMessage,
        onMessageEnd
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

/**
 * 使用對話系統的Hook
 */
export const useDialog = () => useContext(DialogContext); 