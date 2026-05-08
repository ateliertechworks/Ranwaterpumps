import { motion } from 'motion/react';
import { STATS, CONTACT_INFO } from '../constants';

export default function Stats() {
  const getWhatsAppLink = (productName: string, range: string) => {
    const text = `Hello RAN Pumps Industries, I am interested in the ${productName} (Range: ${range}). Could you please share more details?`;
    return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="bg-white border-t border-slate-100 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-100 shrink-0 shadow-2xl relative z-20 overflow-hidden">
      {/* Stats Section */}
      <div className="flex-1 flex items-center justify-center py-10 px-6">
        <div className="grid grid-cols-3 gap-8 md:gap-12 w-full max-w-2xl px-4">
          {STATS.slice(0, 3).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-dark-blue flex items-center justify-center">
                <span className="group-hover:text-primary-blue transition-colors">{stat.value}</span>
                {stat.suffix && <span className="text-aqua-cyan">{stat.suffix}</span>}
              </div>
              <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Mini Products (Functional Links) */}
      <div className="flex-[1.5] bg-slate-50/50 flex flex-col md:flex-row items-center p-6 gap-6">
        <a 
          href={getWhatsAppLink("Centrifugal Monobloc", "0.37 - 0.75 kW")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 w-full h-full bg-white rounded-2xl border border-slate-100 p-4 flex gap-4 items-center group cursor-pointer hover:border-primary-blue hover:shadow-lg hover:shadow-blue-900/5 transition-all"
        >
           <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-primary-blue group-hover:text-white transition-colors">
              <div className="w-6 h-6 border-2 border-current rounded-full"></div>
           </div>
           <div>
              <h4 className="text-xs font-extrabold text-dark-blue uppercase tracking-tight">Centrifugal Monobloc</h4>
              <p className="text-[10px] text-slate-500 font-medium">Range: 0.37 - 0.75 kW</p>
              <span className="text-[9px] text-primary-blue font-bold mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity">Inquire Now →</span>
           </div>
        </a>

        <a 
          href={getWhatsAppLink("Borewell Submersible", "0.37 - 7.5 kW")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 w-full h-full bg-white rounded-2xl border border-slate-100 p-4 flex gap-4 items-center group cursor-pointer hover:border-primary-blue hover:shadow-lg hover:shadow-blue-900/5 transition-all"
        >
           <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center shrink-0 border border-cyan-100 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
              <div className="w-5 h-8 border-2 border-current rounded-sm"></div>
           </div>
           <div>
              <h4 className="text-xs font-extrabold text-dark-blue uppercase tracking-tight">Borewell Submersible</h4>
              <p className="text-[10px] text-slate-500 font-medium">Range: 0.37 - 7.5 kW</p>
              <span className="text-[9px] text-primary-blue font-bold mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity">Inquire Now →</span>
           </div>
        </a>
      </div>

      {/* Footer-like Contact Mini Info */}
      <div className="flex-1 flex flex-col justify-center px-10 py-6 gap-0.5 text-right bg-white lg:bg-transparent">
        <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Headquarters</p>
        <p className="text-[11px] text-slate-600 font-bold">Arasamara Thottam, Coimbatore</p>
        <p className="text-sm font-extrabold text-dark-blue mt-2">+91 86106 19891</p>
        <p className="text-[10px] text-slate-400 font-medium">ranpumpsindustries@gmail.com</p>
      </div>
    </section>
  );
}
