import { useState } from "react"
import { Plus } from "lucide-react"
import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"
import Header from "../components/Header"
import Sidebar from "../components/dashboard/sidebar"
import ProjectFilters from "../components/project/project-filters"
import ProjectCard from "../components/project/project-card"

const Projects = () => {
  const { isDark } = useTheme()
  const { t, isRTL } = useLanguage()
  const [viewMode, setViewMode] = useState("grid")

  // Sample project data
  const projects = [
    {
      id: 1,
      name: "Clausely Compliance Engine",
      owner: "Clausely",
      lastUpdated: "2 days ago",
      jurisdictions: [
        { code: "EU", flag: "🇪🇺" },
        { code: "USA", flag: "🇺🇸" },
      ],
      tags: ["GDPR", "AI Act"],
      status: "In Progress",
    },
    {
      id: 2,
      name: "FinGuard AI",
      owner: "NovelTech",
      lastUpdated: "5 days ago",
      jurisdictions: [{ code: "India", flag: "🇮🇳" }],
      tags: ["GDPR", "Financial"],
      status: "Completed",
    },
    {
      id: 3,
      name: "MedComply",
      owner: "Biobridge Labs",
      lastUpdated: "1 day ago",
      jurisdictions: [
        { code: "USA", flag: "🇺🇸" },
        { code: "Canada", flag: "🇨🇦" },
      ],
      tags: ["HIPAA", "AI Act"],
      status: "In Progress",
    },
    {
      id: 4,
      name: "AgroComply Dashboard",
      owner: "GreenRoot AI",
      lastUpdated: "10 days ago",
      jurisdictions: [{ code: "Africa", flag: "🌍" }],
      tags: ["Agri", "Privacy"],
      status: "Archived",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${isDark ? "bg-slate-900" : "bg-gray-50"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>Projects</h1>
              <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Manage all your compliance projects and track their progress
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>New Project</span>
            </button>
          </div>

          {/* Filters */}
          <ProjectFilters viewMode={viewMode} setViewMode={setViewMode} />

          {/* Projects Grid */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            /* Table View Placeholder */
            <div
              className={`p-8 rounded-lg border text-center ${
                isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
              }`}
            >
              <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Table view implementation coming soon...
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Projects