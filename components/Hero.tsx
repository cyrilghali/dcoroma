import Image from "next/legacy/image"
import Header from './Header'

export default function Hero() {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div
        className='hidden lg:block lg:absolute lg:inset-0'
        aria-hidden='true'
      >
        <svg
          className='absolute top-0 left-1/2 transform translate-x-64 -translate-y-8'
          width={640}
          height={784}
          fill='none'
          viewBox='0 0 640 784'
        >
          <defs>
            <pattern
              id='9ebea6f4-a1f5-4d96-8c4e-4c2abf658047'
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className='text-gray-50'
            fill='currentColor'
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill='url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)'
          />
        </svg>
      </div>
      <Header />
      <div className='relative pb-16 sm:pb-24 lg:pb-32'>
        <main className='mt-12 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-32'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
            <div className='flex sm:text-center items-center flex-col justify-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
              <Image
                className='flex items-center'
                src='/assets/cross.svg'
                height={80}
                width={80}
                alt='Croce copta'
              />
              <h1>
                <span className='block text-center pt-16 tracking-tight font-extrabold sm:text-5xl xl:text-6xl'>
                  <span className='block text-6xl text-gray-900'>
                    Diocesi Copta Ortodossa
                  </span>
                  <span className='block text-6xl text-gray-900'>di Roma</span>
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Benvenuti nella pagina ufficiale della Diocesi Copta Ortodossa
                di Roma.
              </p>
            </div>
            <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
              <svg
                className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden'
                width={640}
                height={784}
                fill='none'
                viewBox='0 0 640 784'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='4f4f415c-a0e9-44c2-9601-6ded5a34a13e'
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className='text-gray-50'
                  fill='currentColor'
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill='url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)'
                />
              </svg>
              <Image
                className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'
                src='/photos/monasterio.jpg'
                alt=''
                width={1024}
                height={770}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
