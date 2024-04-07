import type { NextPage } from 'next'
import Header from '~/components/Header'
import { CityChurches } from '~/components/CityChurches'
import Footer from '~/components/Footer'

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
