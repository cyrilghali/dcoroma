import type { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CityChurches } from '../../components/CityChurches'


const Churches: NextPage = () => {
  return (
    <div>
      <Header />
      <CityChurches />
      <Footer />
    </div>
  )
}

export default Churches
