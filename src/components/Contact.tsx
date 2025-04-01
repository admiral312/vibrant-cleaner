
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/50 to-white">
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
              
              {/* Map Embed - Added for professional look */}
              <motion.div 
                className="mt-8 rounded-lg overflow-hidden shadow-md h-64 sm:h-72"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28877057.744406443!2d115.230704!3d-25.2743988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2s!4v1665143186867!5m2!1sen!2s" 
                  style={{ border: 0, width: '100%', height: '100%' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <Input 
                      type="text" 
                      id="name" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 h-12 rounded-full border focus:border-cleaner focus:ring-cleaner"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      id="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 h-12 rounded-full border focus:border-cleaner focus:ring-cleaner"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="tel" 
                      id="phone" 
                      placeholder="Your Phone" 
                      className="w-full px-4 py-3 h-12 rounded-full border focus:border-cleaner focus:ring-cleaner"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      id="message" 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-cleaner focus:border-transparent resize-none"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-cleaner hover:bg-cleaner-600 text-white font-medium py-6 h-12 px-6 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 ml-1" />
                        </>
                      )}
                    </Button>
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
