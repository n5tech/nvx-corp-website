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

export default function App() {
  return (
    <>
      <Nav />
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
      <Footer />
    </>
  )
}
