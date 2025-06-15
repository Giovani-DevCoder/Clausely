import { Plus } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const DatasetCoverage = () => {
  const { isDark } = useTheme()

  return (
    <div
      className={`p-6 rounded-lg border transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Dataset Coverage</h3>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>Used Datasets</span>
          <span className="text-lg font-semibold text-blue-500">12</span>
        </div>

        <div className="flex justify-between items-center">
          <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>Missing Datasets</span>
          <span className="text-lg font-semibold text-orange-500">4</span>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>75% Coverage</span>
          </div>
          <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? "bg-slate-700" : "bg-gray-200"}`}>
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>

        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Datasource</span>
        </button>
      </div>
    </div>
  )
}

export default DatasetCoverage