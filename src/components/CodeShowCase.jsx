import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCopy, FiCheck, FiGithub, FiExternalLink } from 'react-icons/fi';
import { codeData } from './data';

const CodeShowCase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const { language, icon, code, description } = codeData[activeIndex];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
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

        {/* Code Showcase */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {codeData.map((snippet, index) => (
              <button
                key={snippet.language}
                className={`px-6 py-3 font-medium text-sm flex items-center gap-2 transition-colors ${
                  activeIndex === index
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <snippet.icon className="text-indigo-500" />
                {snippet.language.charAt(0).toUpperCase() + snippet.language.slice(1)}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="relative">
            <pre className="p-6 overflow-x-auto bg-gray-900 text-gray-100 text-sm">
              <code>{code}</code>
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
              key={language}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-4 border-t border-gray-200"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {description.title}
              </h3>
              <p className="text-gray-600">{description.content}</p>
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

export default CodeShowCase;
