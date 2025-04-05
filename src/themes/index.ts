import { Theme } from '../types';
import { gameClassicTheme } from './gameClassic';
import { modernTheme } from './modern';

/**
 * 所有可用主題的集合
 */
export const themes: Record<string, Theme> = {
  gameClassic: gameClassicTheme,
  modern: modernTheme
};

/**
 * 獲取指定名稱的主題
 * @param name 主題名稱
 * @returns 主題設置
 */
export const getTheme = (name: string): Theme => {
  return themes[name] || gameClassicTheme;
};

export { gameClassicTheme, modernTheme }; 