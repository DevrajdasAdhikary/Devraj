import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Facebook, Code } from 'lucide-react';
import { useMouseContext } from '../context/MouseContext';
import { useMenuContext } from '../context/MenuContext';

const Header: React.FC = () => {
  const { setCursorVariant, setCursorText } = useMouseContext();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuContext();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Extracurricular', href: '#extracurricular' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/DevrajdasAdhikary', icon: <Github size={18} className="sm:w-5 sm:h-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/devraj-das-adhikary-655720202/', icon: <Linkedin size={18} className="sm:w-5 sm:h-5" /> },
    { name: 'Facebook', href: 'https://www.facebook.com/devraj.das.5268750/', icon: <Facebook size={18} className="sm:w-5 sm:h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-dark-800/70 backdrop-blur-lg py-2 sm:py-3 shadow-lg' : 'bg-transparent py-3 sm:py-5'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container flex items-center justify-between relative z-[101] px-4 sm:px-6">
        <a 
          href="#hero" 
          className="flex items-center gap-2 text-base sm:text-lg font-semibold relative z-[102]"
          onMouseEnter={() => {
            setCursorVariant('link');
            setCursorText('Home');
          }}
          onMouseLeave={() => {
            setCursorVariant('default');
            setCursorText('');
          }}
          onClick={() => handleLinkClick('#hero')}
        >
          <Code className="text-primary-500 w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline">Devraj</span>
        </a>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 relative z-[102]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/70 hover:text-white relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full text-sm lg:text-base"
              onMouseEnter={() => {
                setCursorVariant('link');
                setCursorText(item.name);
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 relative z-[102]">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-2 hover:bg-dark-700 rounded-full"
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

        <button
          className="md:hidden text-white p-2 relative z-[102] min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={toggleMenu}
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('default')}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`fixed inset-0 bg-dark-900/95 backdrop-blur-lg z-[99] md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          <div className="container flex justify-end py-3 sm:py-5 px-4 sm:px-6">
            <button
              onClick={toggleMenu}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
              aria-label="Close menu"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="container flex-1 flex flex-col justify-center space-y-6 sm:space-y-8 px-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl sm:text-2xl font-heading font-medium text-white/80 hover:text-white min-h-[44px] flex items-center"
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={() => setCursorVariant('default')}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="container py-6 sm:py-8 flex justify-center space-x-4 sm:space-x-6 px-4 sm:px-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white p-2 hover:bg-dark-700 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
                onMouseEnter={() => setCursorVariant('link')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;