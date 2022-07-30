import Image from 'next/image'

const categories = [
  {
    name: 'Liturgia',
    imageUrl: '/icon1.jpg',
  },
  {
    name: 'Tasbeha',
    imageUrl: '/icon2.jpg',
  },
  {
    name: 'Libri spirituali',
    imageUrl: '/icon4.jpg',
  },
  {
    name: 'Settimana Santa',
    imageUrl: '/icon3.jpg',
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
          className="card-zoom col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 hover:cursor-pointer"
        >
          <div className=" h-60 bg-gray-800 rounded-lg text-gray-100 text-4xl overflow-hidden grid relative">
            <Image className="card-zoom-image bg-cover bg-center relative justify-center items-center img row-span-full col-span-full w-full min-h-full" width={200} height={200} src={category.imageUrl} alt="" />
            <div className="row-span-full col-span-full flex justify-center text-center items-center ">
              <span>{category.name}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
  </div>
  )
}

