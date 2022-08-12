import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import firenze from '../../../data/churches/firenze.js'

export default function Firenze() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Firenze" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {firenze.filter(church => church.slug).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} className="object-top" href={`/churches/firenze/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
