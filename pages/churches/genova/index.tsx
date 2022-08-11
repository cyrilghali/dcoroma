import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import genova from '../../../data/churches/genova.js'

export default function Genova() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Genova" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {genova.filter(church => church.slug).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={`/churches/genova/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
