'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { menuBgColor, textColor } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (!isMenuOpen) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setScrolled(true);
      setIsAnimating(true);
    } else {
      document.body.style.overflow = 'unset';
      setScrolled(window.scrollY > 0);
      setTimeout(() => setIsAnimating(false), 500); 
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav 
        className="fixed w-full top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled || isMenuOpen ? `${menuBgColor}80` : 'transparent',
          backdropFilter: scrolled || isMenuOpen ? 'blur(6px)' : 'none'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 h-[72px]">
          <div className="flex items-center justify-between h-full">
            <Link href="/" style={{ color: textColor }} className="text-3xl font-serif tracking-[0.1em] font-light z-50">
              <Image 
                src={pathname === '/about' ? "/icons/logo1.svg" : "/icons/AmorLogo.svg"} 
                alt="Amor Logo" 
                width={120} 
                height={40} 
                className="object-contain"
                priority
              />
            </Link>

            <div className="hidden md:flex flex-row gap-16">
              <Link 
                href="/" 
                style={{ color: textColor }} 
                className={`tracking-[0.1em] text-sm hover:opacity-70 transition-all duration-300 ${isActive('/') ? 'font-medium' : 'font-light'}`}
              >
                TRANG CHỦ
              </Link>
              <Link 
                href="/about" 
                style={{ color: textColor }} 
                className={`tracking-[0.1em] text-sm hover:opacity-70 transition-all duration-300 ${isActive('/about') ? 'font-medium' : 'font-light'}`}
              >
                VỀ AMOR
              </Link>
              <Link 
                href="/menu" 
                style={{ color: textColor }} 
                className={`tracking-[0.1em] text-sm hover:opacity-70 transition-all duration-300 ${isActive('/menu') ? 'font-medium' : 'font-light'}`}
              >
                MENU
              </Link>
              <Link 
                href="/startup" 
                style={{ color: textColor }} 
                className={`tracking-[0.1em] text-sm hover:opacity-70 transition-all duration-300 ${isActive('/startup') ? 'font-medium' : 'font-light'}`}
              >
                KHỞI NGHIỆP
              </Link>
            </div>

            <button 
              onClick={toggleMenu}
              style={{ color: textColor }}
              className="md:hidden p-2 z-50"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6 transition-transform duration-500" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{
                  transform: isMenuOpen ? 'rotate(180deg)' : 'none'
                }}
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <div className="hidden md:block w-[120px]"></div>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen || isAnimating ? 'visible' : 'invisible'
        }`}
        style={{
          zIndex: 40,
        }}
      >
        <div 
          className={`absolute inset-0 backdrop-blur-[12px] transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundColor: `${menuBgColor}95`,
          }}
        />

        <div className="relative z-10 h-full">
          <div className={`flex flex-col items-center justify-center h-full space-y-8 transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-10 opacity-0'
          }`}>
            <Link 
              href="/" 
              style={{ color: textColor }}
              className={`tracking-[0.2em] text-xl hover:opacity-70 transition-all duration-300 transform hover:scale-105 ${isActive('/') ? 'font-medium' : 'font-light'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              TRANG CHỦ
            </Link>
            <Link 
              href="/about" 
              style={{ color: textColor }}
              className={`tracking-[0.2em] text-xl hover:opacity-70 transition-all duration-300 transform hover:scale-105 ${isActive('/about') ? 'font-medium' : 'font-light'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              VỀ AMOR
            </Link>
            <Link 
              href="/menu" 
              style={{ color: textColor }}
              className={`tracking-[0.2em] text-xl hover:opacity-70 transition-all duration-300 transform hover:scale-105 ${isActive('/menu') ? 'font-medium' : 'font-light'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              MENU
            </Link>
            <Link 
              href="/startup" 
              style={{ color: textColor }}
              className={`tracking-[0.2em] text-xl hover:opacity-70 transition-all duration-300 transform hover:scale-105 ${isActive('/startup') ? 'font-medium' : 'font-light'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              KHỞI NGHIỆP
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 