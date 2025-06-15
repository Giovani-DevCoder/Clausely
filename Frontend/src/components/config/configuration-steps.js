import { useState } from "react"
import { ChevronDown, Eye, EyeOff, Check, Download } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const ConfigurationSteps = ({ onConfigChange }) => {
  const { isDark } = useTheme()
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKeyVerified, setApiKeyVerified] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState("python")
  const [config, setConfig] = useState({
    dataset: "CCPA Privacy Dataset",
    provider: "Google",
    model: "Gemini 1.5 Flash",
    apiKey: "sk-...",
    language: "python",
  })

  const handleConfigUpdate = (key, value) => {
    const newConfig = { ...config, [key]: value }
    setConfig(newConfig)
    onConfigChange?.(newConfig)
  }

  const testApiKey = () => {
    // Simulate API key testing
    setApiKeyVerified(true)
  }

  return (
    <div className="space-y-6">
      {/* Step 1: Dataset Context */}
      <div
        className={`p-6 rounded-lg border transition-colors duration-200 ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
          Step 1: Select Dataset Context
        </h3>
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Dataset Source
          </label>
          <div className="relative">
            <select
              value={config.dataset}
              onChange={(e) => handleConfigUpdate("dataset", e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
                isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              <option>CCPA Privacy Dataset</option>
              <option>GDPR Compliance Dataset</option>
              <option>HIPAA Healthcare Dataset</option>
              <option>Financial Services Dataset</option>
            </select>
            <ChevronDown
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            />
          </div>
          <p className={`text-sm mt-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            This helps the agent understand the legal domain and context for model responses.
          </p>
        </div>
      </div>

      {/* Step 2: AI Model Provider */}
      <div
        className={`p-6 rounded-lg border transition-colors duration-200 ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
          Step 2: AI Model Provider
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Provider
            </label>
            <div className="relative">
              <select
                value={config.provider}
                onChange={(e) => handleConfigUpdate("provider", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
                  isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                }`}
              >
                <option>Google</option>
                <option>OpenAI</option>
                <option>Anthropic</option>
                <option>Azure OpenAI</option>
              </select>
              <ChevronDown
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              />
            </div>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Model Version
            </label>
            <div className="relative">
              <select
                value={config.model}
                onChange={(e) => handleConfigUpdate("model", e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
                  isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                }`}
              >
                <option>Gemini 1.5 Flash</option>
                <option>Gemini 1.5 Pro</option>
                <option>GPT-4</option>
                <option>GPT-3.5 Turbo</option>
                <option>Claude 3 Sonnet</option>
              </select>
              <ChevronDown
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: API Key Configuration */}
      <div
        className={`p-6 rounded-lg border transition-colors duration-200 ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
          Step 3: API Key Configuration
        </h3>
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            API Key
          </label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <input
                type={showApiKey ? "text" : "password"}
                value={config.apiKey}
                onChange={(e) => handleConfigUpdate("apiKey", e.target.value)}
                placeholder="sk-..."
                className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                  isDark ? "text-slate-400 hover:text-slate-300" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <button
              onClick={testApiKey}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Test
            </button>
          </div>
          {apiKeyVerified && (
            <div className="flex items-center space-x-2 mt-2 text-green-500">
              <Check className="w-4 h-4" />
              <span className="text-sm">Verified</span>
            </div>
          )}
        </div>
      </div>

      {/* Step 4: Code Language Preference */}
      <div
        className={`p-6 rounded-lg border transition-colors duration-200 ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
          Step 4: Code Language Preference
        </h3>
        <div className="flex space-x-1 bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
          {["python", "javascript", "curl"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelectedLanguage(lang)
                handleConfigUpdate("language", lang)
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedLanguage === lang
                  ? "bg-blue-500 text-white"
                  : isDark
                    ? "text-slate-300 hover:text-white hover:bg-slate-600"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white"
              }`}
            >
              {lang === "javascript" ? "JavaScript" : lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Export Configuration */}
      <div
        className={`p-6 rounded-lg border transition-colors duration-200 ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
          Export Configuration
        </h3>
        <div className="flex flex-wrap gap-3">
          <button
            className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
              isDark
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Download className="w-4 h-4" />
            <span>.env file</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
              isDark
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Download className="w-4 h-4" />
            <span>settings.json</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
              isDark
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Markdown</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationSteps