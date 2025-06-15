'use client'

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Shield } from "lucide-react"
import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"

const LoginForm = ({ data, handleOnChange, handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false)
  const { isDark } = useTheme()
  const { t, isRTL } = useLanguage()

  return (
    <div
      className={`w-full lg:w-1/3 flex items-center justify-center transition-colors duration-200 ${
        isDark ? "bg-transparent" : "bg-gray-50"
      }`}>
      <div
        className={`w-full max-w-xl p-10 shadow-lg rounded-xl transition-colors duration-200 ${
          isDark ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" : "bg-white"
        }`}>
        <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span
            className={`text-2xl font-bold transition-colors duration-200 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
            Clausely
          </span>
        </div>

        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6 mb-6">
            <button className="px-20 py-2 bg-[#5985ff] text-white rounded-lg font-medium">{t("login")}</button>
            <Link
              href="/signup"
              className={`px-20 py-2 rounded-lg font-medium transition-colors duration-200 ${
                isDark
                  ? "text-slate-300 bg-slate-700 hover:text-white"
                  : "text-slate-600 bg-slate-100 hover:text-slate-900"
              }`}>
              {t("signUp")}
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              required
              className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                isDark
                  ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500"
                  : "bg-gray-100 border-gray-300 text-slate-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              }`}
              placeholder={t("emailPlaceholder")}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              {t("password")}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={data.password}
                onChange={handleOnChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isDark
                    ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500"
                    : "bg-gray-100 border-gray-300 text-slate-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute inset-y-0 ${isRTL ? "left-0 ml-3" : "right-0 mr-3"} flex items-center text-sm leading-5`}>
                {showPassword ? (
                  <EyeOff className={`h-5 w-5 ${isDark ? "text-slate-400" : "text-gray-500"}`} />
                ) : (
                  <Eye className={`h-5 w-5 ${isDark ? "text-slate-400" : "text-gray-500"}`} />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={data.rememberMe}
                onChange={handleOnChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className={`ml-2 block text-sm ${isDark ? "text-slate-300" : "text-slate-900"}`}>
                {t("rememberMe")}
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className={`font-medium transition-colors duration-200 ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"}`}>
                {t("forgotPassword")}
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#5985ff] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {t("login")}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className={`px-2 transition-colors duration-200 ${isDark ? "bg-slate-900 text-slate-400" : "bg-white text-gray-500"}`}>
                {t("orContinueWith")}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span>Google</span>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm