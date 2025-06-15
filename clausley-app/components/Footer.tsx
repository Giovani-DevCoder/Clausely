'use client';
import React from 'react'
import { useTheme } from '../context/theme-context'

const Footer = () => {
  const { isDark } = useTheme()

  return (
    <footer
      className={`w-full px-6 py-4 border-t transition-colors duration-200 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className='container mx-auto text-center'>
        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          © {new Date().getFullYear()} Clausely. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer