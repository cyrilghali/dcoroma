import type { NextPage } from 'next'
import Header from '~/components/Header'
import Title from '~/components/Title'
import LibraryCards from '~/components/LibraryCards'
import Footer from '~/components/Footer'

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
