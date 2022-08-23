import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import novara from '../../../data/churches/novara.js'

export default function Novara() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Novara" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {novara.filter(church => church.slug).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} className="object-top" href={`/churches/novara/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
