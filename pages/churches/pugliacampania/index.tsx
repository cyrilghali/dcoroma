import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import puglia_campania from '../../../data/churches/puglia_campania.js'

export default function PugliaCampania() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Avellino, Scafati e Brindisi" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {puglia_campania.filter(church => church.href).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={`/churches/pugliacampania/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
