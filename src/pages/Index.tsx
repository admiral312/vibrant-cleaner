
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    // Wait for components to fully load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500); // Slightly longer than preloader to ensure smooth transition

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
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
      </motion.div>
    </>
  );
};

export default Index;
