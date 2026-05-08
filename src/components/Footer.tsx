import { MessageCircle, Droplets, MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { IMAGES } from '../assets/images';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              {IMAGES.logo ? (
                <img src={IMAGES.logo} alt="RAN Pumps Logo" className="h-10 w-auto object-contain brightness-0 invert" />
              ) : (
                <div className="w-10 h-10 bg-aqua-cyan rounded-lg flex items-center justify-center">
                  <span className="text-dark-blue font-bold text-xl">R</span>
                </div>
              )}
              <span className="font-heading font-bold text-2xl tracking-tight">RAN PUMPS</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Unleashing the Power of Water. High-performance pumping solutions for agricultural, domestic, and industrial applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-aqua-cyan">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Applications', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-aqua-cyan">Our Products</h4>
            <ul className="space-y-4">
              <li>Openwell Pumps</li>
              <li>Borewell Pumps</li>
              <li>Booster Pumps</li>
              <li>Monobloc Pumps</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-aqua-cyan">Contact Info</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-aqua-cyan shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-aqua-cyan shrink-0" />
                <span>{CONTACT_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-aqua-cyan shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm">
            © {currentYear} RAN Pumps Industries. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp FAB */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce cursor-pointer"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
}
