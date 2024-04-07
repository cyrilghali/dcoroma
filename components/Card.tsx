import Image from "next/image"
import Link from 'next/link'
import React from 'react'

export const Card = (props) => {
  return (
    <div className='card-zoom rounded-lg w-full lg:w-1/3 m-4'>
      <div className='relative'>
        <Link href={props.href}>
          <div className='bg-gray-800  content-center rounded-lg text-gray-100 text-4xl overflow-hidden grid relative h-60'>
            <Image
              className={`${props.className} card-zoom-image object-cover brightness-50`}
              src={props.imageUrl}
              alt=''
              fill
              sizes="100vw" />
            <h1 className='absolute text-center text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold'>
              {props.title}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
