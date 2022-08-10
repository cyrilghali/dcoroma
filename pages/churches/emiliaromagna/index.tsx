import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import bologna from '../../../data/churches/bologna.js'

export default function Bologna() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Bologna, Rimini e Reggio Emilia" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {bologna.filter(church => church.slug).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={`/churches/emiliaromagna/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
