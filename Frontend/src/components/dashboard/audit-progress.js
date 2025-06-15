import { CheckCircle, AlertTriangle, Clock } from "lucide-react"
import { useTheme } from "../../context/theme-context"
import ProgressCircle from "./progress-circle"

const AuditProgress = () => {
  const { isDark } = useTheme()

  const auditItems = [
    { icon: CheckCircle, label: "GDPR Compliance Review", status: "complete", color: "text-green-500" },
    { icon: CheckCircle, label: "Data Mapping Complete", status: "complete", color: "text-green-500" },
    { icon: AlertTriangle, label: "Privacy Policy Update", status: "warning", color: "text-orange-500" },
    { icon: Clock, label: "CCPA Assessment", status: "pending", color: "text-slate-400" },
  ]

  return (
    <div
      className={`p-6 rounded-lg border transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Audit Progress</h3>

      <div className="flex items-center justify-between">
        <div className="space-y-3">
          {auditItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center space-x-3">
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{item.label}</span>
              </div>
            )
          })}
        </div>

        <ProgressCircle percentage={68} />
      </div>
    </div>
  )
}

export default AuditProgress
