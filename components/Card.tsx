import Link from 'next/link'
import React from 'react'

export const Card = (props) => {
  return (
    <div className="card-zoom rounded-lg w-full lg:w-1/3 m-4">
      <div className="relative">
        <div className="h-60 bg-gray-800  content-center rounded-lg text-gray-100 text-4xl overflow-hidden grid relative">
          <img className="card-zoom-image brightness-50" src={props.imageUrl} alt="" />
          <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
            <Link href={props.href} >
              {props.title}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  )
}
