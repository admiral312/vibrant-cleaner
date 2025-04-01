
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-gradient-to-bl from-cleaner-50/50 to-transparent -z-10 rounded-bl-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-block text-cleaner font-medium mb-2 text-lg"
            >
              Professional Cleaning Services
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Need Cleaning Service?
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0"
            >
              Professional, reliable, and thorough cleaning services for your home or business.
              We make your space shine so you can focus on what matters most.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button 
                asChild
                className="bg-cleaner hover:bg-cleaner-600 text-white font-medium py-6 px-8 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
              >
                <a href="#about" className="flex items-center gap-2">
                  Learn More <ArrowRight className="ml-1 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-cleaner/10 rounded-full"
              initial={{ width: 300, height: 300 }}
              animate={{ 
                width: [300, 350, 300], 
                height: [300, 350, 300], 
                backgroundColor: ["rgba(85, 179, 213, 0.1)", "rgba(85, 179, 213, 0.15)", "rgba(85, 179, 213, 0.1)"] 
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 4
              }}
            />
            
            {/* Animated hero image */}
            <motion.div
              className="relative z-10 mx-auto rounded-2xl shadow-xl overflow-hidden"
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{ maxWidth: "90%" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop"
                alt="Professional Cleaning Service" 
                className="w-full h-auto rounded-2xl transform transition duration-700 hover:scale-105"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cleaner-600/30 to-transparent opacity-60" />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-5 -left-5 w-20 h-20 bg-cleaner-200 rounded-full z-0"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5 
              }}
            />
            
            <motion.div
              className="absolute -top-5 -right-5 w-16 h-16 bg-cleaner-100 rounded-full z-0"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
