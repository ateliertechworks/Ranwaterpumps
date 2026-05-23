import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images';

export default function About() {
  const highlights = [
    "High performance",
    "Energy efficiency",
    "Durable engineering",
    "Long-lasting reliability"
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-blue/5 rounded-full blur-[120px] -z-10" style={{ willChange: 'filter' }} />
            <img
              src={IMAGES.about}
              alt="RAN Pumps Manufacturing"
              loading="lazy"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
              Quality & Innovation
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-dark-blue mb-8 leading-tight">
              About RAN Pumps Industries
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              RAN Pumps Industries is a trusted manufacturer of high-quality pumping solutions based in Coimbatore, Tamil Nadu. With over 10 years of excellence in pumping technology, we provide reliable and efficient products for agricultural, domestic, and industrial applications.
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has helped us build long-term trust across the market.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-dark-blue tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
