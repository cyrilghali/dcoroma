/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'

export default function ContactCard({ person }) {
  return (
    <div>
      <div className='flex-1 flex flex-col p-8'>
        <div className='w-32 h-32 flex-shrink-0 mx-auto object-contain rounded-full'>
          <Image
            className='w-32 h-32 object-cover rounded-full'
            width={200}
            height={200}
            src={person.imageUrl}
            alt=''
          />
        </div>
        <h3 className='mt-6 text-gray-900 text-sm font-medium'>
          {person.name}
        </h3>
        <dl className='mt-1 flex-grow flex flex-col justify-between'>
          <dt className='sr-only'>Title</dt>
          <dd className='text-gray-500 text-sm'>{person.title}</dd>
          <dt className='sr-only'>Role</dt>
        </dl>
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          {person.email ? (
            <div className='w-0 flex-1 flex'>
              <a
                href={`mailto:${person.email}`}
                className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                data-umami-event='Click on mailto link'
              >
                <MailIcon
                  className='w-5 h-5 text-gray-400'
                  aria-hidden='true'
                />
                <span className='ml-3'>Email</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          <div className='-ml-px w-0 flex-1 flex'>
            <a
              href={`tel:${person.telephone}`}
              className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              data-umami-event='Click on phone number'
            >
              <PhoneIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
              <span className='ml-3'>Chiamata</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
