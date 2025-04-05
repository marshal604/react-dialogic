import { Theme } from '../types';

/**
 * 現代風格主題
 */
export const modernTheme: Theme = {
  colors: {
    dialogBackground: 'rgba(255, 255, 255, 0.9)',
    dialogBorder: '#3498db',
    dialogText: '#2c3e50',
    nameText: '#3498db',
    choiceBackground: 'rgba(236, 240, 241, 0.9)',
    choiceBackgroundHover: 'rgba(52, 152, 219, 0.2)',
    choiceText: '#2c3e50',
    choiceTextHover: '#3498db'
  },
  fonts: {
    dialog: "'Inter', system-ui, sans-serif",
    choice: "'Inter', system-ui, sans-serif"
  },
  animations: {
    typewriterSpeed: 30,
    characterEnter: 'fadeIn',
    characterExit: 'fadeOut'
  },
  borderRadius: {
    dialog: '12px',
    choice: '8px'
  }
}; 