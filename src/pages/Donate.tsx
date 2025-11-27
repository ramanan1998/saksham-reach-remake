import DonationForm from '@/components/donate/DonateForm'
import DonateHeader from '@/components/donate/DonateHeader'
import OtherWaysToDonate from '@/components/donate/OtherwaysToDonate'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

function Donate() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DonateHeader/>
        <DonationForm/>
        <OtherWaysToDonate/>
      </main>
      <Footer/>
    </div>
  )
}

export default Donate