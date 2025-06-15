import { ExternalLink } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const CitationsReferences = () => {
  const { isDark } = useTheme()

  const citations = [
    {
      title: "GDPR Article 6",
      description: "Lawfulness of processing - establishes legal basis for processing personal data",
      type: "Primary Source",
      typeColor: "bg-blue-100 text-blue-800",
      typeColorDark: "bg-blue-900/20 text-blue-400",
    },
    {
      title: "Recital 47",
      description: "Legitimate interests - provides guidance on legitimate interests assessment",
      type: "Supporting",
      typeColor: "bg-green-100 text-green-800",
      typeColorDark: "bg-green-900/20 text-green-400",
    },
  ]

  const relatedLaws = [
    {
      name: "CCPA",
      description: "California Consumer Privacy Act",
    },
    {
      name: "PIPEDA",
      description: "Personal Information Protection Act",
    },
    {
      name: "DPGP Act",
      description: "Digital Personal Data Protection Act",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Citations & References */}
      <div
        className={`rounded-lg border transition-colors duration-200 ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Citations & References</h3>
        </div>

        <div className="p-4 space-y-4">
          {citations.map((citation, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <h4 className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>{citation.title}</h4>
                <ExternalLink className={`w-4 h-4 ${isDark ? "text-slate-400" : "text-slate-500"}`} />
              </div>
              <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{citation.description}</p>
              <span
                className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                  isDark ? citation.typeColorDark : citation.typeColor
                }`}
              >
                {citation.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Laws */}
      <div
        className={`rounded-lg border transition-colors duration-200 ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Related Laws</h3>
        </div>

        <div className="p-4 space-y-3">
          {relatedLaws.map((law, index) => (
            <div key={index} className="flex items-start justify-between">
              <div>
                <h4 className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>{law.name}</h4>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{law.description}</p>
              </div>
              <ExternalLink className={`w-4 h-4 ${isDark ? "text-slate-400" : "text-slate-500"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CitationsReferences
