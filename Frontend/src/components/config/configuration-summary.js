import { Save, Play } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const ConfigurationSummary = ({ config }) => {
  const { isDark } = useTheme()

  const summaryItems = [
    { label: "Provider", value: "LX Pilot AI" },
    { label: "Model", value: "GPT-4" },
    { label: "Dataset", value: "GDPR Compliance" },
    { label: "Language", value: "Python" },
    { label: "Status", value: "Ready", status: true },
  ]

  return (
    <div
      className={`rounded-lg border transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Configuration Summary</h3>
      </div>

      <div className="p-4 space-y-3">
        {summaryItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{item.label}:</span>
            <span
              className={`text-sm font-medium ${
                item.status ? "text-green-500" : isDark ? "text-slate-300" : "text-slate-900"
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Config</span>
        </button>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
          <Play className="w-4 h-4" />
          <span>Run Test</span>
        </button>
      </div>
    </div>
  )
}

export default ConfigurationSummary
