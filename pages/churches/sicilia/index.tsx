import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import sicilia from '../../../data/churches/sicilia.js'

export default function Catania() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Catania, Palermo, Ragusa e Acireale" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {sicilia.filter(church => church.href).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={`/churches/sicilia/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
