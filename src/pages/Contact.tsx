import ContactForm from '@/components/contact/ContactForm'
import ContactHeader from '@/components/contact/ContactHeader'
import FindUs from '@/components/contact/FindUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHeader/>
        <ContactForm/>
        <FindUs/>
      </main>
      <Footer/>
    </div>
  )
}

export default Contact