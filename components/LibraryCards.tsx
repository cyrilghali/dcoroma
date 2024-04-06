import Image from 'next/image'
import Link from 'next/link'
import categories from 'data/library/categories'

export default function LibraryCards() {
  return (
    <ul
      role='list'
      aria-label='Library categories'
      className='grid grid-cols-1 px-4 gap-6 content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
    >
      {categories.map((category) => (
        <li
          key={category.name}
          className='card-zoom content-center col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 hover:cursor-pointer'
        >
          <Link href={category.href}>
            <div className='focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500'>
              <div className='h-60 bg-gray-800 rounded-lg overflow-hidden relative'>
                <Image
                  className='object-cover w-full h-full'
                  width={200}
                  height={200}
                  src={category.imageUrl}
                  alt={category.name}
                  role='presentation'
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center'>
                  <span className='text-gray-100 text-4xl'>
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
