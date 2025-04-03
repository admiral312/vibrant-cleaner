
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Rocket } from 'lucide-react';

type FloatingButtonsProps = {
  scrollThreshold?: number;
};

const FloatingButtons = ({ scrollThreshold = 300 }: FloatingButtonsProps) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll event listener to show/hide scroll button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Scroll to top button */}
      {showScrollButton && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-cleaner text-white h-14 w-14 rounded-full flex flex-col items-center justify-center shadow-lg hover:bg-cleaner-600 transition-all hover:shadow-xl hover:shadow-cleaner/20"
          whileHover={{ y: -5 }}
          aria-label="Scroll to top"
        >
          <Rocket className="h-6 w-6 mb-0.5" />
          <span className="text-[10px] font-medium">TOP</span>
        </motion.a>
      )}
    </div>
  );
};

export default FloatingButtons;
