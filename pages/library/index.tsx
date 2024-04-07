import Footer from 'components/Footer'
import Header from 'components/Header'
import LibraryCards from 'components/LibraryCards'
import { Title } from 'components/Title'
import type { NextPage } from 'next'

const Library: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Libreria" />
      <LibraryCards />
      <Footer />
    </div>
  )
}

export default Library
