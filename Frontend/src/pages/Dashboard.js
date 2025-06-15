import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"
import Header from "../components/Header"
import Sidebar from "../components/dashboard/sidebar"
import JurisdictionCoverage from "../components/dashboard/jurisdiction-coverage"
import AuditProgress from "../components/dashboard/audit-progress"
import DatasetCoverage from "../components/dashboard/dataset-coverage"
import RecentLegalUpdates from "../components/dashboard/recent-legal-updates"

const Dashboard = () => {
  const { isDark } = useTheme()
  const { t, isRTL } = useLanguage()

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
              Compliance Dashboard
            </h1>
            <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Monitor audit progress, dataset coverage, and legal compliance across jurisdictions
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Global Jurisdiction Coverage - Full Width */}
            <div className="lg:col-span-2">
              <JurisdictionCoverage />
            </div>

            {/* Audit Progress */}
            <div className="lg:col-span-1">
              <AuditProgress />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Dataset Coverage */}
            <div className="lg:col-span-1">
              <DatasetCoverage />
            </div>

            {/* Recent Legal Updates */}
            <div className="lg:col-span-2">
              <RecentLegalUpdates />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard