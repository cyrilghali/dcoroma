import Hero from 'components/Hero'
import Team from 'components/Team'
import Footer from 'components/Footer'
import SocialLinks from 'components/SocialLinks'
import DonationCallToAction from '@/components/DonationCallToAction'
import { CityChurches } from 'components/CityChurches'

const Home = () => {
  return (
    <div>
      <Hero />
      <Team />
      <SocialLinks />
      <CityChurches />
      <DonationCallToAction />
      <Footer />
    </div>
  )
}

export default Home
