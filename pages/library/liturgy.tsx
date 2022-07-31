import type { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Title } from '../../components/Title'
import LibraryTables from '../../components/LibraryTable'

const documents = [
  {name: 'Agpeya', description: 'this is the book of our prayers', href: '/files/agpia.pdf'},
  {name: 'Il Santo Messale', description: 'this is the book of our prayers', href: '/files/Il_santo_messale.pdf'},
  {name: 'Santo Messale Grande', description: 'this is the book of our prayers', href: '/files/santo_messale_grande.pdf'},
  {name: 'Messa Pasqua 2020', description: 'this is the book of our prayers', href: '/files/pasqua_2020.pdf'},
  // More documents...
]

const Liturgy: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Liturgia" />
      <LibraryTables docs={documents}/>
      <Footer />
    </div>
  )
}

export default Liturgy
