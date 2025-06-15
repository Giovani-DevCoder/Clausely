import { useState } from "react"
import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"
import Header from "../components/Header"
import Sidebar from "../components/dashboard/sidebar"
import ChatHistory from "../components/console/chat-history"
import ChatInterface from "../components/console/chat-interface"
import RiskAssessment from "../components/console/risk-assessment"
import CitationsReferences from "../components/console/citations-references"

const AgentConsole = () => {
  const { isDark } = useTheme()
  const { t, isRTL } = useLanguage()
  const [selectedChat, setSelectedChat] = useState(null)

  const handleSelectChat = (chat) => {
    setSelectedChat(chat)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${isDark ? "bg-slate-900" : "bg-gray-50"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex">
          {/* Chat History */}
          <ChatHistory onSelectChat={handleSelectChat} />

          {/* Main Chat Area */}
          <div className="flex-1 flex">
            <div className="flex-1">
              <ChatInterface />
            </div>

            {/* Right Panel */}
            <div className="w-80 p-4 space-y-6 border-l border-slate-200 dark:border-slate-700">
              <RiskAssessment />
              <CitationsReferences />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentConsole