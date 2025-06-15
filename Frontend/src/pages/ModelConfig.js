import { useState } from "react"
import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"
import Header from "../components/Header"
import Sidebar from "../components/dashboard/sidebar"
import ConfigurationSteps from "../components/config/configuration-steps"
import CodePreview from "../components/config/code-preview"
import ConfigurationSummary from "../components/config/configuration-summary"

const ModelConfig = () => {
  const { isDark } = useTheme()
  const { t, isRTL } = useLanguage()
  const [config, setConfig] = useState({
    dataset: "CCPA Privacy Dataset",
    provider: "Google",
    model: "Gemini 1.5 Flash",
    apiKey: "sk-...",
    language: "python",
  })

  const handleConfigChange = (newConfig) => {
    setConfig(newConfig)
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
              Model & API Configuration
            </h1>
            <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Configure your AI model provider and API settings for compliance automation workflows.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Configuration Steps - Left Column */}
            <div className="lg:col-span-2">
              <ConfigurationSteps onConfigChange={handleConfigChange} />
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Code Preview */}
              <CodePreview language={config.language} config={config} />

              {/* Configuration Summary */}
              <ConfigurationSummary config={config} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ModelConfig
