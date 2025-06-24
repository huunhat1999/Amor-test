'use client';

import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import AboutFounder from '../../components/sections/AboutFounder';
import AboutValues from '../../components/sections/AboutValues';
import AboutVision from '../../components/sections/AboutVision';
import AboutQuote from '../../components/sections/AboutQuote';

export default function AboutPage() {
  const { setMenuStyle } = useTheme();

  useEffect(() => {
    setMenuStyle('#FFEEE2', '95', '#15171B');

    return () => {
      setMenuStyle('#3a2c2c', '60', 'white');
    };
  }, [setMenuStyle]);

  return (
    <main className="min-h-screen bg-[#FFEEE2]">
      <AboutFounder />
      <AboutValues />
 
    </main>
  );
} 