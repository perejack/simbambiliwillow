import { 
  Shield, 
  Award, 
  Clock, 
  Truck, 
  Users, 
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'International Quality Standards',
      description: 'Our products meet and exceed international cement quality standards, ensuring reliability for every project.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: '25+ Years of Excellence',
      description: 'Decades of proven track record in the Kenyan construction industry with thousands of successful projects.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Clock,
      title: 'Fast & Reliable Delivery',
      description: 'Nationwide delivery network ensures your cement arrives on time, every time, keeping your projects on schedule.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      title: 'Free Nationwide Shipping',
      description: 'Enjoy complimentary delivery across Kenya, making premium cement accessible everywhere.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Expert Technical Support',
      description: 'Our team of cement experts provides technical guidance and support throughout your construction journey.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Latest manufacturing technology ensures consistent quality and superior performance in all conditions.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const achievements = [
    { number: '10,000+', label: 'Projects Completed', icon: CheckCircle },
    { number: '500+', label: 'Trusted Partners', icon: Users },
    { number: '99.9%', label: 'Quality Rate', icon: Star },
    { number: '24/7', label: 'Customer Support', icon: Clock },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Simba Cement?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just a cement supplier – we're your construction partner, committed to 
            delivering excellence in every bag and building lasting relationships.
          </p>
        </div>

        {/* Achievements Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center card-industrial">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-3">
                <achievement.icon className="text-white" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {achievement.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`card-product group hover:scale-105 fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center card-industrial bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of satisfied customers who trust Simba Cement for their construction needs. 
              Let's build Kenya's future together, one project at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Explore Our Products
              </button>
              
              <a 
                href="tel:+254734410310"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Get Expert Advice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;