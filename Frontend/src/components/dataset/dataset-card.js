import { Eye, Plus, ExternalLink } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const DatasetCard = ({ dataset }) => {
  const { isDark } = useTheme()

  const getLicenseColor = (license) => {
    switch (license) {
      case "CC-BY":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "MIT":
        return "bg-green-100 text-green-800 border-green-200"
      case "GPL":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Proprietary":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getLicenseColorDark = (license) => {
    switch (license) {
      case "CC-BY":
        return "bg-blue-900/20 text-blue-400 border-blue-800"
      case "MIT":
        return "bg-green-900/20 text-green-400 border-green-800"
      case "GPL":
        return "bg-purple-900/20 text-purple-400 border-purple-800"
      case "Proprietary":
        return "bg-red-900/20 text-red-400 border-red-800"
      default:
        return "bg-gray-900/20 text-gray-400 border-gray-800"
    }
  }

  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case "privacy":
        return "bg-blue-100 text-blue-800"
      case "eu":
        return "bg-indigo-100 text-indigo-800"
      case "statutory":
        return "bg-gray-100 text-gray-800"
      case "ai act":
        return "bg-purple-100 text-purple-800"
      case "us":
        return "bg-red-100 text-red-800"
      case "case law":
        return "bg-yellow-100 text-yellow-800"
      case "healthcare":
        return "bg-green-100 text-green-800"
      case "annotated":
        return "bg-orange-100 text-orange-800"
      case "finance":
        return "bg-emerald-100 text-emerald-800"
      case "global":
        return "bg-cyan-100 text-cyan-800"
      case "california":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTagColorDark = (tag) => {
    switch (tag.toLowerCase()) {
      case "privacy":
        return "bg-blue-900/20 text-blue-400"
      case "eu":
        return "bg-indigo-900/20 text-indigo-400"
      case "statutory":
        return "bg-gray-900/20 text-gray-400"
      case "ai act":
        return "bg-purple-900/20 text-purple-400"
      case "us":
        return "bg-red-900/20 text-red-400"
      case "case law":
        return "bg-yellow-900/20 text-yellow-400"
      case "healthcare":
        return "bg-green-900/20 text-green-400"
      case "annotated":
        return "bg-orange-900/20 text-orange-400"
      case "finance":
        return "bg-emerald-900/20 text-emerald-400"
      case "global":
        return "bg-cyan-900/20 text-cyan-400"
      case "california":
        return "bg-amber-900/20 text-amber-400"
      default:
        return "bg-gray-900/20 text-gray-400"
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
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{dataset.title}</h3>
          <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{dataset.source}</p>
        </div>
        <span
          className={`px-2 py-1 text-xs font-medium rounded border ${
            isDark ? getLicenseColorDark(dataset.license) : getLicenseColor(dataset.license)
          }`}
        >
          {dataset.license}
        </span>
      </div>

      {/* Metadata */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Size:</span>
          <span className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-900"}`}>{dataset.size}</span>
        </div>
        <div className="flex justify-between">
          <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Language:</span>
          <span className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-900"}`}>
            {dataset.language}
          </span>
        </div>
        <div className="flex justify-between">
          <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Updated:</span>
          <span className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-900"}`}>
            {dataset.updated}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {dataset.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 py-1 text-xs font-medium rounded ${isDark ? getTagColorDark(tag) : getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <button
          className={`flex items-center space-x-2 px-3 py-2 border rounded-lg text-sm font-medium transition-colors ${
            isDark
              ? "border-slate-600 text-slate-300 hover:bg-slate-700"
              : "border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Preview</span>
        </button>
        <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
        <button
          className={`p-2 border rounded-lg transition-colors ${
            isDark
              ? "border-slate-600 text-slate-400 hover:bg-slate-700"
              : "border-slate-300 text-slate-500 hover:bg-slate-50"
          }`}
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default DatasetCard
