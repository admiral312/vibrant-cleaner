
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';
import BookingDialog from './BookingDialog';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Close mobile menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
            : 'bg-transparent py-4'  // Reduced padding
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="z-50"
          >
            <a href="#home" className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-cleaner">The Best Cleaner</span>
              <span className="text-xs tracking-widest text-foreground/70">CLEANING SERVICE</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ul className="flex gap-8 lg:gap-10">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.4 }}
                  >
                    <a 
                      href={link.href} 
                      className="relative px-3 py-2 text-foreground hover:text-cleaner transition-colors text-base"
                    >
                      {link.title}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-cleaner"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <Button 
                onClick={() => setShowBookingDialog(true)}
                className="bg-cleaner hover:bg-cleaner-600 text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button and Book Now button */}
          <div className="md:hidden flex items-center gap-4">
            <Button 
              onClick={() => setShowBookingDialog(true)}
              size="sm"
              className="bg-cleaner hover:bg-cleaner-600 text-white font-medium rounded-full transition-all duration-300"
            >
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-xs">Book</span>
            </Button>
            
            <button 
              className="text-cleaner z-50 p-2"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-screen w-full sm:w-3/4 md:w-2/3 bg-white shadow-2xl md:hidden z-40"
              >
                <div className="h-full flex flex-col pt-24 pb-10 px-8">
                  <ul className="flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <a 
                          href={link.href} 
                          className="block text-lg py-3 border-b border-gray-200"
                          onClick={toggleMenu}
                        >
                          {link.title}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay when mobile menu is open */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 md:hidden z-30"
              onClick={toggleMenu}
            />
          )}
        </div>
      </motion.header>
      
      <BookingDialog open={showBookingDialog} onOpenChange={setShowBookingDialog} />
    </>
  );
};

export default Navbar;
