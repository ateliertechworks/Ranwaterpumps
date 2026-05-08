import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import { IMAGES } from '../assets/images';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero.background}
          alt="High-tech Industrial Pumping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue/98 via-dark-blue/80 to-primary-blue/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,203,225,0.1),transparent_70%)]" />
      </div>

      {/* Futuristic Grid & Data Flow Elements */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
      
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Abstract Water Wave Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          style={{ willChange: "transform" }}
          className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-cyan-300 rounded-full blur-[100px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
              Premium Water Technology
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Unleashing the <br />
              <span className="text-cyan-300 underline underline-offset-8 decoration-white/30">Power of Water</span>
            </h1>
            <p className="text-lg text-blue-50 leading-relaxed max-w-xl mb-8">
              RAN Pumps Industries delivers durable, energy-efficient, and reliable water pumping systems engineered for long-lasting performance across agricultural and domestic sectors.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#products"
                className="sleek-button-primary"
              >
                Explore Products
              </a>
              <a
                href="#about"
                className="sleek-button-outline"
              >
                Our History
              </a>
            </div>
          </motion.div>

          {/* Card removed as requested */}
        </div>
      </div>
    </section>
  );
}
