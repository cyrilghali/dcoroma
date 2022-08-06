import Hero from '../components/Hero'
import Team from '../components/Team'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import DonationCTA from '../components/DonationCTA'
import { fetchAPI } from "../lib/api"
import { CityChurches } from '../components/CityChurches'
import { HomeNews } from './news'


export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles?_sort=date:DESC", { populate: "*" }),
  ])
  return {
    props: {
      articles: articlesRes.data.reverse().slice(0,4),
    },
    revalidate: 1,
  }
}
const Home = ({articles}) => {
  return (
    <div>
      <Hero />
      <Team />
      <SocialLinks />

      <CityChurches />
      <DonationCTA />
      <HomeNews articles={articles} />
      <Footer />
    </div>
  )
}



export default Home
