import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import Stats from '../components/Stats'
import Footer from '../components/Footer'
import LibraryCards from '../components/LibraryCards'
import { Title } from '../components/Title'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Team />
      <FAQ /> 
      <Stats />
      <Title title="Libreria" />
      <LibraryCards />
      <Footer />
    </div>
  )
}

export default Home
