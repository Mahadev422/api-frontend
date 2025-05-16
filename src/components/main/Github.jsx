import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Github = () => {
  return (
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
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
  )
}

export default Github;
