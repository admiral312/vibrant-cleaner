
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gradient-to-br from-cleaner-50 to-white flex items-center justify-center z-50"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ 
                rotate: 360,
                borderColor: ['rgba(85, 179, 213, 0.3)', 'rgba(85, 179, 213, 1)', 'rgba(85, 179, 213, 0.3)'],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: "linear" 
              }}
              className="w-20 h-20 border-4 border-cleaner border-t-cleaner-600 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-cleaner-700 font-semibold text-xl"
            >
              The Best Cleaner
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
