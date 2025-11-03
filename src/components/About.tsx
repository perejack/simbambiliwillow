import { Building2, Users, Target, Zap } from 'lucide-react';
import aboutImage from '../assets/about-facility.jpg';

const About = () => {
  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '10,000+', label: 'Projects Completed' },
    { number: '500+', label: 'Trusted Partners' },
    { number: '100%', label: 'Quality Assured' },
  ];

  const values = [
    {
      icon: Building2,
      title: 'Quality Construction',
      description: 'We use cutting-edge technology to ensure the highest international standards in all our cement products.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our dedicated team works around the clock to meet your construction needs with personalized service.'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every batch is carefully engineered to deliver consistent performance across all applications.'
    },
    {
      icon: Zap,
      title: 'Innovation Leader',
      description: 'Continuously investing in research and development to bring you the most advanced cement solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Simba Cement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A product of National Cement Company, proudly Kenyan with decades of commitment to excellence
          </p>
        </div>
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-strong">
              <img
                src={aboutImage}
                alt="Simba Cement Facility"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-strong p-6 float-animation">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years of Trust</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Building Kenya's Future with 
              <span className="text-primary"> Cutting-Edge Technology</span>
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Simba Cement prides itself in its Kenyan roots and endeavours to bring out the best 
              in cement products in the country. We employ the latest cutting-edge technologies 
              that ensures we remain ahead of the game.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to setting the highest international standards in our products 
              has made us a trusted partner for construction projects across Kenya for decades.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 card-industrial">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;