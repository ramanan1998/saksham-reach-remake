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

          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Saksham is committed to creating an environment where persons with disabilities (divyangjan) can experience inclusiveness in various fields of life—social, practical, economic, political, cultural, and spiritual etc. It envisions a society where they can live with self‐reliance, self‐respect and dignity while actively contributing to the rebuilding of the nation.
              </p>
              {/* <br />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to create an environment where people with disabilities have equal opportunities to learn, grow, and contribute to society. We work tirelessly to remove barriers and create inclusive spaces where everyone can thrive.
              </p>   */}
              <br />
              <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary animate-fade-in">
                <blockquote className="text-xl italic text-foreground mb-4">
                  <span className='font-semibold'>Kalyan Mantra</span>
                  <br />
                  Om Sarve Bhavantu Sukhinah
                  <br />
                  Sarve Santu Niraamayaah
                  <br />
                  Sarve Bhadraani Pashyantu
                  <br />
                  Maa Kashchit Duhkha Bhaag Bhavet
                  <br />
                  Om Shanti Shanti Shanti
                  
                </blockquote>
              </div>
            </div>
          </div>

          <div className='rounded-xl overflow-hidden animate-slide-up'>
            <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" alt="img" />
          </div>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 container">

          <div className='rounded-xl overflow-hidden animate-slide-up'>
            <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/3810762/pexels-photo-3810762.jpeg" alt="img" />
          </div>

          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Saksham firmly believes that every human being is endowed with divine qualities and capabilities. Similarly Saksham also holds the strong conviction that disability is an inherent part of nature’s diversity. The full participation and inclusion of persons with disabilities (Divyangjan) will not only benefit them but will also greatly serve society and the nation as a whole.
              </p>

              {/* <br />
              <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary animate-fade-in">
                <blockquote className="text-xl italic text-foreground mb-4">
                  "To setup a career path for people with disabilities from the underprivileged and disadvantaged sections of society."
                </blockquote>
              </div> */}
            </div>
          </div>
          
        </div>

        {/* Core Values */}
        <div className="animate-slide-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 px-4 md:px-20">
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