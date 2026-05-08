import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { IMAGES } from '../assets/images';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => {
            if (prev !== isScrolled) return isScrolled;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Applications', href: '#applications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              {IMAGES.logo ? (
                <img src={IMAGES.logo} alt="RAN Pumps Logo" className="h-10 w-auto object-contain" />
              ) : (
                <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center shadow-lg shadow-primary-blue/20">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
              )}
              <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-dark-blue' : 'text-white'}`}>
                RAN PUMPS
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-aqua-cyan ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] text-white rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-green-200 transition-all"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-text-dark' : 'text-white'} hover:text-aqua-cyan transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white overflow-hidden shadow-xl"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-lg font-medium text-text-dark hover:bg-light-gray rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            className="w-full mt-4 px-6 py-4 bg-primary-blue text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg"
          >
            <MessageCircle size={20} />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
