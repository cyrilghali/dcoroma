import React from 'react'
import { HomeTitle } from './Title'
import Image from 'next/image'
import Link from 'next/link';

export const links = [

{
alt: 'facebook',
href: 'https://www.facebook.com/DCOTorinoRoma/',
imageUrl: '/assets/facebook.svg',
},
{
alt: 'youtube',
href: 'https://youtube.com/channel/UCVc5TVZEoB3k5SZWe1daXcA',
imageUrl: '/assets/youtube.svg',
},

];
export const SocialLinks = () => {
  return (
    <div className="bg-rose-50">
        <HomeTitle title="Rimanere in contatto" />
        <div className="flex justify-between items-center flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6">
          <ul
            role="list"
            className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl"
          >
            {links.map((social) => (
              <li key={social.alt}>
                <div className="flex justify-center">
                <Link href={social.href} target="_blank">
                  <Image className="mx-auto h-40 w-40 object-contain rounded-full xl:w-56 xl:h-56 hover:cursor-pointer " width={100} height={150} src={social.imageUrl} alt="" />
                </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default SocialLinks