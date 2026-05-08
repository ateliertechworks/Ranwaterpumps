import { motion } from 'motion/react';
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello RAN Pumps Industries,
My Name: ${formData.name}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
    
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 bg-white rounded-lg text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              Headquarters
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-dark-blue mb-8 tracking-tight">Contact Us</h3>
            <p className="text-lg text-slate-600 mb-12 font-medium">
              Have questions about our pumps or need a custom solution? Reach out to us through any of these channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center text-primary-blue flex-shrink-0">
                   <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-blue mb-1 tracking-tight">Our Address</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center text-primary-blue flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-blue mb-1 tracking-tight">Call Now</h4>
                  <div className="space-y-1">
                    {CONTACT_INFO.phones.map(phone => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-slate-500 font-medium hover:text-primary-blue transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center text-primary-blue flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-blue mb-1 tracking-tight">Email Us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-500 font-medium hover:text-primary-blue transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary-blue text-white rounded-xl font-bold flex items-center space-x-2 hover:bg-dark-blue transition-all"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-dark-blue border border-gray-200 rounded-xl font-bold flex items-center space-x-2 hover:bg-gray-50 transition-all"
              >
                <Navigation size={20} />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100"
          >
            <h4 className="text-2xl font-bold text-dark-blue mb-8 tracking-tight">Send a Message</h4>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-light-gray rounded-2xl border border-transparent focus:border-primary-blue focus:bg-white outline-none transition-all font-medium" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-light-gray rounded-2xl border border-transparent focus:border-primary-blue focus:bg-white outline-none transition-all font-medium" 
                    placeholder="+91 00000 00000" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-light-gray rounded-2xl border border-transparent focus:border-primary-blue focus:bg-white outline-none transition-all font-medium" 
                  placeholder="Interested in Borewell Pump" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-light-gray rounded-2xl border border-transparent focus:border-primary-blue focus:bg-white outline-none transition-all resize-none font-medium text-slate-600" 
                  placeholder="How can we help you?" 
                />
              </div>
              <button type="submit" className="w-full py-5 sleek-gradient text-white rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/20 active:scale-[0.98] transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
