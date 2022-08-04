import type { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Title } from '../../components/Title'
import LibraryTables from '../../components/LibraryTable'
import books from '../../data/library/books'
const Books: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Libri Spirituali" />
      <LibraryTables docs={books}/>
      <Footer />
    </div>
  )
}

export default Books
