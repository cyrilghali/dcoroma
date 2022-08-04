import type { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Title } from '../../components/Title'
import LibraryTables from '../../components/LibraryTable'
import tasbeha from '../../data/library/tasbeha'

const Tasbeha: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Tasbeha" />
      <LibraryTables docs={tasbeha}/>
      <Footer />
    </div>
  )
}

export default Tasbeha
