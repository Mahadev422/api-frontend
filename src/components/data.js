import { SiJavascript, SiPython, SiAxios } from 'react-icons/si';

  export const codeData = [
  {
    language: 'javascript',
    icon: SiJavascript,
    code: `import { motion } from 'framer-motion';

const Box = () => (
  <motion.div
    animate={{ scale: 1.2, rotate: 90 }}
    transition={{ duration: 0.5 }}
    className="w-32 h-32 bg-blue-500"
  />
);`,
    description: {
      title: 'React Component with State',
      content:
        'This example shows a React component using state and Framer Motion for animations. Clicking the div triggers an animation that scales and rotates the element.',
    },
  },
  {
    language: 'python',
    icon: SiPython,
    code: `# Tailwind CSS responsive card
<div class="bg-white shadow-md rounded-lg p-4 md:flex">
  <img src="image.jpg" class="w-full md:w-1/3 rounded-md" />
  <div class="md:ml-6 mt-4 md:mt-0">
    <h2 class="text-xl font-bold">Card Title</h2>
    <p class="text-gray-600">This is a responsive card layout with Tailwind CSS.</p>
  </div>
</div>`,
    description: {
      title: 'Responsive Card with Tailwind',
      content:
        'A responsive card component built with Tailwind CSS. The layout changes from vertical to horizontal on medium screens and includes proper spacing and typography.',
    },
  },
  {
    language: 'axios',
    icon: SiAxios,
    code: `import { motion, AnimatePresence } from 'framer-motion';

const MyComponent = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="p-4 bg-white rounded-lg shadow"
      >
        Animated Content
      </motion.div>
    )}
  </AnimatePresence>
);`,
    description: {
      title: 'Framer Motion Animations',
      content:
        'This component demonstrates entry and exit animations using Framer Motion. The card fades in and slides up when mounting, and fades out while sliding up when unmounting.',
    },
  },
];