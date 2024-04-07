import Image from "next/legacy/image"
import diocese from 'data/diocese'
import { HomeTitle } from './Title'
export default function Team() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto pb-12 px-4 text-center sm:px-6 lg:px-8 lg:pb-24'>
        <div className='space-y-12'>
          <HomeTitle title='La Diocesi' />
          <ul
            role='list'
            className='mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl'
          >
            {diocese.map((person) => (
              <li key={person.name}>
                <div className='space-y-6'>
                  <Image
                    className='mx-auto h-40 w-40 object-contain rounded-full xl:w-56 xl:h-56'
                    width={200}
                    height={200}
                    src={person.imageUrl}
                    alt=''
                  />
                  <div className='space-y-2'>
                    <div className='text-lg leading-6 font-medium space-y-1'>
                      <h3>{person.name}</h3>
                      <p className='text-rose-900'>{person.role}</p>
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
