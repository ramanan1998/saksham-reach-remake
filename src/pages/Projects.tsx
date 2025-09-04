import DonationCTA from "@/components/DonationCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DheemahiProject from "@/components/projects/DheemahiProject";
import FinancialBreakdown from "@/components/projects/FinancialBreakdown";
import ProjectOutcomes from "@/components/projects/Outcomes";
import ProjectsHeader from "@/components/projects/ProjectHeader";
import TeachersSection from "@/components/projects/TeachersSection";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProjectsHeader/>
        <DheemahiProject/>
        <ProjectOutcomes/>
        <FinancialBreakdown/>
        <TeachersSection/>
      </main>
      <DonationCTA/>
      <Footer/>
    </div>
  );
};

export default Projects;