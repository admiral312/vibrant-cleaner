
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const features = [
    "Professional & reliable service",
    "Eco-friendly products",
    "Insured & trained staff"
  ];
  
  const isMobile = useIsMobile();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full md:w-3/5 h-full bg-gradient-to-bl from-cleaner-50/30 to-transparent rounded-bl-[100px]" />
        <motion.div 
          className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 rounded-tr-[100px] bg-cleaner-100/50" 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left lg:col-span-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="inline-block px-4 py-1 bg-cleaner-100 text-cleaner-700 rounded-full text-sm font-medium mb-3"
                >
                  Premium Cleaning Services
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
                >
                  <span className="block">Creating Clean</span> 
                  <span className="bg-gradient-to-r from-cleaner to-cleaner-700 bg-clip-text text-transparent">
                    Spaces for Living
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
                >
                  Professional cleaning services tailored to your needs. We make your space shine so you can focus on what matters most.
                </motion.p>
              </div>
              
              {/* Features List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6"
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-cleaner" />
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  asChild
                  className="bg-cleaner hover:bg-cleaner-600 text-white font-medium py-6 px-8 rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-cleaner/20 hover:shadow-xl hover:shadow-cleaner/30 transform hover:-translate-y-1 text-base"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Get Free Quote <ArrowRight className="ml-1 w-5 h-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="border-cleaner text-cleaner hover:bg-cleaner/10 font-medium py-6 px-8 rounded-full transition-all duration-300 ease-in-out"
                >
                  <a href="#services" className="flex items-center gap-2">
                    Our Services
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cleaner/20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional Cleaning Service" 
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cleaner-700/30 to-transparent opacity-60" />
              </motion.div>
              
              {/* Floating statistics card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 md:-left-12 bg-white rounded-lg p-4 shadow-xl"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(85, 179, 213, 0.25)"
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cleaner/10 flex items-center justify-center">
                    <span className="text-cleaner-600 font-bold text-lg">5★</span>
                  </div>
                  <div>
                    <span className="block font-bold text-foreground">500+</span>
                    <span className="text-xs text-muted-foreground">Happy Clients</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating service card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -top-10 -right-6 bg-white rounded-lg p-4 shadow-xl hidden md:block"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(85, 179, 213, 0.25)"
                }}
              >
                <div className="text-center">
                  <span className="block font-bold text-cleaner">Premium Service</span>
                  <span className="text-xs text-muted-foreground">Eco-Friendly Cleaning</span>
                </div>
              </motion.div>
            </div>
            
            {/* Background decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full"
            >
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-cleaner-200 rounded-full blur-3xl opacity-30" 
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 8
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-72 h-72 bg-cleaner-100 rounded-full blur-3xl opacity-20" 
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 10,
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
