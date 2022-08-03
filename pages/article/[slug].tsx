import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { fetchAPI } from "../../lib/api"


export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}


const Article = ({ article }) => {
  return (
    <div>
      <Header />
      {article.attributes.title}
      <Footer />
    </div>
  )
}

export default Article
