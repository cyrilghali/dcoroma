import Link from 'next/link'
import Image from 'next/image'
import { HomeTitle } from './Title'
export default function DonationCTA() {
  return (
    <div className="bg-rose-50">
      <HomeTitle title="Vuoi aiutare?"/>
      <div className="flex justify-between items-center flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6">
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

/* This example requires Tailwind CSS v2.0+ */
export function DonationCTA2() {
  return (
    <div className="bg-rose-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <Image src="/assets/cross.svg" height={60} width={60} alt=""/>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mt-4">
          <span className="block">Vuoi aiutare?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-rose-200">
        </p>
        <Link
          href="/donation">
        <div
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-rose-50 sm:w-auto"
        >
          Donare
        </div>
        </Link>
      </div>
    </div>
  )
}

