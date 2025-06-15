'use client';

import React, { useState } from 'react';
import { Shield, EyeOff, Lock, Chrome, Github, Mail, Eye, LogIn } from 'lucide-react';

const LoginSignupCard: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 text-center rounded-t-lg ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`flex-1 py-2 text-center rounded-t-lg ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      <form className="space-y-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {isLogin && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 rounded-md bg-blue-500 text-white flex items-center justify-center space-x-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <LogIn size={18} />
          <span>{isLogin ? 'Login Securely' : 'Sign Up Securely'}</span>
        </button>
      </form>

      <div className="text-center text-gray-500 dark:text-gray-400 my-4">Or continue with</div>

      <div className="flex justify-center space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/><path d="M15.5 8.5L12 12m0 0L8.5 15.5M12 12l3.5 3.5M12 12L8.5 8.5"/></svg>
          <span>Google</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Github size={18} />
          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default LoginSignupCard;