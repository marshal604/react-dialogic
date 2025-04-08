import React, { useMemo } from 'react';
import { CharacterConfig } from '../types';
import styles from '../styles/Character.module.css';

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
  // 根據情緒獲取圖片URL
  const imageUrl = useMemo(() => {
    return config.images[emotion] || config.images.default;
  }, [config.images, emotion]);

  // 根據位置設置樣式
  const positionClass = useMemo(() => {
    switch (position) {
      case 'left':
        return 'left-8';
      case 'right':
        return 'right-8';
      default:
        return 'mx-auto';
    }
  }, [position]);

  // 根據活躍狀態設置樣式
  const activeClass = active ? 'opacity-100' : 'opacity-50';
  
  // 動畫類名
  const animationClass = active 
    ? styles.characterEnter 
    : styles.characterExit;

  return (
    <div
      className={`${styles.character} ${positionClass} ${activeClass} ${animationClass} absolute bottom-8`}
      style={{
        position: 'absolute',
        bottom: 'var(--dialogic-character-bottom, 0)',
        left: position === 'left' ? 'var(--dialogic-character-side-margin, 2rem)' : 'auto',
        right: position === 'right' ? 'var(--dialogic-character-side-margin, 2rem)' : 'auto',
        margin: position === 'center' ? '0 auto' : 'initial',
      }}
    >
      <img 
        src={imageUrl} 
        alt={config.name} 
        className="w-full h-auto object-contain"
      />
    </div>
  );
}; 