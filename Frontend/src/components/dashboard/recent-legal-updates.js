import { AlertTriangle, Clock, CheckCircle } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const RecentLegalUpdates = () => {
  const { isDark } = useTheme()

  const updates = [
    {
      title: "EU AI Act Amendment",
      description: "New provisions for high-risk AI systems require additional documentation",
      priority: "High Priority",
      priorityColor: "text-red-500 bg-red-50",
      priorityColorDark: "text-red-400 bg-red-900/20",
      time: "2 days ago",
      icon: AlertTriangle,
    },
    {
      title: "CCPA Regulation Update",
      description: "California updates consent requirements for third-party data sharing",
      priority: "Medium Priority",
      priorityColor: "text-orange-500 bg-orange-50",
      priorityColorDark: "text-orange-400 bg-orange-900/20",
      time: "1 week ago",
      icon: Clock,
    },
    {
      title: "PIPEDA Guidelines",
      description: "Updated guidance on cross-border data transfers published",
      priority: "Low Priority",
      priorityColor: "text-green-500 bg-green-50",
      priorityColorDark: "text-green-400 bg-green-900/20",
      time: "2 weeks ago",
      icon: CheckCircle,
    },
  ]

  return (
    <div
      className={`p-6 rounded-lg border transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Recent Legal Updates</h3>
        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">View All</button>
      </div>

      <div className="space-y-4">
        {updates.map((update, index) => {
          const Icon = update.icon
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>{update.title}</h4>
                  <p className={`text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{update.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        isDark ? update.priorityColorDark : update.priorityColor
                      }`}
                    >
                      {update.priority}
                    </span>
                    <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>{update.time}</span>
                  </div>
                </div>
              </div>
              {index < updates.length - 1 && (
                <div className={`border-b ${isDark ? "border-slate-700" : "border-slate-100"}`}></div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentLegalUpdates
