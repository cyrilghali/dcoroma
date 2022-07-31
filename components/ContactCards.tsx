/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const people = [
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovo della Diocesi Copto Ortodossa di San Giorgio, Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      '/anba-bernaba.jpg',
  },
  {
    name: 'Padre Youhanna el Soryany',
    title: 'Chiesa di San Mina e Papa Kyrellos e Chiesa di San Marco, Roma',
    telephone: '+393285933308',
    imageUrl: '/father_youhannaelsoryany.jpg',
  },
  {
    name: 'Vicario episcopale Rev. Padre Thaoufilos el Soryany',
    title: 'Chiesa di S. Giorgio Via Sante Bargellini, 13A 00157 Roma',
    telephone: '+393397934612',
    imageUrl: '/abounathaoufilos.jpg',
  },
  {
    name: 'Padre Mikhail El Antony',
    title: 'Chiesa di S. Giorgio Via Sante Bargellini, 13A 00157 Roma',
    email: '',
    telephone: '+393516620223',
    imageUrl: '/abounamikhail.jpg',
  },
  {
    name: 'Padre Pola el Akhmimi',
    title: 'Chiesa di S. Giorgio Piazza Carlo Alberto, Catania',
    telephone: '+393278994129',
    email: 'ppola_p@yahoo.com',
    imageUrl: '/padre_bola_akhmimy.jpg',
  },
  {
    name: 'Padre Samaan el Anba Pola',
    title: 'Chiesa di S. Giorgio Via Sante Bargellini, 13A 00157 Roma',
    telephone: '+393899146048',
    email: 'samaan_fr@yahoo.com',
    imageUrl: '/samaan_elanbapola.jpg'
  },
  {
    name: 'Padre Armia el Antony',
    title: "Chiesa dell'Arcangelo Raffaele, Piazza San Domenico 3, 42100 Reggio Emilia", 
    telephone: '+393282080997',
    email: 'abonaarmia@gmail.com',
    imageUrl: '/abuna_armia_elantony.jpg'
  },
  {
    name: 'Padre Youhanna el Antony Ava Mousa',
    title: "Chiesa di S. Giorgio Via Sante Bargellini, 13A 00157 Roma. \n Chiesa San Macario Ostia, Roma. \n Chiesa dell'Arcangelo Mikhail Frascati, Roma.", 
    telephone: '+393890568095',
    email: 'fr.youhannas@yahoo.it',
    imageUrl: '/youhanna_elantonyavamoussa.jpg'
  },
  {
    name: 'Padre Youlios el Anba Pola',
    title: 'Chiesa di San Antonio, Geneva',
    telephone: '+393279554281',
    imageUrl: '/padre_youlios_anba_bola.jpg'
  },
  {
    name: 'Padre Antonio Gabriel',
    title: 'Chiesa di San Mina Piazza della Trasfigurazione, 2 00151 Roma, Chiesa di Mary Marcos', 
    telephone: '+393397186153',
    email: 'padreantonio40@hotmail.com',
    imageUrl: '/padre_antonio2.jpg'
  },
  {
    name: 'Padre Angelos Gaber Aiad',
    title: 'Chiesa di San Mina Via S. Bartolo in Tuto, 7 50018 Firenze',
    email: 'padreangelos@hotmail.it',
    telephone: '+393281537360',
    imageUrl: '/abunaangelos.jpg'
  },
  {
    name: 'Padre Hanania Abdelmassih',
    title: 'Monastero di San Maria, Via Laurentina, Roma',
    telephone: '+393284540988',
    imageUrl: '',
  },
  {
    name: 'Padre Maro Hagos',
    title: 'Monastero di San Maria, Via Laurentina, Roma',
    telephone: '+393894778675',
    imageUrl: '/abouna_maro.jpeg'
  },
  // More people...
]

export default function ContactCards() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          key={person.name}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
             <Image className="w-32 h-32 flex-shrink-0 mx-auto object-contain rounded-full" width={200} height={200} src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              <dt className="sr-only">Role</dt>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              { person.email ? 
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div> : <></>
              }
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Chiamata</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

