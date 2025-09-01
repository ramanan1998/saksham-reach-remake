import React from 'react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Empowering Lives,</span>
              <br />
              <span className="text-foreground">Enabling Dreams</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              National Organisation Committed for the Welfare of Persons with Disability
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              SAKSHAM believes in the unique potential of every individual. We are dedicated to 
              integrating specially abled people into the national mainstream, enabling them to 
              contribute to their families and humanity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="donate" size="lg" className="text-lg px-8 py-3">
                Donate Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={heroImage}
                alt="Children learning in an inclusive classroom environment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold shadow-md">
                Changing lives since 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;