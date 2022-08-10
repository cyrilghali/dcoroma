import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import calabria from '../../../data/churches/calabria.js'

export default function Calabria() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Reggio Calabria, Cosenza e Crotone" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {calabria.filter(church => church.href).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={`/churches/calabria/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
