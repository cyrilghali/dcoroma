import Link from 'next/link'
import React from 'react'

export const Card = (props) => {
  return (
    <div className="card-zoom rounded-lg w-full lg:w-1/3">
      <div className="relative">
        <div className="h-60 bg-gray-800  content-center rounded-lg text-gray-100 text-4xl overflow-hidden grid relative">
          <img className="card-zoom-image brightness-50" src="https://images.unsplash.com/photo-1596627116790-af6f46dddbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">

              {props.title}
          </h1>
        </div>
      </div>
    </div>
  )
}
