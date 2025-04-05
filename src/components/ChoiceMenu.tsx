import React from 'react';
import { Choice } from '../types';
import { useTheme } from '../context/ThemeContext';

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
  const { theme } = useTheme();

  return (
    <div className="dialogic-choices mt-4 flex flex-col gap-2">
      {choices.map((choice, index) => (
        <button
          key={`choice-${index}`}
          className="dialogic-choice transition-all duration-200 py-2 px-4"
          onClick={() => onSelect(choice.next)}
          style={{
            backgroundColor: theme.colors.choiceBackground,
            color: theme.colors.choiceText,
            borderRadius: theme.borderRadius.choice,
            fontFamily: theme.fonts.choice
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.choiceBackgroundHover;
            e.currentTarget.style.color = theme.colors.choiceTextHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.choiceBackground;
            e.currentTarget.style.color = theme.colors.choiceText;
          }}
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