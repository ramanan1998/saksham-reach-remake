import DonationCTA from "@/components/DonationCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JoinOurTeam from "@/components/our-team/JoinOurTeam";
import LeadershipTeam from "@/components/our-team/LeadershipTeam";
import ProjectCordinators from "@/components/our-team/ProjectCordinators";
import TeamHeader from "@/components/our-team/TeamHeader";

const OurTeam = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TeamHeader/>
        <LeadershipTeam/>
        <ProjectCordinators/>
        <JoinOurTeam/>
      </main>
      <DonationCTA/>
      <Footer/>
    </div>
  );
};

export default OurTeam;