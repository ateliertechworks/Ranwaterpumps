import { motion } from 'motion/react';
import { useState } from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { PRODUCTS, CONTACT_INFO } from '../constants';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName: string, powerRange: string) => {
    const text = `Hello RAN Pumps Industries,

I am interested in:
Product: ${productName}
Power Range: ${powerRange}

Please share:
• Price
• Specifications
• Availability`;
    return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
              Product Catalog
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-dark-blue">Engineered for Performance</h3>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${
                  activeCategory === cat 
                    ? 'bg-dark-blue text-white shadow-xl shadow-blue-900/20' 
                    : 'bg-light-gray text-slate-500 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="pump-card flex flex-col group h-full border-slate-100 hover:border-primary-blue/30"
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] bg-light-gray border border-slate-50">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1.5 bg-white shadow-lg text-[10px] font-extrabold text-primary-blue rounded-full">
                    {product.powerRange}
                  </span>
                </div>
              </div>
              
              <div className="flex-grow px-2">
                <h4 className="text-xl font-bold text-dark-blue mb-4 group-hover:text-primary-blue transition-colors line-clamp-2 tracking-tight">
                  {product.name}
                </h4>
                <p className="text-sm text-slate-500 mb-8 line-clamp-3 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-50 mt-auto">
                <a
                  href={getWhatsAppLink(product.name, product.powerRange)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-light-gray text-dark-blue rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all hover:bg-primary-blue hover:text-white"
                >
                  <MessageCircle size={20} />
                  <span>Get Quote</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
