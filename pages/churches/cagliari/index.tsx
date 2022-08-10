import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import cagliari from '../../../data/churches/cagliari.js'

export default function Catania() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Cagliari" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {cagliari.filter(church => church.href).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={`/churches/cagliari/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
