import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonationCTA from '@/components/DonationCTA';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Prakosht = () => {

    const prakoshtList = [
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/disabled-person.png",
            text: "Visually Challenged"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/orthopedics.png",
            text: "Orthopaedically Challenged"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/leprosy.png",
            text: "Leprosy but Cured with Disabilities"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/download.jpeg",
            text: "Blood Related Disabilities"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/5-Dheemahi-Logo-1024x610.jpg",
            text: "Intellectually Challenged"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/download-1-1024x429.jpeg",
            text: "Hearing Impaired"
        },
        {
            img: "https://sakshamseva.in/wp-content/uploads/2025/05/mental-illness.png",
            text: "Disability due to Mental Illness"
        }
    ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full bg-gradient-to-r from-green-700 to-green-800 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">Prakosht</h2>

          </div>
        </section>

        <div className='py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full px-2 lg:w-[80%] mx-auto'>
            {prakoshtList.map(item => (
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

export default Prakosht;