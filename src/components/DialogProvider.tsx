import React, { ReactNode } from 'react';
import { DialogContextProvider } from '../context/DialogContext';
import { DialogueConfig, CharacterConfig, DialogueNode } from '../types';

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
   * 起始對話節點
   */
  startNode?: string;
  /**
   * 主題名稱
   */
  theme?: string;
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
 * 集成了主題和對話上下文的提供者組件
 */
export const DialogProvider: React.FC<DialogProviderProps> = ({
  children,
  characters,
  dialogue,
  startNode,
  theme = 'gameClassic',
  onMessageStart,
  onMessage,
  onMessageEnd
}) => {
  return (
      <DialogContextProvider
        characters={characters}
        dialogue={dialogue}
        startNode={startNode}
        onMessageStart={onMessageStart}
        onMessage={onMessage}
        onMessageEnd={onMessageEnd}
      >
        {children}
      </DialogContextProvider>
  );
}; 