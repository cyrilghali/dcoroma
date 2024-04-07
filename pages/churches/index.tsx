import { CityChurches } from 'components/CityChurches'
import Footer from 'components/Footer'
import Header from 'components/Header'
import type { NextPage } from 'next'

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
