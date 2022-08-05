import Link from 'next/link'
import { HomeTitle } from './Title'
export default function DonationCTA() {
  return (
    <div className="bg-rose-50">
      <HomeTitle title="Vuoi aiutare?"/>
      <div className="flex justify-between items-center flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-800 hover:bg-rose-900">
              <Link
                href="/donation"
              >
               Donare
              </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
