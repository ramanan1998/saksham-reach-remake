import DonationCTA from "@/components/DonationCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TeamHeader from "@/components/our-team/TeamHeader";

const JoinUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TeamHeader/>
      </main>
      <DonationCTA/>
      <Footer/>
    </div>
  );
};

export default JoinUs;