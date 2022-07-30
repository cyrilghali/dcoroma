import type { NextPage } from 'next'
import Header from '../components/Header'
import ContactCards from '../components/ContactCards'
import Footer from '../components/Footer'

const Contact: NextPage = () => {
  return (
    <div>
      <Header />
      <ContactCards /> 
      <Footer />
    </div>
  )
}

export default Contact
