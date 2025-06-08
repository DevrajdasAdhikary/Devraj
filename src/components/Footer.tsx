import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Heart, Code } from 'lucide-react';
import { useMouseContext } from '../context/MouseContext';

const Footer: React.FC = () => {
  const { setCursorVariant, setCursorText } = useMouseContext();
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/DevrajdasAdhikary', icon: <Github size={18} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/devraj-das-adhikary-655720202/', icon: <Linkedin size={18} /> },
    { name: 'Facebook', href: 'https://www.facebook.com/devraj.das.5268750/', icon: <Facebook size={18} /> },
  ];

  return (
    <footer className="bg-dark-900 text-white/80 py-12 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div 
              className="flex items-center gap-2 text-xl font-semibold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Code className="text-primary-500" size={24} />
              <span>Devraj</span>
            </motion.div>
            <motion.p 
              className="text-sm text-white/60 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Building modern web experiences with a focus on performance, accessibility, and engaging user interfaces.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#hero" 
                  className="text-white/60 hover:text-white transition-colors"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white/60 hover:text-white transition-colors"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-white/60 hover:text-white transition-colors"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/60 hover:text-white transition-colors"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-3">Let's Connect</h3>
            <p className="text-sm text-white/60 mb-4">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-700 hover:bg-primary-700 p-2 rounded-full text-white/70 hover:text-white transition-colors"
                  onMouseEnter={() => {
                    setCursorVariant('link');
                    setCursorText(link.name);
                  }}
                  onMouseLeave={() => {
                    setCursorVariant('default');
                    setCursorText('');
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Devraj. All rights reserved.
          </p>
          <p className="flex items-center mt-2 md:mt-0">
            Built with <Heart size={14} className="mx-1 text-accent-500" /> and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;