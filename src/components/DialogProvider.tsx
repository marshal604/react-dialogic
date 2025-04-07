import React, { ReactNode } from 'react';
import { DialogContextProvider } from '../context/DialogContext';
import { DialogueConfig, CharacterConfig, SequenceItem } from '../types';

interface DialogProviderProps {
  /**
   * 子元素
   */
  children: ReactNode;
  /**
   * 角色配置集合
   */
  characters: Record<string, CharacterConfig>;
  /**
   * 對話配置
   */
  dialogue: DialogueConfig;
  /**
   * 起始場景
   */
  startScene?: string;
  /**
   * 對話開始的回調
   */
  onMessageStart?: (item: SequenceItem) => void;
  /**
   * 對話項結束的回調
   */
  onMessage?: (item: SequenceItem) => void;
  /**
   * 對話流結束的回調
   */
  onMessageEnd?: (item: SequenceItem) => void;
}

/**
 * 集成了主題和對話上下文的提供者組件
 */
export const DialogProvider: React.FC<DialogProviderProps> = ({
  children,
  characters,
  dialogue,
  startScene,
  onMessageStart,
  onMessage,
  onMessageEnd
}) => {
  return (
    <DialogContextProvider
      characters={characters}
      dialogue={dialogue}
      startScene={startScene}
      onMessageStart={onMessageStart}
      onMessage={onMessage}
      onMessageEnd={onMessageEnd}
    >
      {children}
    </DialogContextProvider>
  );
}; 