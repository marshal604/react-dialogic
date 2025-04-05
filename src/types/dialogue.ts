/**
 * 選項類型定義
 */
export interface Choice {
  /**
   * 選項顯示文本
   */
  text: string;
  /**
   * 選項圖標（可選）
   */
  icon?: string;
  /**
   * 選擇後跳轉的對話節點ID
   */
  next: string;
}

/**
 * 對話節點類型定義
 */
export interface DialogueNode {
  /**
   * 對話文本內容
   */
  text: string;
  /**
   * 說話角色的ID
   */
  character: string;
  /**
   * 角色情緒/表情
   */
  emotion?: string;
  /**
   * 角色在畫面中的位置（左/右/中）
   */
  position?: 'left' | 'right' | 'center';
  /**
   * 背景圖片路徑
   */
  background?: string;
  /**
   * 下一個對話節點ID
   */
  next?: string;
  /**
   * 對話選項列表
   */
  choices?: Choice[];
  /**
   * 音效路徑
   */
  sound?: string;
  /**
   * 對話框樣式覆蓋
   */
  style?: Record<string, any>;
}

/**
 * 對話系統配置
 */
export interface DialogueConfig {
  /**
   * 所有對話節點的集合
   */
  [key: string]: DialogueNode;
} 