import { useTheme } from "../../context/theme-context"

const StatsSection = () => {
  const { isDark } = useTheme()

  const stats = [
    { value: "50+", label: "Jurisdictions Covered" },
    { value: "99.9%", label: "Compliance Accuracy" },
    { value: "10k+", label: "Developers Trust Us" },
    { value: "24/7", label: "Real-time Monitoring" },
  ]

  return (
    <div className={`py-16 rounded-2xl ${isDark ? "bg-slate-800/50" : "bg-slate-50"}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
              {stat.value}
            </div>
            <div className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection