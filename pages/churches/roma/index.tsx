import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import roma from '../../../data/churches/roma.js'

export default function Roma() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Roma" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {roma.filter(church => church.slug).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} className="object-top" href={`/churches/roma/${church.slug}`}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
