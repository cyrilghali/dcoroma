import React from 'react'
import ContactCard from './ContactCard'
import fathers from '../data/contact'
import error404 from '../pages/404'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const ChurchDetail = (props) => {
  const person = fathers.find((el) => props.referentId === el.id)
  if (typeof person === 'undefined') {
    return error404()
  }

  return (
    <div className='container my-24 px-6 mx-auto'>
      <section className='text-gray-800'>
        {props.churchImageUrl ? (
          <img
            src={props.churchImageUrl}
            className='h-96 lg:h-96 mx-auto w-full object-cover rounded-md'
            alt=''
          />
        ) : (
          <></>
        )}
        <div className='flex w-full justify-center'>
          <h1 className='text-4xl lg:text-5xl mt-12 font-extrabold text-center px-2 border-b-2 border-sand-dark w-3/4 lg:w-1/2 lg:ml-auto lg:mr-auto mx-12 sm:mx-24 pb-2'>
            <span>{props.churchName}</span>
          </h1>
        </div>
        <div className='flex w-full justify-center pb-8'>
          <h2 className='text-4xl mt-12 font-extrabold text-center px-2 border-b-2 border-sand-dark w-1/2 lg:ml-auto lg:mr-auto mx-12 sm:mx-24 pb-2'>
            <span>Orari della divina liturgia</span>
          </h2>
        </div>
        {props.monthlyMassSchedule ? (
          <div className='flex w-full justify-center pb-8'>
            <h4 className='text-2xl mt-12 font-extrabold text-center px-2 border-b-2 border-sand-dark w-1/2 lg:ml-auto lg:mr-auto mx-12 sm:mx-24 pb-2'>
              <span>{props.monthlyMassSchedule}</span>
            </h4>
          </div>
        ) : (
          <div className='mb-8 flex flex-col'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Lunedi
                        </th>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Martedi
                        </th>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Mercoledi
                        </th>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Giovedi
                        </th>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Venerdi
                        </th>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Sabato
                        </th>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Domenica
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      <tr key=''>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {props.massSchedule.monday}
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {props.massSchedule.tuesday}
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {props.massSchedule.wednesday}
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {props.massSchedule.thursday}
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {props.massSchedule.friday}
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {props.massSchedule.saturday}
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {props.massSchedule &&
                            props.massSchedule.sunday &&
                            props.massSchedule.sunday
                              .split(',')
                              .map((time, index) => <p key={index}>{time}</p>)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <div className='flex flex-col items-center w-full text-center justify-center'>
        <h2 className='text-4xl mt-12 font-extrabold text-center px-2 border-b-2 border-sand-dark w-1/2 lg:w-1/4 lg:ml-auto lg:mr-auto mx-12 sm:mx-24 pb-2'>
          <span>Preti</span>
        </h2>
        <ul role='list' className='pt-8 w-max'>
          <li
            key={person.id}
            className='rounded-lg shadow divide-y divide-gray-200'
          >
            <ContactCard person={person} />
          </li>
          {props.locationUrl ? (
            <Link href={props.locationUrl}>
              <li className='flex flex-row hover:cursor-pointer justify-center items-center text-center mt-20 border-b-2 border-sand hover:border-sand-dark px-auto'>
                <LocationMarkerIcon className='h-4 w-4 text-gray-500' />
                <span>{props.location}</span>
              </li>
            </Link>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  )
}
