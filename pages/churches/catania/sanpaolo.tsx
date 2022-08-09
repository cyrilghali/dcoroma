

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { ChurchDetail } from '../../../components/ChurchDetail';
import catania from '../../../data/churches/catania';
import Error404 from '../../../components/error'

export default function Church () {
  const church = catania.find((church) => 500070===church.id);
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
      church.massSchedule?.monday, 
      church.massSchedule?.tuesday, 
      church.massSchedule?.wednesday, 
      church.massSchedule?.thursday, 
      church.massSchedule?.friday, 
      church.massSchedule?.saturday, 
      church.massSchedule?.sunday, 
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

