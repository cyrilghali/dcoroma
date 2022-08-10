import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import churches from '../../../data/churches'

export async function getStaticPaths() {
  return {
    paths: churches.map((church) => ({
      params: {
        city: church.city,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = churches.find((church) => church.city === params.city)
  return {
    props: { churchesRes: res },
    revalidate: 1,
  }
}
export default function City({ churchesRes }) {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title={`Chiese di ${churches[0].city}`} />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {churchesRes.filter(church => church.href).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={`/churches/${church.city}/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
