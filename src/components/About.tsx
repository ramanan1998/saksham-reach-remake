import { Button } from './ui/button';
import { Heart, Users, Shield, Star, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Service and Sharing",
      description: "We are committed to serving others and sharing resources with those in need."
    },
    {
      icon: Users,
      title: "Equality",
      description: "We believe in equal opportunities and rights for all people, regardless of disability."
    },
    {
      icon: Shield,
      title: "Moral Uprightness",
      description: "We maintain the highest ethical standards in all our activities and interactions."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in our programs and services to maximize impact."
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "We operate with complete transparency in our finances and decision-making processes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">SAKSHAM</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 container">
          {/* Mission */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SAKSHAM was established with an aim to bring all the persons with various 
                disabilities in the mainstream of our nation. SAKSHAM believes that the 
                disabled people are not burden on the society but assets of the nation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SAKSHAM firmly believes in the unique potential of every individual. 
                Dedicated to empowering specially abled people, SAKSHAM strives to 
                integrate them to national mainstream, enabling them to contribute to 
                their families and the growth of humanity.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary animate-fade-in">
            <blockquote className="text-xl italic text-foreground mb-4">
              "All our services are rendered without any discrimination on caste, 
              creed, religion or gender."
            </blockquote>
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Core Values */}
        <div className="animate-slide-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 px-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;