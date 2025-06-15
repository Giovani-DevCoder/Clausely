'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

import { useRouter } from 'next/navigation';

const AgentConsolePage = () => {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Simulate sending message and getting response
    console.log('Sending message:', message);
    setMessage('');
  };

  const handleConfigClick = () => {
    router.push('/model-api-config');
  };

  return (
    <DashboardLayout>
      <div className="flex h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Left Column: Chat History */}
        <div className="w-1/4 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
          <h2 className="text-xl font-bold mb-4">Chat History</h2>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
              <p className="font-semibold">GDPR Data Processing</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
              <p className="font-semibold">CCPA Compliance Check</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Yesterday</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
              <p className="font-semibold">AI Act Requirements</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">3 days ago</p>
            </div>
          </div>
        </div>

        {/* Middle Column: Chat Interface */}
        <div className="flex-1 flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Agent Console</h1>
            <div className="flex items-center space-x-2">
              <select className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white">
                <option>Europe</option>
              </select>
              <select className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white">
                <option>Germany</option>
              </select>
              <select className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white">
                <option>Germany</option>
              </select>
              <span className="text-sm text-gray-500 dark:text-gray-400">Risk Level: Medium</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
            {/* Agent Message */}
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">AI</div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-3/4">
                <p className="text-gray-800 dark:text-gray-200">Under GDPR Article 6, you must have a lawful basis for processing personal data. For marketing purposes, consent (Article 6(1)(a)) is typically required unless you can demonstrate legitimate interests (Article 6(1)(f)).</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">[Art. 6(1)(a)]</span>
                  <span className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">[Art. 6(1)(f)]</span>
                  <span className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">[Recital 47]</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="text-gray-500 hover:text-blue-500">👍</button>
                  <button className="text-gray-500 hover:text-blue-500">👎</button>
                </div>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-end justify-end mb-4">
              <div className="bg-blue-500 text-white p-3 rounded-lg max-w-3/4">
                <p>What are the requirements for marketing email consent under GDPR?</p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold ml-3">You</div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Compare with CCPA</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Show clause cliff</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Plain English summary</button>
            </div>
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about legal compliance, compare regulations, or request clause analysis..."
              className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
            <button
              type="button"
              onClick={handleConfigClick}
              className="px-4 py-3 bg-gray-200 text-gray-800 rounded-md font-semibold hover:bg-gray-300 transition duration-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Config
            </button>
          </form>
        </div>

        {/* Right Column: Risk Assessment & Citations */}
        <div className="w-1/4 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
          <h2 className="text-xl font-bold mb-4">Risk Assessment</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Compliance Score</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Data Processing:</span> Fully compliant with GDPR Article 6.</li>
              <li><span className="font-semibold">Consent Management:</span> Review needed for marketing and withdrawal processes.</li>
              <li><span className="font-semibold">Data Retention:</span> Non-compliant with storage retention periods exceed legal limits.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-4">Citations & References</h2>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="font-semibold">GDPR Article 6</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lawfulness of processing - establish your lawful basis.</p>
              <button className="text-blue-500 text-sm mt-1">Primary Source</button>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="font-semibold">Recital 47</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Legitimate Interests - provides guidance on balancing interests.</p>
              <button className="text-blue-500 text-sm mt-1">Supporting</button>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-4">Related Laws</h2>
          <div className="space-y-2">
            <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">CCPA</span>
            <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">PIPEDA</span>
            <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">DPDP Act</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentConsolePage;