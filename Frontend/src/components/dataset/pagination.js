import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange }) => {
  const { isDark } = useTheme()

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg transition-colors ${
          currentPage === 1
            ? isDark
              ? "text-slate-600 cursor-not-allowed"
              : "text-slate-400 cursor-not-allowed"
            : isDark
              ? "text-slate-300 hover:bg-slate-700"
              : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : isDark
                  ? "text-slate-300 hover:bg-slate-700"
                  : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg transition-colors ${
          currentPage === totalPages
            ? isDark
              ? "text-slate-600 cursor-not-allowed"
              : "text-slate-400 cursor-not-allowed"
            : isDark
              ? "text-slate-300 hover:bg-slate-700"
              : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Pagination
