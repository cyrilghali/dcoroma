import Link from 'next/link'
import { HomeTitle } from './Title'
export default function DonationCallToAction() {
  return (
    <div className='bg-rose-50'>
      <HomeTitle title='Vuoi aiutare?' />
      <div className='flex justify-between items-center flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6'>
        <button
          className='flex lg:mt-0 lg:flex-shrink-0'
          data-umami-event='Donation button'
        >
          <div className='inline-flex rounded-md shadow'>
            <div className='inline-flex items-center justify-center px-6 py-3 border border-transparent text-xl font-medium rounded-md text-white bg-rose-800 hover:bg-rose-900'>
              <Link href='/donation'>Donare</Link>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
