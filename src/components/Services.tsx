
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronRight, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const services = [
  {
    title: "Home Cleaning",
    description: "We'll make your home sparkle from top to bottom with our thorough cleaning services. Perfect for regular maintenance or deep cleaning.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop",
    benefits: ["Dust-free surfaces", "Sanitized bathrooms", "Fresh smell", "Organized spaces"],
    delay: 0
  },
  {
    title: "Commercial Cleaning",
    description: "Keep your business premises pristine with our professional commercial cleaning services, tailored to your specific industry needs.",
    image: "https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=1776&auto=format&fit=crop",
    benefits: ["Clean reception area", "Hygienic restrooms", "Sanitized workspaces", "Professional appearance"],
    delay: 0.1
  },
  {
    title: "Mould Cleaning",
    description: "Eliminate harmful mould and prevent its return with our specialized mould removal service. We use eco-friendly products for your safety.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop",
    benefits: ["Health protection", "Root cause analysis", "Preventive treatment", "Structural safety"],
    delay: 0.2
  },
  {
    title: "Office Cleaning",
    description: "Create a clean and productive workspace for your employees with our office cleaning service, scheduled at your convenience.",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1770&auto=format&fit=crop",
    benefits: ["Clean meeting rooms", "Organized desks", "Sanitized kitchen", "Spotless floors"],
    delay: 0.3
  }
];

const Services = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-cleaner-50/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mx-auto max-w-2xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="px-4 py-1 bg-cleaner-100 text-cleaner-700 rounded-full text-sm font-medium inline-block mb-3"
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cleaner-700 to-cleaner bg-clip-text text-transparent">
              Premium Cleaning
            </span>{" "}
            Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            Our professional team delivers exceptional cleaning services tailored to your specific needs. 
            We use premium eco-friendly products and advanced techniques for outstanding results every time.
          </motion.p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border-cleaner-100/20 hover:border-cleaner-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative w-full pt-[70%] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-cleaner text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                        Premium Service
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                <CardContent className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {service.title}
                    <Star className="h-4 w-4 text-cleaner fill-cleaner" />
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium text-sm mb-2 text-foreground/90">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-cleaner mt-0.5">
                            <ChevronRight className="h-4 w-4" />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="mt-6"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-cleaner text-cleaner hover:bg-cleaner hover:text-white transition-all duration-300"
                        asChild
                      >
                        <a href="#contact">Learn More</a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Statistics section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-cleaner-700 text-white p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">5★</span>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold mb-1">500+</h3>
                <p className="text-white/80">Happy Clients</p>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">10+</span>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold mb-1">10+</h3>
                <p className="text-white/80">Years Experience</p>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">24h</span>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold mb-1">24/7</h3>
                <p className="text-white/80">Service Available</p>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold mb-1">100%</h3>
                <p className="text-white/80">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
