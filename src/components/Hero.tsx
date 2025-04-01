
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
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
              <a href="#about" className="btn-primary inline-block">
                Know More
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Animated background circle */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-cleaner/10 rounded-full"
              initial={{ width: 300, height: 300 }}
              animate={{ 
                width: 350, 
                height: 350, 
                backgroundColor: "rgba(85, 179, 213, 0.15)" 
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 3 
              }}
            />
            
            {/* Animated hero image */}
            <motion.img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop"
              alt="Cleaning Service" 
              className="relative z-10 mx-auto rounded-2xl shadow-lg"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{ maxWidth: "85%" }}
            />
            
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
