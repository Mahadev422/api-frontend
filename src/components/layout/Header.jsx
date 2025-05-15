import { motion } from 'framer-motion';

const Header = ({ set }) => {

  return (
    <>
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 h-[50px]"
    >
      <div className="backdrop-blur-md bg-white/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <button onClick={() => set(true)} className="text-xl font-bold text-gray-800">Developer Api</button>
        </div>
      </div>
    </motion.header>
    <div className='h-[50px] w-screen'></div>
    </>
  );
};

export default Header;