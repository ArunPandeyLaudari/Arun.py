import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaAngleLeft } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  const socialIcons = [
    { icon: FaGithub, url: '#' },
    { icon: FaLinkedin, url: '#' },
    { icon: FaTwitter, url: '#' },
    { icon: HiOutlineMail, url: '#' },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-3'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
         

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className="relative text-white hover:text-purple-300 transition-colors font-medium text-sm uppercase tracking-wider group"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            

            <motion.a
              href="#contact"
              className="ml-4 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg transform group-hover:scale-110 transition-transform duration-300"></span>
              <span className="relative z-10 block px-4 py-2 text-white text-sm font-medium rounded-lg shadow-lg">
               Let's Craft Something Together
              </span>
            </motion.a>
          </nav>

          {/* Hamburger - Mobile */}
          <motion.div 
            className="md:hidden text-white text-2xl z-50 cursor-pointer"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu - Animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white backdrop-blur-lg absolute top-16 left-0 right-0 shadow-xl border-t border-purple-900/20"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block py-3 text-xl px-4 text-white/90 hover:text-purple-300 rounded-lg hover:bg-purple-900/10 transition-all font-medium"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <div className="flex justify-center gap-6 pt-2">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-300 p-2"
                    whileHover={{ y: -3, scale: 1.1 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                className="block mt-4 text-xl py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg text-center font-medium shadow-lg"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Connect
            
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;