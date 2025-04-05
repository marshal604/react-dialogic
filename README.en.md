# React-Dialogic

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license">
</p>

<p align="center">
  <a href="./README.md">Home</a> | 
  <a href="./README.zh-TW.md">繁體中文</a>
</p>

A dialogue system UI kit for React applications, providing game-style dialogue interfaces with rich conversation features and customizable themes.

## Purpose

React-Dialogic aims to provide an easy-to-integrate and feature-rich dialogue system for:

- Visual novels and interactive games
- Tutorials and user onboarding flows
- Interactive storytelling
- Character-driven user interfaces
- Any application requiring dialogue boxes and character interactions

## Key Features

### 1. Fullscreen Display System
- Components automatically fill the entire window/container on initialization
- Provides an immersive experience with background filling the entire view
- Responsive design adapting to different screen sizes and devices

### 2. Character Configuration System
- Support for character information settings (ID, name, images, sounds, etc.)
- Multiple emotion/state image management
- Custom character text color and display speed
- Character positioning control (left/right side)

### 3. Dialogue Box System
- Bottom-anchored text display area
- Typewriter effect for character-by-character text display
- Adjustable text display speed
- Support for text effects and pauses

### 4. Choice System
- Support for dialogue option branches
- Choice results affecting subsequent dialogue flow
- Custom option styling and effects
- Conditional option display

### 5. Theme System
- Multiple preset theme styles
- Support for custom theme configuration
- Runtime dynamic theme switching
- Unified adjustment of overall color schemes and styles

### 6. Background Management
- Custom background images or colors
- Background transition effects
- Transparent background option for different contexts

### 7. Event Hook System
- `onMessageStart` - Triggered when a dialogue node begins
- `onMessage` - Triggered when a dialogue node ends
- `onMessageEnd` - Triggered when the dialogue flow ends (when no next property is present)
- Custom event handling and game logic integration

## Installation

```bash
npm install react-dialogic
# or
yarn add react-dialogic
```

## Basic Usage

```jsx
import { DialogSystem, DialogProvider } from 'react-dialogic';
import 'react-dialogic/dist/styles.css';

// Character configuration
const characters = {
  mei: {
    name: 'Mei',
    images: {
      default: '/images/mei-default.png',
      happy: '/images/mei-happy.png',
      sad: '/images/mei-sad.png'
    },
    textColor: '#e63946'
  },
  kai: {
    name: 'Kai',
    images: {
      default: '/images/kai-default.png',
      surprised: '/images/kai-surprised.png'
    },
    textColor: '#457b9d'
  }
};

// Dialogue script
const dialogue = {
  start: {
    text: 'What a beautiful day today!',
    character: 'mei',
    emotion: 'happy',
    position: 'left',
    background: '/images/park-morning.jpg',
    next: 'response1'
  },
  response1: {
    text: 'Yes, shall we go to the park for a walk?',
    character: 'kai',
    position: 'right',
    next: 'choice1'
  },
  choice1: {
    text: 'What would you like to do?',
    character: 'mei',
    emotion: 'default',
    choices: [
      { text: 'Have a picnic in the park', next: 'picnic' },
      { text: 'Go see a movie', next: 'movie' }
    ]
  },
  picnic: {
    text: 'A picnic is a great idea! Let\'s prepare.',
    character: 'kai',
    emotion: 'happy',
    background: '/images/park-picnic.jpg',
    next: 'picnic_continue'
  },
  movie: {
    text: 'A movie sounds good too, there are many new releases.',
    character: 'kai',
    background: '/images/cinema.jpg',
    next: 'movie_continue'
  },
  movie_continue: {
    text: 'Then it\'s decided!',
    character: 'mei',
    emotion: 'happy',
    // No next property, dialogue will end
  }
};

function App() {
  // Event handlers
  const handleMessageStart = (dialogueNode) => {
    console.log('Dialogue start:', dialogueNode);
    // Can trigger sound effects, animations, or update game state
  };
  
  const handleMessage = (dialogueNode) => {
    console.log('Dialogue in progress:', dialogueNode);
    // Can record player choices, update variables, etc.
  };
  
  const handleMessageEnd = (dialogueNode) => {
    console.log('Dialogue end:', dialogueNode);
    // Can return to main game flow or trigger subsequent events
  };

  return (
    <DialogProvider theme="gameClassic">
      <DialogSystem 
        characters={characters}
        dialogue={dialogue}
        startNode="start"
        onMessageStart={handleMessageStart}
        onMessage={handleMessage}
        onMessageEnd={handleMessageEnd}
      />
    </DialogProvider>
  );
}
```

## More Features

- Character entry/exit animations
- Dialogue box appearance/disappearance effects
- Background transition effects
- Sound effects and voice support
- Custom event hooks
- Keyboard and touch controls
- Accessibility support

## Technical Requirements

- React 16.8+
- Tailwind CSS
- Optional: Three.js (for advanced animation effects)
- Optional: Anime.js (for advanced animation effects)

## License

MIT 