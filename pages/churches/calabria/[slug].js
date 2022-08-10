import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { ChurchDetail } from '../../../components/ChurchDetail';
import Error404 from '../../../components/error'
import calabria from '../../../data/churches/calabria'

export async function getStaticPaths() {
  return {
    paths: calabria.map((church) => ({
      params: {
        slug: church.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = calabria.find((church) => church.slug === params.slug)
  return {
    props: { church: res },
    revalidate: 1,
  }
}
export default function Church ({ church }) {
  if (church == null || typeof church == 'undefined' )
  {
    return (
    <>
      <Error404 />
    </>
    );
  }
  else {
  return (
    <div>
      <Header />
      <ChurchDetail 
      churchName={church.churchName} 
      churchImageUrl={church.churchImageUrl}
      monthlyMassSchedule={church.monthlyMassSchedule}
      massSchedule={[
      church.massSchedule?.monday, 
      church.massSchedule?.tuesday, 
      church.massSchedule?.wednesday, 
      church.massSchedule?.thursday, 
      church.massSchedule?.friday, 
      church.massSchedule?.saturday, 
      church.massSchedule?.sunday, 
      ]}
      referentId={church.referentID}
      location={church.location}
      locationUrl={church.locationUrl}
      />
      <Footer />
    </div>
  )
};  
}


