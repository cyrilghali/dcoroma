import type { NextPage } from 'next'
import Header from '../components/Header'
import ContactCards from '../components/ContactCards'
import Footer from '../components/Footer'
import { Title } from '../components/Title'

interface Title {
}
const Contact: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title={"Contatti"} />
      <ContactCards /> 
      <Footer />
    </div>
  )
}

export default Contact
