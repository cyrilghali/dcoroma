import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { ChurchDetail } from '../../../components/ChurchDetail';
import roma from '../../../data/churches/roma';
import Error404 from '../../../components/error'

export default function Sanmarco () {
  const church = roma.find((church) => 849183===church.id);
  console.log(church);
  if (church == null || typeof church == 'undefined' )
  {
    return (
    <>
      <Error404 />
    </>
    );
  }
  else {
  return (
    <div>
      <Header />
      <ChurchDetail 
      churchName={church.churchName} 
      churchImageUrl={church.churchImageUrl}
      massSchedule={[
      church.massSchedule.monday, 
      church.massSchedule.tuesday, 
      church.massSchedule.wednesday, 
      church.massSchedule.thursday, 
      church.massSchedule.friday, 
      church.massSchedule.saturday, 
      church.massSchedule.sunday, 
      ]}
      referentId={church.referentID}/>
      <Footer />
    </div>
  )
};  
}
