import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Team from '../components/Team'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Team />
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default Home
