import Link from 'next/link'
import Image from 'next/image'

export default function LibraryGrid(props) {
  const documents: any = Array.from(props.docs)
  console.log('Cyril', documents)
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 px-4 sm:px-9 lg:px-8'
    >
      {documents.map((document) => (
        <li
          key={document.name}
          className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'
        >
          <div className='group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
            <Image
              src={document.cover}
              alt={`Cover of ${document.name}`}
              className='object-cover pointer-events-none group-hover:opacity-75'
              fill
            />
            <Link href={document.href}>
              <span className='sr-only'>View details for {document.name}</span>
            </Link>
          </div>
          <p className='p-2 block truncate text-lg text-gray-900 font-semibold'>
            {document.name}
          </p>
        </li>
      ))}
    </ul>
  )
}
