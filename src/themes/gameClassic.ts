import { Theme } from '../types';

/**
 * 經典遊戲風格主題
 */
export const gameClassicTheme: Theme = {
  colors: {
    dialogBackground: 'rgba(0, 0, 0, 0.8)',
    dialogBorder: '#FFCC00',
    dialogText: '#FFFFFF',
    nameText: '#FFCC00',
    choiceBackground: 'rgba(0, 0, 0, 0.7)',
    choiceBackgroundHover: 'rgba(255, 204, 0, 0.3)',
    choiceText: '#FFFFFF',
    choiceTextHover: '#FFCC00'
  },
  fonts: {
    dialog: "'Press Start 2P', system-ui, sans-serif",
    choice: "'Press Start 2P', system-ui, sans-serif"
  },
  animations: {
    typewriterSpeed: 40,
    characterEnter: 'fadeInLeft',
    characterExit: 'fadeOutRight'
  },
  borderRadius: {
    dialog: '4px',
    choice: '2px'
  }
}; 