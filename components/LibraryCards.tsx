import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    name: 'Liturgia',
    imageUrl: '/photos/icon1.jpg',
    href: '/library/liturgy'
  },
  {
    name: 'Tasbeha',
    imageUrl: '/photos/icon2.jpg',
    href: '/library/tasbeha'
  },
  {
    name: 'Liturgia',
    imageUrl: '/photos/icon1.jpg',
    href: '/library/liturgy'
  },
  {
    name: 'Tasbeha',
    imageUrl: '/photos/icon2.jpg',
    href: '/library/tasbeha'
  },
  // More categories
]

export default function LibraryCards() {
  return (
    <ul role="list" className="grid grid-cols-1 px-4 gap-6 content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <li
          key={category.name}
          className="card-zoom content-center col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 hover:cursor-pointer"
        >
          <Link href={category.href}>
            <div className=" h-60 bg-gray-800 content-center rounded-lg text-gray-100 text-4xl overflow-hidden grid relative">
              <Image className="card-zoom-image bg-cover bg-center relative justify-center items-center img row-span-full col-span-full w-full min-h-full" width={200} height={200} src={category.imageUrl} alt="" />
              <div className="row-span-full col-span-full flex justify-center text-center items-center ">
                <span>{category.name}</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

