import { MoreHorizontal, Edit, Download } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../../context/theme-context"

const ProjectCard = ({ project }) => {
  const { isDark } = useTheme()
  const [showActions, setShowActions] = useState(false)

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500 text-white"
      case "in progress":
        return "bg-yellow-500 text-white"
      case "archived":
        return "bg-gray-500 text-white"
      default:
        return "bg-blue-500 text-white"
    }
  }

  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case "gdpr":
        return "bg-green-100 text-green-800 border-green-200"
      case "ai act":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "hipaa":
        return "bg-red-100 text-red-800 border-red-200"
      case "financial":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "agri":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "privacy":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTagColorDark = (tag) => {
    switch (tag.toLowerCase()) {
      case "gdpr":
        return "bg-green-900/20 text-green-400 border-green-800"
      case "ai act":
        return "bg-blue-900/20 text-blue-400 border-blue-800"
      case "hipaa":
        return "bg-red-900/20 text-red-400 border-red-800"
      case "financial":
        return "bg-orange-900/20 text-orange-400 border-orange-800"
      case "agri":
        return "bg-emerald-900/20 text-emerald-400 border-emerald-800"
      case "privacy":
        return "bg-purple-900/20 text-purple-400 border-purple-800"
      default:
        return "bg-gray-900/20 text-gray-400 border-gray-800"
    }
  }

  return (
    <div
      className={`p-6 rounded-lg border transition-colors duration-200 hover:shadow-md ${
        isDark
          ? "bg-slate-800 border-slate-700 hover:border-slate-600"
          : "bg-white border-slate-200 hover:border-slate-300"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{project.name}</h3>
          <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Owner: {project.owner}</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowActions(!showActions)}
            className={`p-1 rounded hover:bg-slate-100 ${isDark ? "hover:bg-slate-700" : ""}`}
          >
            <MoreHorizontal className={`w-5 h-5 ${isDark ? "text-slate-400" : "text-slate-500"}`} />
          </button>
          {showActions && (
            <div
              className={`absolute right-0 mt-2 w-32 rounded-lg border shadow-lg z-10 ${
                isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
              }`}
            >
              <button
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left text-sm hover:bg-slate-50 ${
                  isDark ? "text-slate-300 hover:bg-slate-700" : "text-slate-700"
                }`}
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left text-sm hover:bg-slate-50 ${
                  isDark ? "text-slate-300 hover:bg-slate-700" : "text-slate-700"
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Last Updated */}
      <div className="mb-4">
        <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          Last Updated: <span className="font-medium">{project.lastUpdated}</span>
        </span>
      </div>

      {/* Jurisdictions */}
      <div className="mb-4">
        <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Jurisdictions:</span>
        <div className="flex items-center space-x-2 mt-1">
          {project.jurisdictions.map((jurisdiction, index) => (
            <div key={index} className="flex items-center space-x-1">
              <span className="text-lg">{jurisdiction.flag}</span>
              <span className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {jurisdiction.code}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-medium rounded border ${
                isDark ? getTagColorDark(tag) : getTagColor(tag)
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">Edit</button>
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">Export</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard