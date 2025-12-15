import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonationCTA from '@/components/DonationCTA';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Districts = () => {

    const districtList = [
        "Kerala",
        "Dakshin Tamilnadu",
        "Uttar Tamilnadu",
        "Dakshin Karnataka",
        "Uttar Karnataka",
        "Telangana",
        "Andhra Pradesh",
        "Gujarat",
        "Saurashtra",
        "Konkan",
        "Goa",
        "Pachim Maharashtra",
        "Devgiri",
        "Vidarbha",
        "Chhattisgarh",
        "Malwa",
        "Madhya Bharat",
        "Mahakoshal",
        "Jaipur",
        "Jodhpur",
        "Chittod",
        "Haryana",
        "Delhi",
        "J&K",
        "Himachal Pradesh",
        "Punjab",
        "Uttarakhand",
        "Meerut",
        "Braj",
        "Kanpur",
        "Awadh",
        "Kashi",
        "Goraksh",
        "Dakshin Bihar",
        "Uttar Bihar",
        "Jharkhand",
        "Paschim Odisha",
        "Poorva Odisha",
        "Dakshin Bangal",
        "Uttar Bangal",
        "Dakshin Assam",
        "Uttar Assam",
        "Arunachal Pradesh",
        "Manipur"
    ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full bg-gradient-to-r from-green-700 to-green-800 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">Districts</h2>

          </div>
        </section>

        <div className='py-10 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10 w-full px-2 lg:w-[80%] mx-auto'>
            {districtList.map(item => (
                <Card key={item} className="mx-auto w-full pt-0 overflow-hidden bg-yellow-100">
                    <CardHeader>
                        <CardTitle className='text-center text-xl text-slate-600'>
                            {item}
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

export default Districts;