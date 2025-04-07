import React from 'react';
import { Choice } from '../types';
import '../styles/index.css';

interface ChoiceMenuProps {
  /**
   * 選項列表
   */
  choices: Choice[];
  /**
   * 選擇選項的回調
   */
  onSelect: (next: string) => void;
}

/**
 * 選項菜單組件
 */
export const ChoiceMenu: React.FC<ChoiceMenuProps> = ({ choices, onSelect }) => {
  return (
    <div className="dialogic-choices mt-4 flex flex-col gap-2">
      {choices.map((choice, index) => (
        <button
          key={`choice-${index}`}
          className="dialogic-choice-item"
          onClick={() => onSelect(choice.next)}
        >
          {choice.icon && (
            <span className="dialogic-choice-icon mr-2">{choice.icon}</span>
          )}
          <span className="dialogic-choice-text">{choice.text}</span>
        </button>
      ))}
    </div>
  );
}; 