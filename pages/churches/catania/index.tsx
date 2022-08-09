import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import catania from '../../../data/churches/catania.js'

export default function Catania() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di catania" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {catania.filter(church => church.href).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={church.href}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
