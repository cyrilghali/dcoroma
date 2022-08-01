import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Title } from '../components/Title'
import NewsCards from '../components/NewsCards'

const News: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Notizie" /> 
      <NewsCards />
      <Footer />
    </div>
  )
}

export default News
