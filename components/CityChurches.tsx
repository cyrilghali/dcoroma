import React from 'react'
import { HomeTitle } from './Title'
import { Card } from './Card'

export const CityChurches = (props : {}) => {
  return (
    <div className="pb-20">
      <HomeTitle title="Chiese" />
      <div className="flex flex-row flex-wrap justify-evenly">
        <Card title="Roma" imageUrl="/photos/roma.avif" href="#"/>
        <Card title="Firenze" imageUrl="/photos/firenze.avif" href="#"/>
        <Card title="Torino" imageUrl="/photos/torino.avif" href="#"/>
        <Card title="Reggio Emilia" imageUrl="/photos/reggio.avif" href="#"/>
      </div>
    </div>
  )
}
