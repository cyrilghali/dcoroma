import Link from 'next/link'
import Image from 'next/image'
export default function ContactCTA() {
  return (
    <div className="bg-rose-50">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <Image src="/assets/cross.svg" height={60} width={60} alt=""/>
        <h2 className="text-3xl font-extrabold sm:text-4xl mt-4">
          <span className="block">Contattateci</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-rose-200">
        </p>
        <Link
          href="/donation">
        <div
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-800 hover:bg-rose-900 sm:w-auto"
        >
          Contatti
        </div>
        </Link>
      </div>
    </div>
  )
}


