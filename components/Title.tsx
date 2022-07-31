import React from 'react'

export const Title = (props) => {
  return (
  <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12">
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{props.title}</h2>
      </div>
    </div>
  </div>
  )
}
