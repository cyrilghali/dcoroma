import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { ChurchDetail } from '../../../components/ChurchDetail';
import firenze from '../../../data/churches/firenze';
import Error404 from '../../../components/error'
import Firenze from '.';

export default function Sanmina () {
  const church = firenze.find((church) => 800001===church.id);
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
      referentId={church.referentID}
      location={church.location}
      locationUrl={church.locationUrl}
      />
      <Footer />
    </div>
  )
};  
}
