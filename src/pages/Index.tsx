
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import FloatingButtons from '@/components/FloatingButtons';
import { setupSmoothScrolling } from '@/utils/scrollUtils';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Setup smooth scrolling and handle page loading
  useEffect(() => {
    // Setup smooth scrolling for anchor links
    const cleanupScrollListener = setupSmoothScrolling();

    // Wait for components to fully load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    
    return () => {
      cleanupScrollListener();
      clearTimeout(timer);
    };
  }, []);

  // Prepare the page variants for animation
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Preloader />
      <motion.div 
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
        variants={pageVariants}
        className="relative overflow-x-hidden"
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
        
        {/* Floating buttons component */}
        <FloatingButtons scrollThreshold={300} />
      </motion.div>
    </>
  );
};

export default Index;
