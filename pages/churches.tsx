import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

const cities = [
  {
    name: 'Roma',
    title: 'Nella capitale italiana ci sono piu di 5 chiese Copte con oltre 200 famiglie.',
    images: '/photos/colosseo.jpg',
    url: '/city/roma'
  },
  {
    name: 'Torino',
    title: 'Torino è la seconda città con maggiore presenza di copti della diocesi.',
    images: '/photos/torino.jpg',
    url: '/city/roma'
  },
  {
    name: 'Firenze',
    title: 'Nella meravigliosa città di Firenze vi sono presenti altri copti della diocesi.',
    images: '/photos/firenze.jpg',
    url: '/city/roma'
  },
  {
    name: 'Reggio Emilia',
    title: 'Nella meravigliosa città emiliana vi sono presenti altri copti della diocesi.',
    images: '/photos/reggioemilia.jpg',
    url: '/city/roma'
  }
]

const Churches: NextPage = () => {
  return (
    <div>
      <Header />
      <CityCard />
      <Footer />
    </div>
  )
}

function CityCard(){
  
  return(
    <ul role="list" className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cities.map((city) => (
        <li
          key={city.name}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg divide-y divide-gray-200"
        >
    
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href={city.url}>
            <img className="rounded-t-lg" src={city.images} alt=""/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{city.name}</h5>
            <p className="text-gray-700 text-base mb-4">
              {city.title}
            </p>
          </div>
        </div>
      </div> 
      </li>
    ))}
    </ul>
  )
}
export default Churches
