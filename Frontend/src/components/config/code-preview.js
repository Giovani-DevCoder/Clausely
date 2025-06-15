import { Copy } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../../context/theme-context"

const CodePreview = ({ language = "python", config }) => {
  const { isDark } = useTheme()
  const [copied, setCopied] = useState(false)

  const generateCode = () => {
    switch (language) {
      case "python":
        return `import os
from openai import OpenAI

# Configuration
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://api.lx-pilot.ai.com/"
)

# Legal compliance query
def query_legal_compliance(question):
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "You are a legal compliance assistant."
            },
            {
                "role": "user", 
                "content": question
            }
        ],
        temperature=0.1,
        max_tokens=1500
    )
    
    return response.choices[0].message.content

# Example usage
result = query_legal_compliance(
    "What are the data processing requirements under GDPR?"
)`

      case "javascript":
        return `const { OpenAI } = require('openai');

// Configuration
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://api.lx-pilot.ai.com/'
});

// Legal compliance query
async function queryLegalCompliance(question) {
    const response = await client.chat.completions.create({
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: 'You are a legal compliance assistant.'
            },
            {
                role: 'user',
                content: question
            }
        ],
        temperature: 0.1,
        max_tokens: 1500
    });
    
    return response.choices[0].message.content;
}

// Example usage
queryLegalCompliance('What are the data processing requirements under GDPR?')
    .then(result => console.log(result));`

      case "curl":
        return `curl -X POST "https://api.lx-pilot.ai.com/v1/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -d '{
    "model": "gpt-4",
    "messages": [
      {
        "role": "system",
        "content": "You are a legal compliance assistant."
      },
      {
        "role": "user",
        "content": "What are the data processing requirements under GDPR?"
      }
    ],
    "temperature": 0.1,
    "max_tokens": 1500
  }'`

      default:
        return "// Code preview not available for this language"
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`rounded-lg border transition-colors duration-200 ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
        <div>
          <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Code Preview</h3>
          <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Auto-generated configuration code</p>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center space-x-2 px-3 py-1 rounded text-sm transition-colors ${
            copied
              ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
          }`}
        >
          <Copy className="w-4 h-4" />
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      <div className="p-4">
        <div className={`text-sm font-semibold mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          {language.charAt(0).toUpperCase() + language.slice(1)} Configuration
        </div>
        <pre
          className={`text-sm overflow-x-auto p-4 rounded border ${
            isDark ? "bg-slate-900 border-slate-600 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
          }`}
        >
          <code>{generateCode()}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodePreview