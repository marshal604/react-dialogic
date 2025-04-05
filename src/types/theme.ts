/**
 * 主題顏色配置
 */
export interface ThemeColors {
  /**
   * 對話框背景色
   */
  dialogBackground: string;
  /**
   * 對話框邊框色
   */
  dialogBorder: string;
  /**
   * 對話文字色
   */
  dialogText: string;
  /**
   * 角色名稱文字色
   */
  nameText: string;
  /**
   * 選項背景色
   */
  choiceBackground: string;
  /**
   * 選項懸停背景色
   */
  choiceBackgroundHover: string;
  /**
   * 選項文字色
   */
  choiceText: string;
  /**
   * 選項懸停文字色
   */
  choiceTextHover: string;
}

/**
 * 主題字體配置
 */
export interface ThemeFonts {
  /**
   * 對話框字體
   */
  dialog: string;
  /**
   * 選項字體
   */
  choice: string;
}

/**
 * 主題動畫配置
 */
export interface ThemeAnimations {
  /**
   * 打字機效果速度（毫秒/字符）
   */
  typewriterSpeed: number;
  /**
   * 角色進入動畫
   */
  characterEnter: string;
  /**
   * 角色離開動畫
   */
  characterExit: string;
}

/**
 * 主題圓角配置
 */
export interface ThemeBorderRadius {
  /**
   * 對話框圓角
   */
  dialog: string;
  /**
   * 選項圓角
   */
  choice: string;
}

/**
 * 完整主題配置
 */
export interface Theme {
  /**
   * 主題顏色設置
   */
  colors: ThemeColors;
  /**
   * 主題字體設置
   */
  fonts: ThemeFonts;
  /**
   * 主題動畫設置
   */
  animations: ThemeAnimations;
  /**
   * 主題圓角設置
   */
  borderRadius: ThemeBorderRadius;
} 