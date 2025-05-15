import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiLayers, FiTrendingUp } from 'react-icons/fi';

const HomePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Radha', 'Guddy', 'Shivani', 'Bharti'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetweenWords = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              The Ultimate Resource for <br />
              <span className="text-indigo-600 relative ">
                _{currentText}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="absolute -right-2 w-1 h-12 bg-indigo-600"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Accelerate your development workflow with our curated collection of 
              components, templates, and best practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-gray-200">
                Explore Components
              </button>
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-indigo-400 filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-400 filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-blue-400 filter blur-3xl opacity-30"></div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Why Developers Love Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiCode className="text-3xl text-indigo-600" />,
                title: "Production-Ready Code",
                description: "Components built with best practices that you can drop right into your projects."
              },
              {
                icon: <FiZap className="text-3xl text-indigo-600" />,
                title: "Save Development Time",
                description: "Stop reinventing the wheel. Our templates save you hundreds of hours."
              },
              {
                icon: <FiLayers className="text-3xl text-indigo-600" />,
                title: "Modern Tech Stack",
                description: "Everything built with React, Tailwind CSS, and Framer Motion."
              },
              {
                icon: <FiTrendingUp className="text-3xl text-indigo-600" />,
                title: "Performance Optimized",
                description: "All components are optimized for speed and accessibility."
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to supercharge your development?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join thousands of developers who have accelerated their workflow with our resources.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-lg transition-colors"
          >
            Get Started For Free
          </motion.button>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;