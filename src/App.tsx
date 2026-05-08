/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import ProductGrid from './components/ProductGrid';
import Industries from './components/Industries';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-aqua-cyan/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChooseUs />
        <ProductGrid />
        <Industries />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
