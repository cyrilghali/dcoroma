import type { NextPage } from 'next'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Title } from 'components/Title'
import LibraryTables from 'components/LibraryTable'
import books from 'data/library/books'
import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
const Books: NextPage = () => {
  const [filteredBooks, setFilteredBooks] = useState(books)

  const handleSearch = (searchTerm) => {
    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredBooks(filtered)
  }
  return (
    <div>
      <Header />
      <Title title='Libri Spirituali' />
      <SearchBar onSearch={handleSearch} />
      <LibraryTables docs={filteredBooks} />
      <Footer />
    </div>
  )
}

export default Books
