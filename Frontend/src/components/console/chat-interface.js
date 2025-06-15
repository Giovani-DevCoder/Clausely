import { useState } from "react"
import { Send, ChevronDown } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const ChatInterface = () => {
  const { isDark } = useTheme()
  const [message, setMessage] = useState("What are the requirements for marketing email consent under GDPR?")
  const [selectedRegion, setSelectedRegion] = useState("Europe")
  const [selectedCountry, setSelectedCountry] = useState("Germany")

  const regions = ["Europe", "North America", "Asia", "Africa"]
  const countries = ["Germany", "France", "Spain", "Italy", "Netherlands"]

  const chatMessages = [
    {
      id: 1,
      type: "assistant",
      content:
        "Under GDPR Article 6, you must have a lawful basis for processing personal data. For marketing purposes, consent (Article 6(1)(a)) is typically required unless you can demonstrate legitimate interests (Article 6(1)(f)).",
      actions: ["Art. 6(1)(a)", "Art. 6(1)(f)", "Recital 47"],
      suggestions: ["Compare with CCPA", "Show clause diff", "Plain English summary"],
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Region/Country Selectors */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className={`px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
                isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <ChevronDown
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            />
          </div>

          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className={`px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-colors ${
                isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <ChevronDown
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            />
          </div>

          {/* Tags */}
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 text-xs font-medium rounded">
              Germany
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded">
              GDPR
            </span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 text-xs font-medium rounded">
              Risk Level
            </span>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 text-xs font-medium rounded">
              Medium
            </span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {chatMessages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">AI</span>
              </div>
              <div className="flex-1">
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"
                  }`}
                >
                  <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{msg.content}</p>

                  {/* Action Buttons */}
                  {msg.actions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.actions.map((action, index) => (
                        <button
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 text-xs font-medium rounded hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Suggestion Buttons */}
                  {msg.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1 border rounded text-xs font-medium transition-colors ${
                            isDark
                              ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                              : "border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            className={`px-3 py-2 border rounded-lg text-sm transition-colors ${
              isDark
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Compare GDPR vs CCPA
          </button>
          <button
            className={`px-3 py-2 border rounded-lg text-sm transition-colors ${
              isDark
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Data retention requirements
          </button>
          <button
            className={`px-3 py-2 border rounded-lg text-sm transition-colors ${
              isDark
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Cookie consent best practices
          </button>
        </div>

        {/* Message Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about legal compliance, compare regulations, or request clause analysis..."
            className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
              isDark
                ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
            }`}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface