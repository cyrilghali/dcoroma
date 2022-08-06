import React from 'react'
import { HomeTitle } from './Title'
import Image from 'next/image'
import Link from 'next/link';

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = '';

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

export const SocialLinks = () => {
var os = ''
var fblink = 'https://www.facebook.com/DCOTorinoRoma/'
if (typeof window !== 'undefined') {
  os = getOS()
  if(os == 'iOS')
  {
    fblink = 'fb://profile/DCOTorinoRoma'
  }
  else if(os='Android'){
    fblink = 'fb://page/DCOTorinoRoma'
  }

}


const links = [

{
alt: 'facebook',
href: fblink,
imageUrl: '/assets/facebook.svg',
},
{
alt: 'youtube',
href: 'https://youtube.com/channel/UCVc5TVZEoB3k5SZWe1daXcA',
imageUrl: '/assets/youtube.svg',
},

];
  return (
    <div className="bg-rose-50">
        <HomeTitle title="Seguici" />
        <div className="flex justify-between items-center flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6">
          <ul
            role="list"
            className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl"
          >
            {links.map((social) => (
              <li key={social.alt}>
                <div className="flex justify-center">
                <Link href={social.href}>
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
