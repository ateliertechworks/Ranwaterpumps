import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { APPLICATIONS } from '../constants';

export default function Industries() {
  return (
    <section id="applications" className="py-32 sleek-gradient text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-cyan-200 text-[10px] font-bold uppercase tracking-widest mb-6">
            Industries & Applications
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Where it Matters Most</h3>
          <p className="text-white/80 font-medium">Tailored pumping solutions for diverse water management needs.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {APPLICATIONS.map((app, index) => {
            const IconComponent = (Icons as any)[app.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-all" />
                <div className="w-16 h-16 rounded-[1.25rem] bg-aqua-cyan/20 flex items-center justify-center text-aqua-cyan mb-8 group-hover:scale-110 transition-transform relative z-10">
                  <IconComponent size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 relative z-10 tracking-tight">{app.title}</h4>
                <p className="text-white/70 leading-relaxed relative z-10 font-medium">{app.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
