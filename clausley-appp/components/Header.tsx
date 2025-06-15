'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ChevronDown } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import SummaryApi from '../src/common';
import ROLE from '../src/common/role';
import { useTheme } from "../src/context/theme-context"
import { useLanguage } from "../src/context/language-context"
import { UserButton } from '@clerk/nextjs';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface User {
  [key: string]: any;
}

interface HeaderProps {
  isLandingPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLandingPage = false }) => {
  const { isDark, toggleTheme } = useTheme()
  const { currentLanguage, changeLanguage, languages } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((lang: Language) => lang.code === currentLanguage)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const user: User | null = useSelector((state: any) => state?.user?.user);
  console.log('user header', user);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Referencia para el menú

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include',
    });

    if (fetchData.ok) {
      window.location.reload();
    }
  };

  // Cierra el menú si haces clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuDisplay(false);
      }
    };

    if (menuDisplay) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuDisplay]);

  return (
    <header className={`w-full px-6 py-4 border-b transition-colors duration-200 ${isDark ? "bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
      
            <div className="flex items-center space-x-3">
              
                    <Link href={'/dashboard'} className="flex items-center space-x-2">
            <Image src="/clausly_logo_-_Copy-removebg-preview.png" alt="Clausely Logo" width={32} height={32} />
              <h1
                className={`text-xl font-bold text-white`}>
                Clausely
              </h1>
            </Link>
          {/* Removed search bar */}
        </div>
        <div className="flex items-center cursor-pointer gap-7">

          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-xl border transition-colors duration-200 ${
                isDark
                  ? "bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700"
                  : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span className="text-sm">{currentLang?.flag}</span>
              <span className="text-sm font-medium">{currentLang?.code.toUpperCase()}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Language Dropdown */}
            {isLanguageDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-xl border shadow-lg z-50 transition-colors duration-200 ${
                  isDark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"
                }`}
              >
                <div className="py-1">
                  {languages.map((language: Language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code)
                        setIsLanguageDropdownOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left transition-colors duration-200 ${
                        currentLanguage === language.code
                          ? isDark
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-700"
                          : isDark
                            ? "text-slate-200 hover:bg-slate-700"
                            : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{language.name}</span>
                        <span className="text-xs opacity-75">{language.code.toUpperCase()}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Removed New Project button */}
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </header>
  );
};

export default Header;