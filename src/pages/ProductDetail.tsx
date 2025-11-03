import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CheckCircle, Phone, MessageCircle, Shield, Award } from 'lucide-react';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/" replace />;
  }

  const product = getProductById(id);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = '+254734410310';
    const message = `Hello! I would like to order ${product.name} (KSh ${product.price}). Please provide more information about availability and delivery.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallOrder = () => {
    window.location.href = 'tel:+254734410310';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacer */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                {product.category}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-industrial text-center">
                <Truck className="text-success mx-auto mb-2" size={24} />
                <div className="font-semibold text-success">Free Delivery</div>
                <div className="text-sm text-muted-foreground">Nationwide</div>
              </div>
              <div className="card-industrial text-center">
                <Shield className="text-primary mx-auto mb-2" size={24} />
                <div className="font-semibold text-primary">Quality Assured</div>
                <div className="text-sm text-muted-foreground">International Standards</div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Basic Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="text-3xl font-bold text-primary mb-4">
                KSh {product.price.toLocaleString()}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="card-industrial">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-success flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            {product.applications && (
              <div className="card-industrial">
                <h3 className="text-xl font-bold text-foreground mb-4">Applications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div className="card-industrial">
                <h3 className="text-xl font-bold text-foreground mb-4">Specifications</h3>
                <div className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="text-muted-foreground text-sm">
                      • {spec}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Order Section */}
            <div className="card-industrial bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Ready to Order?</h3>
              <p className="text-muted-foreground mb-6">
                Get in touch with our team to place your order or discuss your specific requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsAppOrder}
                  className="flex-1 btn-whatsapp flex items-center justify-center gap-3"
                >
                  <MessageCircle size={20} />
                  Order via WhatsApp
                </button>
                
                <button 
                  onClick={handleCallOrder}
                  className="flex-1 btn-primary flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  Call: +254 734 410 310
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 pt-6 border-t border-border">
              <div className="text-center">
                <Award className="text-accent mx-auto mb-1" size={24} />
                <div className="text-sm font-semibold text-foreground">Quality Certified</div>
              </div>
              <div className="text-center">
                <Truck className="text-success mx-auto mb-1" size={24} />
                <div className="text-sm font-semibold text-foreground">Free Delivery</div>
              </div>
              <div className="text-center">
                <Shield className="text-primary mx-auto mb-1" size={24} />
                <div className="text-sm font-semibold text-foreground">Trusted Brand</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Other Products You Might Like
          </h2>
          <div className="text-center">
            <Link 
              to="/#products" 
              className="btn-accent inline-flex items-center gap-2"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;