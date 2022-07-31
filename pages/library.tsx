import type { NextPage } from 'next'
import Header from '../components/Header'
import LibraryCards from '../components/LibraryCards'
import Footer from '../components/Footer'

const Contact: NextPage = () => {
  return (
    <div>
      <Header />
      <LibraryCards /> 
      <Footer />
    </div>
  )
}

export default Contact
