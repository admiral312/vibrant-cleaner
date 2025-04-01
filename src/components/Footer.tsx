
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cleaner text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">The Best Cleaner</h3>
            <p className="mb-4 text-white/80">
              We provide professional cleaning services for homes and businesses.
              Our experienced team ensures your spaces are spotless and healthy.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://www.facebook.com/profile.php?id=100095693793123&mibextid=LQQJ4d" 
                target="_blank" 
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </motion.a>
              
              <motion.a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Australia</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">98 4334 796 ***</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">thebestcleaner@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-white/80 text-sm"
            >
              © 2020 - {currentYear} Designed and Developed by Greenmantis
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/80 text-sm"
            >
              All Rights Reserved
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
