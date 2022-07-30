import Image from 'next/image'

const categories = [
  {
    name: 'Liturgia',
    imageUrl: '/anba-bernaba.jpg',
  },
  {
    name: 'Tasbeha',
    imageUrl: '/anba-bernaba.jpg',
  },
  {
    name: 'Libri spirituali',
    imageUrl: '/anba-bernaba.jpg',
  },
  {
    name: 'Settimana Santa',
    imageUrl: '/anba-bernaba.jpg',
  },
  // More categories
]

export default function LibraryCards() {
  return (
  <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
  <div className="space-y-12">
    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Libreria</h2>
    </div>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <li
          key={category.name}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
             <Image className="w-32 h-32 flex-shrink-0 mx-auto object-contain rounded-full" width={200} height={200} src={category.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{category.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  </div>
  </div>
  )
}

