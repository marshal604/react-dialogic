import React from 'react';
import { DialogProvider } from './DialogProvider';
import { DialogSystem } from './DialogSystem';
import { DialogueConfig, CharacterConfig, SequenceItem } from '../types';

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
   * 起始場景
   */
  startScene: string;
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
 * React Dialogic 統一入口組件
 * 將 DialogProvider 和 DialogSystem 封裝在一起，提供更簡單的使用方式
 */
const ReactDialogic: React.FC<ReactDialogicProps> = ({
  characters,
  dialogue,
  startScene,
  onMessageStart,
  onMessage,
  onMessageEnd
}) => {
  return (
    <DialogProvider
      characters={characters}
      dialogue={dialogue}
      startScene={startScene}
      onMessageStart={onMessageStart}
      onMessage={onMessage}
      onMessageEnd={onMessageEnd}
    >
      <DialogSystem />
    </DialogProvider>
  );
};

export default ReactDialogic;