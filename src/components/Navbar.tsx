"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--card-background)]/90 backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-[var(--primary)]/20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold text-[var(--foreground)]">
            Евгения Харисова
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link 
                href="/for-whom" 
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                Для клиентов
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                Контакты
              </Link>
            </li>
          </ul>

          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--primary)]/10"
            aria-label="Открыть меню"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:hidden mt-4`}>
          <ul className="flex flex-col p-4 font-medium border border-[var(--primary)]/20 rounded-lg bg-[var(--card-background)]">
            <li>
              <Link 
                href="/" 
                className="block py-2 px-3 text-[var(--foreground)] rounded hover:bg-[var(--primary)]/10"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="block py-2 px-3 text-[var(--foreground)] rounded hover:bg-[var(--primary)]/10"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link 
                href="/for-whom" 
                className="block py-2 px-3 text-[var(--foreground)] rounded hover:bg-[var(--primary)]/10"
                onClick={() => setIsOpen(false)}
              >
                Для клиентов
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block py-2 px-3 text-[var(--foreground)] rounded hover:bg-[var(--primary)]/10"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 