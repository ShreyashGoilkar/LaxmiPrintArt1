import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PriceEstimator from './components/PriceEstimator';
import StationeryProducts from './components/StationeryProducts';
import PortfolioGallery from './components/PortfolioGallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export function App() {
  return (
    <div className="min-h-screen bg-[#fafbfd] text-slate-900 flex flex-col antialiased selection:bg-blue-600 selection:text-white pb-14 sm:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <PriceEstimator />
        <StationeryProducts />
        <PortfolioGallery />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
