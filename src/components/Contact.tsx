
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: `Thank you, ${formData.name}! We'll get back to you soon.`,
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <motion.span 
            className="subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.span>
          <motion.h2 
            className="title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have Any Questions?
          </motion.h2>
        </div>
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <motion.div 
              className="md:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">Australia</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">98 4334 796 ***</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">thebestcleaner@gmail.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Name" 
                      className="w-full px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-cleaner focus:border-transparent"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-cleaner focus:border-transparent"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Phone" 
                      className="w-full px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-cleaner focus:border-transparent"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      id="message" 
                      placeholder="Message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-cleaner focus:border-transparent resize-none"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
