import { ArrowRight, Shield, Award, Truck } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up">
            Building Kenya's
            <span className="block text-accent-light">Future Together</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto fade-in-up delay-100">
            Premium quality cement and construction materials delivered nationwide. 
            Trusted by professionals, built for excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up delay-200">
            <button 
              onClick={scrollToProducts}
              className="btn-accent inline-flex items-center justify-center gap-2 text-lg"
            >
              Explore Products
              <ArrowRight size={20} />
            </button>
            
            <a 
              href="tel:+254734410310"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
            >
              Call Now: +254 734 410 310
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto fade-in-up delay-300">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Shield className="text-accent-light" size={32} />
              </div>
              <h3 className="font-semibold text-lg">Premium Quality</h3>
              <p className="text-white/80 text-sm">International standards guaranteed</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Truck className="text-accent-light" size={32} />
              </div>
              <h3 className="font-semibold text-lg">Free Delivery</h3>
              <p className="text-white/80 text-sm">Fast nationwide shipping</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Award className="text-accent-light" size={32} />
              </div>
              <h3 className="font-semibold text-lg">Trusted Brand</h3>
              <p className="text-white/80 text-sm">Decades of excellence in Kenya</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;