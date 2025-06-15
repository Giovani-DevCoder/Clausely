import { useTheme } from "../../context/theme-context"

const DashboardStats = () => {
  const { isDark } = useTheme()

  const stats = [
    { value: 4, label: "Covered", color: "text-blue-500" },
    { value: 12, label: "Partial", color: "text-orange-500" },
    { value: 23, label: "Not Covered", color: "text-slate-400" },
  ]

  return (
    <div className="flex justify-center space-x-12 mt-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default DashboardStats