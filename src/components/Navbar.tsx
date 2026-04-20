"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="fixed top-0 start-0 z-20 w-full border-b border-[var(--border-soft)] bg-[var(--card-background)]/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="min-w-[40px]">
          {!isHomePage && (
            <Link href="/" className="flex items-center space-x-3">
              <span className="font-heading self-center text-[2rem] leading-none text-[var(--foreground)] sm:text-[2.2rem]">
                Евгения Харисова
              </span>
            </Link>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-sm font-medium tracking-[0.02em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="text-sm font-medium tracking-[0.02em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link 
                href="/for-whom" 
                className="text-sm font-medium tracking-[0.02em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                Для клиентов
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-sm font-medium tracking-[0.02em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                Контакты
              </Link>
            </li>
          </ul>

          <ThemeToggle />
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] text-sm text-[var(--foreground)] transition hover:bg-[var(--secondary)] md:hidden focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            aria-label="Открыть меню"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:hidden mt-4`}>
          <ul className="soft-panel flex flex-col rounded-[28px] p-4">
            <li>
              <Link 
                href="/" 
                className="block rounded-2xl px-4 py-3 text-[var(--foreground)] hover:bg-[var(--secondary)]"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="block rounded-2xl px-4 py-3 text-[var(--foreground)] hover:bg-[var(--secondary)]"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link 
                href="/for-whom" 
                className="block rounded-2xl px-4 py-3 text-[var(--foreground)] hover:bg-[var(--secondary)]"
                onClick={() => setIsOpen(false)}
              >
                Для клиентов
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block rounded-2xl px-4 py-3 text-[var(--foreground)] hover:bg-[var(--secondary)]"
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
