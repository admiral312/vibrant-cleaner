
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
    <section id="about" className="py-16 bg-gradient-to-b from-white to-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              <img 
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop" 
                alt="Professional Cleaning" 
                className="rounded-xl"
              />
              
              <motion.div 
                className="absolute -right-8 -bottom-10 bg-cleaner rounded-lg p-6 shadow-xl"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                ref={countRef}
              >
                <motion.span 
                  className="text-3xl font-bold text-white block"
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
              className="mb-4"
            >
              With years of experience in the cleaning industry, we've developed efficient techniques and use the highest quality products to ensure your spaces are not just clean, but healthy environments for you to live and work in.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Our dedicated team of professionals is committed to providing exceptional service with attention to detail that sets us apart. Whether you need regular home cleaning, a one-time deep clean, or specialized commercial services, we have the expertise and equipment to exceed your expectations.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
