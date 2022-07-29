import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import Stats from '../components/Stats'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Team />
      <FAQ /> 
      <Stats />
      
      <Footer />
    </div>
  )
}

export default Home
