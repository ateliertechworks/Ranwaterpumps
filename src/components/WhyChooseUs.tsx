import { motion } from 'motion/react';
import { ShieldCheck, Zap, Cog, LayoutGrid, Headset, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Energy Efficient",
      desc: "Designed for optimal performance with reduced power consumption.",
      icon: <Zap />
    },
    {
      title: "Durable Build Quality",
      desc: "Manufactured using high-quality materials for long-term reliability.",
      icon: <ShieldCheck />
    },
    {
      title: "Advanced Technology",
      desc: "Engineered with modern technology for smooth operation.",
      icon: <Cog />
    },
    {
      title: "Wide Product Range",
      desc: "Solutions available for domestic, agricultural, and industrial needs.",
      icon: <LayoutGrid />
    },
    {
      title: "Service Support",
      desc: "Reliable customer and dealer support across the region.",
      icon: <Headset />
    },
    {
      title: "Trusted Brand",
      desc: "Serving customers with excellence for over a decade.",
      icon: <Star />
    }
  ];

  return (
    <section className="py-32 bg-light-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-white rounded-lg text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            Core Values
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-dark-blue mb-6">Why Choose RAN Pumps?</h3>
          <div className="w-24 h-1.5 sleek-gradient mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-blue/5 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all transform group-hover:scale-110">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-dark-blue mb-4 tracking-tight">{reason.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
