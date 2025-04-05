import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { DialogueNode, DialogueConfig, CharacterConfig } from '../types';

interface DialogContextType {
  currentNode: string | null;
  dialogue: DialogueConfig;
  characters: Record<string, CharacterConfig>;
  setCurrentNode: (nodeId: string) => void;
  handleNext: () => void;
  handleChoiceSelect: (next: string) => void;
  onMessageStart?: (node: DialogueNode) => void;
  onMessage?: (node: DialogueNode) => void;
  onMessageEnd?: (node: DialogueNode) => void;
}

const defaultContext: DialogContextType = {
  currentNode: null,
  dialogue: {},
  characters: {},
  setCurrentNode: () => {},
  handleNext: () => {},
  handleChoiceSelect: () => {}
};

const DialogContext = createContext<DialogContextType>(defaultContext);

interface DialogProviderProps {
  children: ReactNode;
  dialogue: DialogueConfig;
  characters: Record<string, CharacterConfig>;
  startNode?: string;
  onMessageStart?: (node: DialogueNode) => void;
  onMessage?: (node: DialogueNode) => void;
  onMessageEnd?: (node: DialogueNode) => void;
}

/**
 * 對話系統上下文提供者
 */
export const DialogContextProvider: React.FC<DialogProviderProps> = ({
  children,
  dialogue,
  characters,
  startNode,
  onMessageStart,
  onMessage,
  onMessageEnd
}) => {
  const [currentNode, setCurrentNode] = useState<string | null>(startNode || null);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  // 當對話節點變化時觸發onMessageStart
  const handleNodeChange = useCallback((nodeId: string) => {
    setCurrentNode(nodeId);
    setIsTypingComplete(false);
    if (dialogue[nodeId] && onMessageStart) {
      onMessageStart(dialogue[nodeId]);
    }
  }, [dialogue, onMessageStart]);

  // 完成打字效果時觸發onMessage
  const handleTypingComplete = useCallback(() => {
    setIsTypingComplete(true);
    if (currentNode && dialogue[currentNode] && onMessage) {
      onMessage(dialogue[currentNode]);
    }
  }, [currentNode, dialogue, onMessage]);

  // 前進到下一個對話節點
  const handleNext = useCallback(() => {
    if (!currentNode) return;
    
    const node = dialogue[currentNode];
    if (!node) return;

    // 如果打字效果未完成，則完成打字效果
    if (!isTypingComplete) {
      handleTypingComplete();
      return;
    }

    // 如果有下一個節點，前進到該節點
    if (node.next) {
      handleNodeChange(node.next);
    } 
    // 如果沒有下一個節點，則對話結束
    else if (onMessageEnd) {
      onMessageEnd(node);
    }
  }, [currentNode, dialogue, isTypingComplete, handleTypingComplete, handleNodeChange, onMessageEnd]);

  // 選擇對話選項
  const handleChoiceSelect = useCallback((next: string) => {
    handleNodeChange(next);
  }, [handleNodeChange]);

  return (
    <DialogContext.Provider
      value={{
        currentNode,
        dialogue,
        characters,
        setCurrentNode: handleNodeChange,
        handleNext,
        handleChoiceSelect,
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