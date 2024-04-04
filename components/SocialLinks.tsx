import React from 'react'
import { HomeTitle } from './Title'
import Link from 'next/link'

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
]
export const SocialLinks = () => {
  return (
    <div className='bg-rose-50'>
      <HomeTitle title='Rimanere in contatto' />
      <ul role='list' className='flex justify-center'>
        {links.map((social) => (
          <li key={social.alt} className='m-6'>
            <Link href={social.href} target='_blank' className='static'>
              <img
                className='object-contain rounded-full hover:cursor-pointer'
                width={100}
                height={100}
                src={social.imageUrl}
                alt={social.alt}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
