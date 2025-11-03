import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import simbaLogo from '../assets/simba-logo.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <FloatingWhatsApp />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img 
                src={simbaLogo} 
                alt="Simba Cement" 
                className="h-12 w-auto"
              />
              <p className="text-primary-foreground/80 text-sm">
                Building Kenya's future with premium quality cement and construction materials.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-primary-foreground/80 hover:text-white transition-colors">About Us</a>
                <a href="#products" className="block text-primary-foreground/80 hover:text-white transition-colors">Products</a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Our Products</h4>
              <div className="space-y-2 text-sm">
                <div className="text-primary-foreground/80">Simba Cement 32.5R</div>
                <div className="text-primary-foreground/80">Simba Power 42.5N</div>
                <div className="text-primary-foreground/80">Paving Blocks</div>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm">
                <div className="text-primary-foreground/80">Phone: +254 734 410 310</div>
                <div className="text-primary-foreground/80">Nationwide Delivery</div>
                <div className="text-primary-foreground/80">24/7 Customer Support</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 Simba Cement. A product of National Cement Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
