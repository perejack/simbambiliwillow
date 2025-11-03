import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import simbaLogo from '../assets/simba-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.includes(href.replace('/#', ''));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={simbaLogo} 
              alt="Simba Cement" 
              className="h-8 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Phone Number - Desktop */}
            <div className="flex items-center space-x-2 text-primary font-semibold">
              <Phone size={18} />
              <span>+254 734 410 310</span>
            </div>
          </nav>

          {/* Mobile Menu Button & Phone */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Phone Number - Mobile */}
            <div className="flex items-center space-x-1 text-primary text-sm font-semibold">
              <Phone size={16} />
              <span className="hidden sm:inline">+254 734 410 310</span>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;