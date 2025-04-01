
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Check, Award, Clock, Shield, User } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const benefits = [
  { icon: User, text: "Professional & certified cleaning staff" },
  { icon: Shield, text: "Fully insured and bonded services" },
  { icon: Clock, text: "Flexible scheduling to fit your lifestyle" },
  { icon: Award, text: "100% satisfaction guaranteed" }
];

const stats = [
  { value: 500, label: "Satisfied Clients", delay: 0.2 },
  { value: 5, label: "Years of Experience", delay: 0.4 },
  { value: 3, label: "Service Locations", delay: 0.6 },
];

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  // Handle stats counter animation when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Animate the counters when they come into view
  useEffect(() => {
    if (!isInView) return;

    stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      let requestId;

      const updateCount = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.floor(progress * stat.value);
          return newCounts;
        });
        
        if (progress < 1) {
          requestId = requestAnimationFrame(updateCount);
        }
      };
      
      // Stagger the animations
      setTimeout(() => {
        requestId = requestAnimationFrame(updateCount);
      }, stat.delay * 1000);

      return () => {
        if (requestId) {
          cancelAnimationFrame(requestId);
        }
      };
    });
  }, [isInView]);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-b from-white to-cleaner-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div 
            style={{ opacity, y }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10"
            >
              {/* Main Image */}
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-xl border-8 border-white"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1603712727025-d2d366c20bd1?q=80&w=2071&auto=format&fit=crop" 
                    alt="Professional Cleaning Team" 
                    className="w-full h-auto rounded-xl"
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cleaner-700/40 to-transparent opacity-60" />
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-full bg-cleaner/20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 6
                  }}
                />
                
                <motion.div 
                  className="absolute -z-10 -top-8 -left-8 w-24 h-24 rounded-full bg-cleaner-200/30"
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 7,
                    delay: 0.5
                  }}
                />
              </div>
              
              {/* Stats Section */}
              <div 
                ref={statsRef}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: stat.delay, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-cleaner-100 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <motion.span 
                          className="text-3xl font-bold text-cleaner-700 block"
                          whileHover={{ scale: 1.05 }}
                        >
                          {counts[index]}+
                        </motion.span>
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Text Content */}
          <motion.div 
            className="order-1 lg:order-2"
            style={{ opacity, y: useTransform(y, (value) => value * -1) }}
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 bg-cleaner-100 text-cleaner-700 rounded-full text-sm font-medium"
              >
                About Our Company
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold"
              >
                Professional Cleaning <span className="text-cleaner">Since 2019</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground"
              >
                With years of experience in the cleaning industry, we've developed efficient techniques and use the highest quality eco-friendly products to ensure your spaces are not just clean, but healthy environments for you to live and work in.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground"
              >
                Our dedicated team of professionals undergoes rigorous training to provide exceptional service with meticulous attention to detail that sets us apart in the industry.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index + 0.8 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 p-2 rounded-full bg-cleaner-100 text-cleaner-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-foreground">{benefit.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <a 
                  href="#services" 
                  className="inline-flex items-center px-6 py-3 bg-cleaner hover:bg-cleaner-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Our Services
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
