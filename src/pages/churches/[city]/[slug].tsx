// pages/[city]/[slug].js

import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllChurchSlugs, getChurchData } from 'src/lib/cities'
import Error404 from '~/components/NotFoundPage'
import Header from '~/components/Header'
import { ChurchDetail } from '~/components/ChurchDetail'
import Footer from '~/components/Footer'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllChurchSlugs() // [{ params: { city: 'roma', slug: 'san-pietro' } }, ...]
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const churchData = await getChurchData(params.city, params.slug)
  if (!churchData) {
    return { notFound: true }
  }
  return { props: { church: churchData }, revalidate: 1 }
}

const ChurchPage = ({ church }) => {
  if (!church) {
    return <Error404 />
  }
  return (
    <div>
      <Header />
      <ChurchDetail churchData={church} />
      <Footer />
    </div>
  )
}

export default ChurchPage
