
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import DonationCTA from '@/components/DonationCTA';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
      </main>
      <DonationCTA/>
      <Footer/>
    </div>
  );
};

export default AboutUs;