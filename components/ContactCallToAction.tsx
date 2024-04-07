import Link from 'next/link'
import Image from "next/image"
export default function ContactCallToAction() {
  return (
    <div className='bg-rose-50'>
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <Image
          src='/assets/cross.svg'
          height={70}
          width={70}
          alt=''
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <h2 className='text-5xl font-extrabold sm:text-6xl mt-4'>
          <span className='block'>Contattateci</span>
        </h2>
        <p className='mt-4 text-lg leading-6 text-rose-200'></p>
        <Link href='/contact'>
          <div className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-800 hover:bg-rose-900 sm:w-auto'>
            Contatti
          </div>
        </Link>
      </div>
    </div>
  );
}
