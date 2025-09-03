import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhoWeServe from '@/components/WhoWeServe';
import OurProject from '@/components/OurProject';
import ImpactOfSupport from '@/components/ImpactOfSupport';
import Testimonials from '@/components/Testimonials';
import DonationCTA from '@/components/DonationCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhoWeServe/>
        <OurProject/>
        <ImpactOfSupport/>
        <Testimonials/>
      </main>
      <DonationCTA/>
      <Footer/>
    </div>
  );
};

export default Index;
