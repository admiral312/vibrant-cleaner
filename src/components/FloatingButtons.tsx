
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

type FloatingButtonsProps = {
  scrollThreshold?: number;
};

const FloatingButtons = ({ scrollThreshold = 300 }: FloatingButtonsProps) => {
  const [showCallButton, setShowCallButton] = useState(false);

  // Handle scroll event listener to show/hide call button
  useEffect(() => {
    const handleScroll = () => {
      setShowCallButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  // Handle call now functionality
  const handleCallNow = () => {
    window.location.href = 'tel:1234567890';
  };

  return (
    <>
      {/* Scroll to top button */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-40 bg-cleaner text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:bg-cleaner-600 transition-colors"
        whileHover={{ y: -5 }}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.a>

      {/* Call Now Floating Button */}
      {showCallButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleCallNow}
          className="fixed bottom-24 right-8 z-40 bg-green-500 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          whileHover={{ y: -5, scale: 1.05 }}
          aria-label="Call Now"
        >
          <Phone className="h-6 w-6" />
        </motion.button>
      )}
    </>
  );
};

export default FloatingButtons;
