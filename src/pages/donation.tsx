import type { NextPage } from 'next'
import Divider from '~/components/Divider'
import Header from '~/components/Header'
import Title from '~/components/Title'
import Verse from '~/components/Verse'
import IbanComponent from '~/components/IbanComponent'
import Footer from '~/components/Footer'

const Donation: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Donazione" />
      <Verse />
      <Divider />
      <IbanComponent />
      <Footer />
    </div>
  )
}

export default Donation
