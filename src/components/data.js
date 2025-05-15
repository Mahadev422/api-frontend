export const codeSnippets = {
    javascript: `import { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="w-32 h-32 bg-indigo-600 rounded-lg cursor-pointer"
      animate={{
        scale: isActive ? 1.2 : 1,
        rotate: isActive ? 360 : 0,
      }}
      transition={{ duration: 0.5 }}
      onClick={() => setIsActive(!isActive)}
    />
  );
};`,
    python: `<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img.jpg" alt="Modern building" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome workspaces...</p>
    </div>
  </div>
</div>`,
    axios: `import { motion } from 'framer-motion';

const FramerExample = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-white rounded-lg shadow-lg"
  >
    <h3 className="text-xl font-bold text-gray-800">Animated Card</h3>
    <p className="mt-2 text-gray-600">This card animates in and out smoothly!</p>
  </motion.div>
);`
  };