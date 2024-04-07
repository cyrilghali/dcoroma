import { CityChurches } from '~/components/CityChurches'
import DonationCallToAction from '~/components/DonationCallToAction'
import Footer from '~/components/Footer'
import Hero from '~/components/Hero'
import SocialLinks from '~/components/SocialLinks'
import Team from '~/components/Team'

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
