
import { motion } from 'framer-motion';

const services = [
  {
    title: "Home Cleaning",
    description: "We'll make your home sparkle from top to bottom with our thorough cleaning services.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop",
    delay: 0
  },
  {
    title: "Commercial Cleaning",
    description: "Keep your business premises pristine with our professional commercial cleaning services.",
    image: "https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=1776&auto=format&fit=crop",
    delay: 0.1
  },
  {
    title: "Mould Cleaning",
    description: "Eliminate harmful mould and prevent its return with our specialized mould removal service.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop",
    delay: 0.2
  },
  {
    title: "Office Cleaning",
    description: "Create a clean and productive workspace for your employees with our office cleaning service.",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1770&auto=format&fit=crop",
    delay: 0.3
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      delay: delay
    }
  })
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.15, transition: { duration: 0.4 } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <motion.span 
            className="subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Services
          </motion.span>
          <motion.h2 
            className="title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={service.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <motion.div 
                className="service-card h-full flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-card-img mb-6">
                  <motion.div
                    className="w-full h-full overflow-hidden rounded-full"
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      variants={imageVariants}
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-cleaner-100 to-cleaner-50 p-8 md:p-12 rounded-2xl text-center shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to experience professional cleaning?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact us today to schedule your first cleaning service and see the difference professional cleaning makes.</p>
          <motion.a 
            href="#contact" 
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
