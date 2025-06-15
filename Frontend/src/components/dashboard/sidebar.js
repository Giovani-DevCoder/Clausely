import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  FolderOpen,
  MapPin,
  FileText,
  Database,
  Bot,
  Brain,
  Settings,
  BookOpen,
  Wrench,
} from "lucide-react"
import { useTheme } from "../../context/theme-context"
import { useLanguage } from "../../context/language-context"

const Sidebar = () => {
  const { isDark } = useTheme()
  const { t } = useLanguage()
  const location = useLocation()

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", active: true },
    { icon: FolderOpen, label: "Projects", path: "/projects" },
    { icon: MapPin, label: "Region Selector", path: "/regions" },
    { icon: FileText, label: "Legal Briefs", path: "/legal-briefs" },
    { icon: Database, label: "Dataset Explorer", path: "/dataset-explorer" },
    { icon: Bot, label: "Agent Console", path: "/agent-console" },
    { icon: Brain, label: "Model Evaluation", path: "/model-evaluation" },
    { icon: Wrench, label: "Model & API Configuration", path: "/model-configuration" },
    { icon: BookOpen, label: "TechDocs", path: "/techdocs" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ]

  return (
    <div
      className={`w-64 h-screen border-r transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            const isActive =
              location.pathname === item.path || (item.path === "/dashboard" && location.pathname === "/")

            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : isDark
                      ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar