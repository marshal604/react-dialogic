import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Theme } from '../types';
import { getTheme } from '../themes';

interface ThemeContextType {
  theme: Theme;
  themeName: string;
  setTheme: (name: string) => void;
}

const defaultContext: ThemeContextType = {
  theme: getTheme('gameClassic'),
  themeName: 'gameClassic',
  setTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

/**
 * 主題上下文提供者
 */
export const ThemeProvider: React.FC<{
  children: ReactNode;
  theme?: string;
}> = ({ children, theme = 'gameClassic' }) => {
  const [themeName, setThemeName] = useState<string>(theme);
  const [themeData, setThemeData] = useState<Theme>(getTheme(theme));

  const changeTheme = (name: string) => {
    setThemeName(name);
    setThemeData(getTheme(name));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeData,
        themeName,
        setTheme: changeTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * 使用主題的Hook
 */
export const useTheme = () => useContext(ThemeContext); 