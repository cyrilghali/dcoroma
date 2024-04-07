import Hero from '~/components/Hero'
import Team from '~/components/Team'
import SocialLinks from '~/components/SocialLinks'
import { CityChurches } from '~/components/CityChurches'
import DonationCallToAction from '~/components/DonationCallToAction'
import Footer from '~/components/Footer'

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
