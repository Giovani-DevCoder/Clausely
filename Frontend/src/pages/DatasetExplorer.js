import { useState } from "react"
import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"
import Header from "../components/Header"
import Sidebar from "../components/dashboard/sidebar"
import DatasetFilters from "../components/dataset/dataset-filters"
import DatasetCard from "../components/dataset/dataset-card"
import Pagination from "../components/dataset/pagination"

const DatasetExplorer = () => {
  const { isDark } = useTheme()
  const { t, isRTL } = useLanguage()
  const [currentPage, setCurrentPage] = useState(1)

  // Sample dataset data
  const datasets = [
    {
      id: 1,
      title: "GDPR Compliance Dataset",
      source: "European Data Protection Board",
      license: "CC-BY",
      size: "45MB",
      language: "EN, FR, DE",
      updated: "Dec 2024",
      tags: ["Privacy", "EU", "Statutory"],
    },
    {
      id: 2,
      title: "AI Ethics Case Studies",
      source: "Stanford Legal Research",
      license: "MIT",
      size: "128MB",
      language: "EN",
      updated: "Nov 2024",
      tags: ["AI Act", "US", "Case Law"],
    },
    {
      id: 3,
      title: "HIPAA Compliance Guide",
      source: "Healthcare & Medical Services",
      license: "Proprietary",
      size: "89MB",
      language: "EN",
      updated: "Oct 2024",
      tags: ["Healthcare", "US", "Annotated"],
    },
    {
      id: 4,
      title: "Financial Privacy Laws",
      source: "Global Finance Institute",
      license: "GPL",
      size: "67MB",
      language: "EN, ES, FR",
      updated: "Sep 2024",
      tags: ["Finance", "Global", "Statutory"],
    },
    {
      id: 5,
      title: "CCPA Implementation",
      source: "California Attorney General",
      license: "CC-BY",
      size: "34MB",
      language: "EN, ES",
      updated: "Jan 2025",
      tags: ["Privacy", "California", "Case Law"],
    },
  ]

  const handleFiltersChange = (filters) => {
    // Handle filter changes
    console.log("Filters changed:", filters)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

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
          <div className="mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
              Dataset Discovery Dashboard
            </h1>
            <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Find, filter, and integrate legal datasets for privacy, AI regulation, and compliance workflows.
            </p>
          </div>

          {/* Filters */}
          <DatasetFilters onFiltersChange={handleFiltersChange} />

          {/* Dataset Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datasets.map((dataset) => (
              <DatasetCard key={dataset.id} dataset={dataset} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={5} onPageChange={handlePageChange} />
        </main>
      </div>
    </div>
  )
}

export default DatasetExplorer