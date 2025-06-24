'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ThemeContextType {
  menuBgColor: string;
  menuBgOpacity: string;
  textColor: string;
  setMenuStyle: (bgColor: string, opacity: string, textColor: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [menuBgColor, setMenuBgColor] = useState('#3a2c2c');
  const [menuBgOpacity, setMenuBgOpacity] = useState('60');
  const [textColor, setTextColor] = useState('white');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.includes('/about')) {
      setMenuBgColor('#FFEEE2');
      setMenuBgOpacity('95');
      setTextColor('#15171B');
    } else {
      setMenuBgColor('#3a2c2c');
      setMenuBgOpacity('60');
      setTextColor('white');
    }
  }, [pathname]);

  const setMenuStyle = (bgColor: string, opacity: string, color: string) => {
    setMenuBgColor(bgColor);
    setMenuBgOpacity(opacity);
    setTextColor(color);
  };  

  return (
    <ThemeContext.Provider value={{ menuBgColor, menuBgOpacity, textColor, setMenuStyle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 