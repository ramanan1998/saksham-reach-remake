import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonationCTA from '@/components/DonationCTA';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Aayams = () => {

    const aayamsList = [
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/woman-1.png",
            text: "Mahila"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/youth.png",
            text: "Yuva"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/running-1.png",
            text: "Krida"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/lifestyle.png",
            text: "Kala"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/lawyer.png",
            text: "Advocacy"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/experience.png",
            text: "Research (anusandan)"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/job-search.png",
            text: "Employment / Skill Developement"
        }
    ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full bg-gradient-to-r from-green-700 to-green-800 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">AAYAMs</h2>

          </div>
        </section>

        <div className='py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full px-2 lg:w-[80%] mx-auto'>
            {aayamsList.map(item => (
                <Card key={item.text} className="mx-auto w-full pt-0 overflow-hidden bg-yellow-100">
                    <div className='w-40 h-40 mx-auto mt-10'>
                        <img
                            src={item.img}
                            alt="img"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <CardHeader>
                        <CardTitle className='text-center text-xl text-primary'>
                            {item.text}
                        </CardTitle>
                    </CardHeader>
                </Card>
            ))}
            
        </div>
      </main>
      <DonationCTA/>
      <Footer/>
    </div>
  );
};

export default Aayams;