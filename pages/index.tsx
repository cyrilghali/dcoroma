import Hero from '../components/Hero'
import Team from '../components/Team'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import DonationCTA from '../components/DonationCTA'
import { CityChurches } from '../components/CityChurches'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <Team />
      <SocialLinks />
      <CityChurches />
      <DonationCTA />
      <Footer />
    </div>
  )
}



export default Home
