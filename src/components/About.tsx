
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "Professionally trained staff",
  "Eco-friendly cleaning products",
  "Flexible scheduling options",
  "100% satisfaction guarantee"
];

const About = () => {
  const [clientCount, setClientCount] = useState(0);
  const targetCount = 500; // Target client count
  const sectionRef = useRef(null);
  const countRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  // Handle count animation when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000; // 2 seconds
          const startTime = Date.now();
          
          const updateCount = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            setClientCount(Math.floor(progress * targetCount));
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-secondary/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            style={{ opacity, y }}
            className="relative order-2 md:order-1"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 max-w-md mx-auto"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop" 
                  alt="Professional Cleaning" 
                  className="rounded-xl w-full h-auto"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cleaner-600/40 to-transparent opacity-60 rounded-xl" />
              </div>
              
              <motion.div 
                className="absolute -right-8 -bottom-10 bg-cleaner rounded-lg p-6 shadow-xl"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                ref={countRef}
              >
                <motion.span 
                  className="text-3xl md:text-4xl font-bold text-white block"
                >
                  {clientCount}+
                </motion.span>
                <span className="text-white/90 text-sm uppercase tracking-wider">
                  Satisfied Clients
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            style={{ opacity, y: useTransform(y, (value) => value * -1) }}
          >
            <div className="section-title !text-left">
              <motion.span 
                className="subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.span>
              <motion.h2 
                className="title !text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We're Cleaning Since 2019
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6 text-lg"
            >
              With years of experience in the cleaning industry, we've developed efficient techniques and use the highest quality products to ensure your spaces are not just clean, but healthy environments for you to live and work in.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 text-lg"
            >
              Our dedicated team of professionals is committed to providing exceptional service with attention to detail that sets us apart.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index + 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cleaner text-white flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
