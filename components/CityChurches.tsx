import city from 'data/cities'
import React from 'react'

import { Card } from './Card'
import { HomeTitle } from './Title'
export const CityChurches = () => {
  return (
    <div className="pb-20">
      <HomeTitle title="Principali citta' della Diocesi" />
      <div className="flex flex-row flex-wrap justify-evenly">
        {city
          .filter((ct) => ct.href)
          .map((ct) => (
            <Card
              key={ct.name}
              title={ct.name}
              imageUrl={ct.imageUrl}
              href={ct.href}
            />
          ))}
      </div>
    </div>
  )
}
