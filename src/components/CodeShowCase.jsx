import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiCopy, FiCheck, FiChevronDown, FiGithub, FiExternalLink } from 'react-icons/fi';
import { codeSnippets } from './data';
import { SiReact, SiTailwindcss, SiFramer } from 'react-icons/si';

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState('javascript');
  const [copied, setCopied] = useState(false);

  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Modern React Development
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Professional code examples using React, Tailwind CSS, and Framer Motion
          </motion.p>
        </div>

        {/* Tech Stack Icons */}
        {/* <motion.div 
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col items-center">
            <SiReact className="text-5xl text-blue-500" />
            <span className="mt-2 text-gray-700">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-5xl text-cyan-500" />
            <span className="mt-2 text-gray-700">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFramer className="text-5xl text-purple-500" />
            <span className="mt-2 text-gray-700">Framer Motion</span>
          </div>
        </motion.div> */}

        {/* Code Showcase */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {Object.keys(codeSnippets).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 font-medium text-sm flex items-center gap-2 transition-colors ${activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab(tab)}
              >
                <FiCode className="text-lg" />
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="relative">
            <pre className="p-6 overflow-x-auto bg-gray-900 text-gray-100 text-sm">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
              aria-label="Copy code"
            >
              {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
            </button>
          </div>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-4 border-t border-gray-200"
            >
              {activeTab === 'javascript' && (
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">React Component with State</h3>
                  <p className="text-gray-600">
                    This example shows a React component using state and Framer Motion for animations.
                    Clicking the div triggers an animation that scales and rotates the element.
                  </p>
                </div>
              )}
              {activeTab === 'python' && (
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Responsive Card with Tailwind</h3>
                  <p className="text-gray-600">
                    A responsive card component built with Tailwind CSS. The layout changes from
                    vertical to horizontal on medium screens and includes proper spacing and typography.
                  </p>
                </div>
              )}
              {activeTab === 'axios' && (
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Framer Motion Animations</h3>
                  <p className="text-gray-600">
                    This component demonstrates entry and exit animations using Framer Motion.
                    The card fades in and slides up when mounting, and fades out while sliding up when unmounting.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to build something amazing?</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/yourusername/your-repo"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> View on GitHub
            </a>
            <a
              href="https://yourwebsite.com/docs"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink /> View Documentation
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CodeShowcase;