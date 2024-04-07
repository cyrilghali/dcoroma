import React from 'react'
import { HomeTitle } from './Title'
import { Card } from './Card'
import city from 'data/cities'
export const CityChurches = () => {
  return (
    <div className='pb-20'>
      <HomeTitle title="Principali citta' della Diocesi" />
      <div className='flex flex-row flex-wrap justify-evenly'>
        {city
          .filter((ct) => ct.href)
          .map((ct) => (
            <Card
              key={ct.name}
              title={ct.name}
              imageUrl={ct.imageUrl}
              href={ct.href}
              data-umami-event-city={'Card of ' + ct.name}
            />
          ))}
      </div>
    </div>
  )
}
