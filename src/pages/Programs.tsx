
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonationCTA from '@/components/DonationCTA';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {

    const programList = [
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/Netra-Kumbh.jpg",
            text: "Baba Ramdev Netra Kumbh 2025"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/Hearing-Impaired.jpg",
            text: "PRANAV Center of Excellence"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/scan.jpeg",
            text: "SCAN (SAKSHAM Covid Action Network)"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/image-001-1.jpg",
            text: "CAMBA (Cornea Andhatv Mukt Bharat Abhiyan)"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/dheemahi.jpg",
            text: "Dheemahi"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/Netra-Kumbh.jpg",
            text: "Netrakumbh"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/FB_IMG_1625118177226.jpg",
            text: "Divyang Seva Kendra"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/Praanada-1.jpg",
            text: "Praanada"
        },
    ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full bg-gradient-to-r from-green-700 to-green-800 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">Programs</h2>

          </div>
        </section>

        <div className='py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full lg:w-[80%] mx-auto'>
            {programList.map(item => (
                <Card key={item.text} className="mx-auto w-full pt-0 overflow-hidden">
                    <div className='h-72'>
                        <img
                            src={item.img}
                            alt="img"
                            className="h-full w-full object-cover"
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

export default Programs;