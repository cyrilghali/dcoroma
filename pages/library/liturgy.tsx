import type { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Title } from '../../components/Title'
import LibraryTables from '../../components/LibraryTable'
import liturgy from '../../data/library/liturgy'

const Liturgy: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Liturgia" />
      <LibraryTables docs={liturgy}/>
      <Footer />
    </div>
  )
}

export default Liturgy
