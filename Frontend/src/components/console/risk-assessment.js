import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const RiskAssessment = () => {
  const { isDark } = useTheme()

  const riskItems = [
    {
      label: "Data Processing",
      description: "May require valid GDPR basis",
      status: "warning",
      icon: AlertTriangle,
      color: "text-yellow-500",
    },
    {
      label: "Consent Management",
      description: "Review needed for marketing and newsletter processes",
      status: "success",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      label: "Data Retention",
      description: "Non-compliant with storage retention periods exceed legal",
      status: "error",
      icon: AlertCircle,
      color: "text-red-500",
    },
  ]

  return (
    <div
      className={`rounded-lg border transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Risk Assessment</h3>
      </div>

      <div className="p-4">
        {/* Compliance Score */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Compliance Score
            </span>
          </div>
          <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? "bg-slate-700" : "bg-gray-200"}`}>
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
          </div>
        </div>

        {/* Risk Items */}
        <div className="space-y-4">
          {riskItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-start space-x-3">
                <Icon className={`w-4 h-4 mt-1 ${item.color}`} />
                <div className="flex-1">
                  <div className={`font-medium text-sm ${isDark ? "text-white" : "text-slate-900"}`}>{item.label}</div>
                  <div className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {item.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RiskAssessment
