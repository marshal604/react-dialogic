import React, { useMemo } from 'react';
import { CharacterConfig } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CharacterProps {
  /**
   * 角色配置
   */
  config: CharacterConfig;
  /**
   * 情緒/表情
   */
  emotion?: string;
  /**
   * 位置
   */
  position?: 'left' | 'right' | 'center';
  /**
   * 是否活躍（說話中）
   */
  active?: boolean;
}

/**
 * 角色顯示組件
 */
export const Character: React.FC<CharacterProps> = ({
  config,
  emotion = 'default',
  position = 'center',
  active = true
}) => {
  const { theme } = useTheme();
  
  // 根據情緒獲取圖片URL
  const imageUrl = useMemo(() => {
    return config.images[emotion] || config.images.default;
  }, [config.images, emotion]);

  // 根據位置設置樣式
  const positionClass = useMemo(() => {
    switch (position) {
      case 'left':
        return 'dialogic-character-left left-8';
      case 'right':
        return 'dialogic-character-right right-8';
      default:
        return 'dialogic-character-center mx-auto';
    }
  }, [position]);

  // 根據活躍狀態設置樣式
  const activeClass = active ? 'opacity-100' : 'opacity-50';
  
  // 動畫類名
  const animationClass = active 
    ? theme.animations.characterEnter 
    : theme.animations.characterExit;

  return (
    <div
      className={`dialogic-character ${positionClass} ${activeClass} ${animationClass} absolute bottom-0`}
      style={{ maxHeight: '70vh' }}
    >
      <img 
        src={imageUrl} 
        alt={config.name} 
        className="h-full w-auto object-contain"
      />
    </div>
  );
}; 