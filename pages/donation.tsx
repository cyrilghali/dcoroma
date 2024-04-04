import type { NextPage } from 'next'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Title } from 'components/Title'
import Verse from 'components/Verse'
import Divider from 'components/Divider'
import IBAN from 'components/IBAN'

const Contact: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title='Donazione' />
      <Verse />
      <Divider />
      <IBAN />
      <Footer />
    </div>
  )
}

export default Contact
