import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import matera from '../../../data/churches/matera.js'

export default function Genova() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Matera" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {matera.filter(church => church.slug).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={`/churches/matera/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
