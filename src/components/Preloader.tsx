
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
          className="fixed inset-0 bg-gradient-to-tr from-cleaner-50 via-white to-cleaner-50 flex items-center justify-center z-50"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: 360,
                borderRadius: ["20%", "50%", "20%"],
                borderColor: ['rgba(85, 179, 213, 0.3)', 'rgba(85, 179, 213, 1)', 'rgba(85, 179, 213, 0.3)'],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              }}
              className="w-24 h-24 border-4 border-cleaner border-t-cleaner-600 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 bg-cleaner-200 rounded-full opacity-70"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-cleaner-700 font-semibold text-xl"
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
