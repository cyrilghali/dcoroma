import Header from '../components/Header'
import Footer from '../components/Footer'
import { Title } from '../components/Title'
import { fetchAPI } from "../lib/api"
import NewsCards from '../components/NewsCards'

const News = ({articles}) => {
  return (
    <div>
      <Header />
      <Title title="Notizie" /> 
      <NewsCards articles={articles} />
      <Footer />
    </div>
  )
}

export default News;

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
  ])

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  }
}
