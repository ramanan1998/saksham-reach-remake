import DonationCTA from "@/components/DonationCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TeamHeader from "@/components/our-team/TeamHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full bg-gradient-to-r from-green-700 to-green-800 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">Join Us</h2>

            {/* Subtext */}
            <p className="mt-4 text-lg md:text-xl font-medium">
              Volunteer for Saksham
            </p>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Project Title */}
            

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left - Image */}
              <div>
                <img
                  src="https://images.pexels.com/photos/6647026/pexels-photo-6647026.jpeg"
                  alt="Volunteer img"
                  className="rounded-xl shadow-md"
                />
              </div>

              {/* Right - Details */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-800">Volunteer with us</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  SAKSHAM has a long history of accepting volunteers from different backgrounds, locally and oversees. The volunteers join SAKSHAM to exchange their skills and experiences.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  We accept volunteers for one month to one year. We usually need volunteers who are willing to help us in our project work, organize events, and help us in raising funds, support in campaigns and participate during the emergency relief work.
                </p>

                <p>Volunteers from different parts of the world have been joining SAKSHAM.</p>

                <br />
                <Button variant="donate" size="lg">
                  Volunteer
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DonationCTA/>
      <Footer/>
    </div>
  );
};

export default JoinUs;