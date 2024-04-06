import type { NextPage } from 'next'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Title } from 'components/Title'
import LibraryTables from 'components/LibraryTable'
import liturgy from 'data/library/liturgy'
import SearchBar from '@/components/SearchBar'
import { useState } from 'react'

const Liturgy: NextPage = () => {
  const [filteredLiturgy, setFilteredLiturgy] = useState(liturgy)

  const handleSearch = (searchTerm) => {
    const filtered = liturgy.filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredLiturgy(filtered)
  }
  return (
    <div>
      <Header />
      <Title title='Liturgia' />
      <SearchBar onSearch={handleSearch} />
      <LibraryTables docs={filteredLiturgy} />
      <Footer />
    </div>
  )
}

export default Liturgy
