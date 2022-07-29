/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'S.S Papa Teodoro II',
    role: 'Papa della Chiesa Copta Ortodossa',
    imageUrl: 
    'https://egyptwatch.net/wp-content/uploads/2020/08/116787545_3241641062541115_288411126836079255_n.jpg',
    twitterUrl: 'https://twitter.com/popetawadros',
  },
  {
    name: 'S.E Anba Barnaba El Soryany',
    role: 'Vescovo della Chiesa Copta Ortodossa – Roma.', 
    imageUrl:
    'https://eglisecopte.ch/wp-content/uploads/2017/11/anba-bernaba.jpg',
  },
  // More people...
]

export default function Team() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">La Diocesi</h2>
            <p className="text-xl text-gray-500">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis
              neque.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <img className="mx-auto h-40 w-40 object-contain rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-rose-900">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

