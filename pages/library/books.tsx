import type { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Title } from '../../components/Title'
import LibraryTables from '../../components/LibraryTable'

const documents = [
  {name: 'Donne e Omosessualita - Papa Shenouda III', description: '', href: '/files/Donne_e_Omosessualita.pdf'},
  {name: 'Come iniziare un nuovo anno - Papa Shenouda III', description: '', href: '/files/come_iniziare_un_nuovo_anno.pdf'},
  {name: 'I vantaggi spirituali del digiuno - Papa Shenouda III', description: '', href: '/files/I_vantaggi_spirituali_del_digiuno.pdf'},
  {name: 'Dieci Definizioni - Papa Shenouda III', description: '', href: '/files/Dieci_Definizioni.pdf'},
  {name: 'Le Sette Frasi pronunciate sulla Croce - Papa Shenouda III', description: '', href: '/files/Le_Sette_Frasi_pronunciate_sulla_Croce.pdf'},
  {name: 'A te la Potenza e Gloria - Papa Shenouda III', description: '', href: '/files/A_te_la_Potenza_e_Gloria.pdf'},
  {name: 'La sapienza e il discernimento - Papa Shenouda III', description: '', href: '/files/La_sapienza_e_il_discernimento.pdf'},
  {name: 'Cenni storici balbis - Papa Shenouda III', description: '', href: '/files/cenni_storici_balbis.pdf'},
  {name: 'La Serenità - Papa Shenouda III', description: '', href: '/files/La_Serenita.pdf'},
  {name: 'Vita di conversione - Papa Shenouda III', description: '', href: '/files/Vita_di_conversione.pdf'},
  // More documents...
]

const Books: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Libri Spirituali" />
      <LibraryTables docs={documents}/>
      <Footer />
    </div>
  )
}

export default Books
