import { Shield, Zap, Users } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const FeatureSection = () => {
  const { isDark } = useTheme()

  const features = [
    {
      icon: Shield,
      title: "Functional Jobs",
      items: [
        "Ensure code complies with GDPR, ADGM, etc.",
        "Get real-time, automated code compliance tips",
        "Cut dependency on legal advisors for every PR",
      ],
      color: "text-blue-500",
      bgColor: isDark ? "bg-blue-900/20" : "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Emotional Jobs",
      items: [
        "Feel confident that their code is legally safe",
        "Avoid legal anxiety and rework",
        "Be seen as competent & up-to-date devs",
      ],
      color: "text-green-500",
      bgColor: isDark ? "bg-green-900/20" : "bg-green-50",
    },
    {
      icon: Users,
      title: "Social Jobs",
      items: [
        "Show they're building responsibly & securely",
        "Win trust with users, regulators, and clients",
        "Demonstrate innovation in process compliance",
      ],
      color: "text-purple-500",
      bgColor: isDark ? "bg-purple-900/20" : "bg-purple-50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div key={index} className={`p-6 rounded-xl transition-colors duration-200 ${feature.bgColor}`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-white"}`}>
                <Icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{feature.title}</h3>
            </div>
            <ul className="space-y-3">
              {feature.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureSection
