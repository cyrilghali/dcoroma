import type { NextPage } from 'next'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Title } from 'components/Title'
import Verse from 'components/Verse'
import Divider from 'components/Divider'
import IbanComponent from '@/components/IbanComponent'

const Donation: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title='Donazione' />
      <Verse />
      <Divider />
      <IbanComponent />
      <Footer />
    </div>
  )
}

export default Donation
