import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionMusicPlayer from '../ui/SectionMusicPlayer';
import { useMouseContext } from '../../context/MouseContext';
import { Mail, MapPin, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const { setCursorVariant, setCursorText } = useMouseContext();
  
  const contactInfo = [
    {
      icon: <Mail className="text-primary-500" />,
      label: 'Email',
      value: 'devrajdasadhikary19@gmail.com',
      href: 'mailto:devrajdasadhikary19@gmail.com',
    },
    {
      icon: <MapPin className="text-primary-500" />,
      label: 'Location',
      value: 'Salt Lake, Sector 5, Kolkata, West Bengal, India',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/devraj-das-adhikary-655720202/',
      color: 'bg-[#0077B5] hover:bg-[#0077B5]/80',
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/DevrajdasAdhikary',
      color: 'bg-[#333] hover:bg-[#333]/80',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/devrajdasadhikary/',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: 'https://www.facebook.com/devraj.das.5268750/',
      color: 'bg-[#1877F2] hover:bg-[#1877F2]/80',
    },
  ];

  return (
    <SectionWrapper id="contact">
      {/* Warm/Welcoming Background Music */}
      <SectionMusicPlayer 
        sectionId="contact" 
        musicUrl="https://www.bensound.com/bensound-music/bensound-sunny.mp3"
        volume={0.12}
      />
      
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-center mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in <span className="text-gradient">Touch</span>
      </motion.h2>
      
      <motion.p
        className="text-base sm:text-lg text-white/70 text-center max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-12 sm:mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Have a question or want to work together? Feel free to reach out!
      </motion.p>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 px-4">
        <motion.div
          className="lg:col-span-2 space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm sm:text-base">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-primary-400 transition-colors text-sm sm:text-base"
                        onMouseEnter={() => setCursorVariant('link')}
                        onMouseLeave={() => setCursorVariant('default')}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Connect on Social Media</h3>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 transition-all text-sm sm:text-base`}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
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
                  <span>Connect on {link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Google Map */}
          <div className="glass-card p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Find Me Here</h3>
            
            <div className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden border border-dark-600 mb-3 sm:mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0267890234567!2d88.41394!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020000001%3A0x5f2b5c5b5c5b5c5b!2sSalt%20Lake%2C%20Sector%205%2C%20Kolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Devraj's Location - Salt Lake, Sector 5, Kolkata"
                onError={(e) => {
                  console.error('Map failed to load:', e);
                  // Fallback: hide the iframe and show a message
                  const iframe = e.target as HTMLIFrameElement;
                  iframe.style.display = 'none';
                  const fallback = iframe.parentElement?.querySelector('.map-fallback');
                  if (fallback) {
                    (fallback as HTMLElement).style.display = 'block';
                  }
                }}
              />
              
              {/* Fallback content if map fails to load */}
              <div className="map-fallback hidden w-full h-full bg-dark-700/50 flex items-center justify-center flex-col">
                <MapPin size={48} className="text-primary-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Location</h4>
                <p className="text-white/80 text-center">
                  Salt Lake, Sector 5<br />
                  Kolkata, West Bengal, India
                </p>
                <a
                  href="https://maps.google.com/?q=Salt+Lake+Sector+5+Kolkata+West+Bengal+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 btn-primary text-sm"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 bg-dark-700/30 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold mb-2 text-primary-400">Current Location</h4>
              <p className="text-white/80 mb-2 text-sm sm:text-base">
                <strong>Salt Lake, Sector 5, Kolkata, West Bengal, India</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;