import { ArrowRight, Package, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {
  const handleWhatsAppOrder = (product: typeof products[0]) => {
    const phoneNumber = '+254734410310';
    const message = `Hello! I would like to order ${product.name} (KSh ${product.price}). Please provide more information.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Premium Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality cement and construction materials, 
            engineered for excellence and built to last.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className={`card-product fade-in-up delay-${(index + 1) * 100}`}>
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="text-success" size={16} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">KSh {product.price.toLocaleString()}</span>
                    <div className="flex items-center space-x-1 text-success text-sm">
                      <Truck size={14} />
                      <span>Free Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link 
                    to={`/product/${product.id}`}
                    className="flex-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold py-3 px-4 rounded-xl text-center transition-colors"
                  >
                    View Details
                  </Link>
                  
                  <button 
                    onClick={() => handleWhatsAppOrder(product)}
                    className="flex-1 btn-whatsapp flex items-center justify-center gap-2"
                  >
                    <Package size={18} />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center card-industrial max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Our team of experts is ready to help you find the perfect cement solution for your specific project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+254734410310"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Call Our Experts
            </a>
            <button 
              onClick={() => {
                const phoneNumber = '+254734410310';
                const message = 'Hello! I need custom cement solutions for my project. Can you help me?';
                const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="btn-accent inline-flex items-center justify-center gap-2"
            >
              WhatsApp Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;