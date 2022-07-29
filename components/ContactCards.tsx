/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const people = [
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  {
    name: 'S.E. Mons. Barnaba el Soryany',
    title: 'Vescovado della diocesi copta ortodossa di San Giorgio Roma',
    email: 'mons.barnaba@hotmail.com',
    telephone: '+393381341131',
    imageUrl:
      'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  // More people...
]

export default function ContactCards() {
  return (
  <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
  <div className="space-y-12">
    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contatti</h2>
    </div>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto object-contain rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              <dt className="sr-only">Role</dt>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
  </div>
  )
}

