import { BarChart3 } from "lucide-react"
import { useTheme } from "../../context/theme-context"
import DashboardStats from "./dashboard-stats"

const JurisdictionCoverage = () => {
  const { isDark } = useTheme()

  return (
    <div
      className={`p-6 rounded-lg border transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
          Global Jurisdiction Coverage
        </h3>
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className={isDark ? "text-slate-300" : "text-slate-600"}>Covered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded ${isDark ? "bg-slate-600" : "bg-slate-300"}`}></div>
            <span className={isDark ? "text-slate-300" : "text-slate-600"}>Not Covered</span>
          </div>
        </div>
      </div>

      {/* Placeholder for chart */}
      <div
        className={`h-32 rounded-lg flex items-center justify-center mb-4 ${isDark ? "bg-slate-700/50" : "bg-slate-50"}`}
      >
        <div className={`text-center ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          <BarChart3 className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">Backend maps analytics integration to be implemented</p>
        </div>
      </div>

      <DashboardStats />
    </div>
  )
}

export default JurisdictionCoverage