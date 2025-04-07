import React from 'react';
import { DialogProvider } from './DialogProvider';
import { DialogSystem } from './DialogSystem';
import { DialogueConfig, CharacterConfig, DialogueNode } from '../types';

export interface ReactDialogicProps {
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
 * React Dialogic 統一入口組件
 * 將 DialogProvider 和 DialogSystem 封裝在一起，提供更簡單的使用方式
 */
export const ReactDialogic: React.FC<ReactDialogicProps> = ({
  characters,
  dialogue,
  startNode,
  onMessageStart,
  onMessage,
  onMessageEnd
}) => {
  return (
    <DialogProvider
      characters={characters}
      dialogue={dialogue}
      startNode={startNode}
      onMessageStart={onMessageStart}
      onMessage={onMessage}
      onMessageEnd={onMessageEnd}
    >
      <DialogSystem />
    </DialogProvider>
  );
};