import { Search, Grid, List, Download, ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../../context/theme-context"

const ProjectFilters = ({ viewMode, setViewMode }) => {
  const { isDark } = useTheme()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All Status")
  const [regionFilter, setRegionFilter] = useState("All Regions")
  const [sortBy, setSortBy] = useState("Last Modified")

  return (
    <div
      className={`p-6 rounded-lg border mb-6 transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Filters & Controls</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Search Projects
          </label>
          <div className="relative">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                isDark
                  ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
              }`}
            />
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Status
          </label>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
                isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              <option>All Status</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Archived</option>
            </select>
            <ChevronDown
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            />
          </div>
        </div>

        {/* Region Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Region
          </label>
          <div className="relative">
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
                isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              <option>All Regions</option>
              <option>Europe</option>
              <option>North America</option>
              <option>Asia</option>
              <option>Africa</option>
            </select>
            <ChevronDown
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            />
          </div>
        </div>

        {/* Sort By */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Sort By
          </label>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
                isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              <option>Last Modified</option>
              <option>Name</option>
              <option>Status</option>
              <option>Owner</option>
            </select>
            <ChevronDown
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            />
          </div>
        </div>

        {/* View Controls */}
        <div className="flex items-end space-x-2">
          <div className="flex rounded-lg border overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-500 text-white"
                  : isDark
                    ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === "table"
                  ? "bg-blue-500 text-white"
                  : isDark
                    ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* View Mode Labels */}
      <div className="flex justify-end mt-4 space-x-4 text-sm">
        <span
          className={`${
            viewMode === "grid" ? "text-blue-500 font-medium" : isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Grid View
        </span>
        <span
          className={`${
            viewMode === "table" ? "text-blue-500 font-medium" : isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Table View
        </span>
      </div>
    </div>
  )
}

export default ProjectFilters