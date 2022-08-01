import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Title } from '../components/Title'
import Verse from '../components/Verse'
import { DonationCards } from '../components/DonationCards'
import Divider from '../components/Divider'

const Contact: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Donazione" />
      <Verse />
      <Divider />
      <DonationCards />
      <Footer />
    </div>
  )
}

export default Contact
