import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TheShift from './components/TheShift'
import WhyCodeIsNotEnough from './components/WhyCodeIsNotEnough'
import TheStack from './components/TheStack'
import HowItWorks from './components/HowItWorks'
import WhyThisMatters from './components/WhyThisMatters'
import ForEnterprises from './components/ForEnterprises'
import Credibility from './components/Credibility'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)

  return (
    <>
      <Nav onContact={openContact} />
      <main>
        <Hero />
        <TheShift />
        <WhyCodeIsNotEnough />
        <TheStack />
        <HowItWorks />
        <WhyThisMatters />
        <ForEnterprises />
        <Credibility />
      </main>
      <Footer onContact={openContact} />
      <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
