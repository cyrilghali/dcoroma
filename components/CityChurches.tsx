import React from 'react'
import { HomeTitle } from './Title'
import { Card } from './Card'

export const CityChurches = (props : {}) => {
  return (
    <div className="pb-20">
      <HomeTitle title="Chiese" />
      <div className="flex flex-row flex-wrap justify-evenly">
        <Card title="Roma" imageUrl="/photos/roma.png" href="#"/>
        <Card title="Firenze" imageUrl="/photos/firenze.png" href="#"/>
        <Card title="Torino" imageUrl="/photos/torino.png" href="#"/>
        <Card title="Reggio Emilia" imageUrl="/photos/reggio.png" href="#"/>
      </div>
    </div>
  )
}
