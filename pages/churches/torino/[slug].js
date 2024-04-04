import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { ChurchDetail } from '../../../components/ChurchDetail'
import Error404 from '../../../components/error'
import torino from '../../../data/churches/torino'

export async function getStaticPaths() {
  return {
    paths: torino.map((church) => ({
      params: {
        slug: church.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = torino.find((church) => church.slug === params.slug)
  return {
    props: { church: res },
    revalidate: 1,
  }
}
export default function Church({ church }) {
  if (church == null || typeof church == 'undefined') {
    return (
      <>
        <Error404 />
      </>
    )
  } else {
    return (
      <div>
        <Header />
        <ChurchDetail
          churchName={church.churchName}
          churchImageUrl={church.churchImageUrl}
          monthlyMassSchedule={church.monthlyMassSchedule}
          massSchedule={church.massSchedule}
          referentId={church.referentID}
          location={church.location}
          locationUrl={church.locationUrl}
        />
        <Footer />
      </div>
    )
  }
}
