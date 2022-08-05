import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Team from '../components/Team'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import DonationCTA from '../components/DonationCTA'
import { Card } from '../components/Card'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Team />
      <SocialLinks />
      <DonationCTA />
      <Footer />
    </div>
  )
}

export default Home
