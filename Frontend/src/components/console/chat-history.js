import { MessageSquare, Clock } from "lucide-react"
import { useTheme } from "../../context/theme-context"

const ChatHistory = ({ onSelectChat }) => {
  const { isDark } = useTheme()

  const chatHistory = [
    {
      id: 1,
      title: "GDPR Data Processing",
      time: "2 hours ago",
      active: true,
    },
    {
      id: 2,
      title: "CCPA Compliance Check",
      time: "Yesterday",
      active: false,
    },
    {
      id: 3,
      title: "AI Act Requirements",
      time: "2 days ago",
      active: false,
    },
  ]

  return (
    <div
      className={`w-64 h-full border-r transition-colors duration-200 ${
        isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <h2 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Chat History</h2>
      </div>

      <div className="p-2">
        {chatHistory.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`w-full text-left p-3 rounded-lg mb-2 transition-colors duration-200 ${
              chat.active
                ? "bg-blue-500 text-white"
                : isDark
                  ? "text-slate-300 hover:bg-slate-800"
                  : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-start space-x-3">
              <MessageSquare className="w-4 h-4 mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{chat.title}</div>
                <div
                  className={`text-sm flex items-center space-x-1 mt-1 ${chat.active ? "text-blue-100" : "opacity-60"}`}
                >
                  <Clock className="w-3 h-3" />
                  <span>{chat.time}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChatHistory