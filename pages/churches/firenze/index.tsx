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
                <HomeTitle title="Chiese di Roma" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {firenze.filter(church => church.href).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={church.href}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
