import { Search, ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../../context/theme-context"

const DatasetFilters = ({ onFiltersChange }) => {
  const { isDark } = useTheme()
  const [searchTerm, setSearchTerm] = useState("")
  const [datasetType, setDatasetType] = useState("Dataset Type")
  const [domain, setDomain] = useState("Domain")
  const [region, setRegion] = useState("Region")
  const [activeFilters, setActiveFilters] = useState(["GDPR", "HIPAA", "AI Act", "CCPA"])
  const [activeLicenses, setActiveLicenses] = useState(["License", "Open Source", "Proprietary"])

  const filterOptions = {
    datasetType: ["All Types", "Compliance", "Case Studies", "Guidelines", "Implementation"],
    domain: ["All Domains", "Privacy", "Healthcare", "Finance", "AI Ethics", "General"],
    region: ["All Regions", "EU", "US", "California", "Global", "UK"],
  }

  const availableFilters = ["GDPR", "HIPAA", "AI Act", "CCPA", "Privacy", "Healthcare", "Finance"]
  const availableLicenses = ["License", "Open Source", "Proprietary", "CC-BY", "MIT", "GPL"]

  const toggleFilter = (filter, type = "filter") => {
    if (type === "filter") {
      setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
    } else {
      setActiveLicenses((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
    }
  }

  return (
    <div
      className={`p-6 rounded-lg border mb-6 transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      {/* Search and Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Search */}
        <div className="relative">
          <Search
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          />
          <input
            type="text"
            placeholder="Search datasets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
              isDark
                ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
            }`}
          />
        </div>

        {/* Dataset Type */}
        <div className="relative">
          <select
            value={datasetType}
            onChange={(e) => setDatasetType(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
              isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
            }`}
          >
            {filterOptions.datasetType.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          />
        </div>

        {/* Domain */}
        <div className="relative">
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
              isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
            }`}
          >
            {filterOptions.domain.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          />
        </div>

        {/* Region */}
        <div className="relative">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
              isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
            }`}
          >
            {filterOptions.region.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          />
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Category Filters */}
        {availableFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
              activeFilters.includes(filter)
                ? "bg-blue-500 text-white"
                : isDark
                  ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {filter}
          </button>
        ))}

        {/* License Filters */}
        {availableLicenses.map((license) => (
          <button
            key={license}
            onClick={() => toggleFilter(license, "license")}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
              activeLicenses.includes(license)
                ? license === "Open Source"
                  ? "bg-green-500 text-white"
                  : license === "Proprietary"
                    ? "bg-red-500 text-white"
                    : "bg-gray-500 text-white"
                : isDark
                  ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {license}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DatasetFilters