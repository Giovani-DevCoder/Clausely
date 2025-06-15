import React from 'react';
import Header from '../components/Header';
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";

const Home = () => {
  const { isDark } = useTheme();
  const { t, isRTL } = useLanguage();
  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "bg-gray-50"}`}
    dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <h1>Home</h1>
    </div>
  )
};

export default Home;