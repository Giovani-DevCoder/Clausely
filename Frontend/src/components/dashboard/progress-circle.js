"use client"

import { useTheme } from "../../context/theme-context"

const ProgressCircle = ({ percentage = 68 }) => {
  const { isDark } = useTheme()
  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-32 h-32">
      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke={isDark ? "#374151" : "#e5e7eb"} strokeWidth="8" fill="transparent" />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#3b82f6"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{percentage}%</span>
      </div>
    </div>
  )
}

export default ProgressCircle
