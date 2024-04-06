import type { NextPage } from 'next'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Title } from 'components/Title'
import LibraryTables from '@/components/LibraryGrid'
import tasbeha from 'data/library/tasbeha'
import SearchBar from '@/components/SearchBar'
import { useState } from 'react'

const Tasbeha: NextPage = () => {
  const [filteredTasbeha, setFilteredTasbeha] = useState(tasbeha)

  const handleSearch = (searchTerm) => {
    const filtered = tasbeha.filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredTasbeha(filtered)
  }
  return (
    <div>
      <Header />
      <Title title='Tasbeha' />
      <SearchBar onSearch={handleSearch} />
      <LibraryTables docs={filteredTasbeha} />
      <Footer />
    </div>
  )
}

export default Tasbeha
