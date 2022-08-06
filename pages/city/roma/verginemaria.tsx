import React, { useState } from 'react'
import { NextPage } from 'next';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ContactCard from '../../../components/ContactCard';
import fathers from '../../../data/contact';

export default function VergineMaria () {
  console.log('Hai cliccato Invia. Sangiorgio');
  return (
    <div>
    <Header />
    <DetailVergineMaria />
    <Footer />
    </div>
  )
  
  function DetailVergineMaria(){
    const person = fathers.find((el)=> 14===el.id)
    return (
      <div className="container my-24 px-6 mx-auto">
        <section className="text-gray-800">
          <img src="/photos/monasterio.jpg" className="h-96 lg:h-96 mx-auto w-full object-cover" alt="" />
          <div className="flex w-full justify-center">
            <h1 className="text-4xl lg:text-5xl mt-12 font-extrabold text-center px-2 border-b-2 border-sand-dark w-3/4 lg:w-1/2 lg:ml-auto lg:mr-auto mx-12 sm:mx-24 pb-2">
              <span>Chiesa della Santa Vergine Maria (Vescovado)</span>
            </h1>
          </div>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-4 hidden lg:block">
            <div className="flex items-center flex-col space-y-2 sm:space-y-2">
              <h2 className="text-3xl lg:text-4xl text-center font-extrabold tracking-tight sm:text-4xl mb-2">
                Orari della divina liturgia
              </h2> 
              <div className="border border-sand w-32"></div> 
              <div className="text-2xl text-gray-700 text-center"> </div> 
              <div className="pt-8 max-width: 100%">
                <div className="flex flex-col mx-2">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-4">
                      <div className="shadow border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th></th> 
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider text-center">
                                Lunedi
                              </th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider text-center">
                                Martedi
                              </th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider text-center">
                                Mercoledi
                              </th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider text-center">
                                Giovedi
                              </th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider text-center">
                                Venerdi
                              </th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider text-center">
                                Sabato
                              </th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider text-center">
                                Domenica
                              </th>
                            </tr>
                          </thead> 
                          <tbody>
                            <tr className="bg-sand">
                              <td className="px-3 py-2 whitespace-pre-wrap lg:whitespace-normal break-words lg:break-normal lg:px-6 text-sm font-medium text-gray:700 hover:text-black sticky left-0 p-l-6 -m-r-6 bg-sand"></td> 
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                                <div>
                                  09:00 - 11:30
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                                <div>
                                  09:00 - 11:30
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                                <div>
                                  09:00 - 11:30
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                                <div>
                                  09:00 - 11:30
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                                <div>
                                09:00 - 11:30
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-3xl text-center font-extrabold tracking-tight sm:text-4xl mb-2">Preti</h2> 
          <div className="border border-sand w-32 ml-auto mr-auto"></div>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <li></li>
        <li
          key='Vicario episcopale Rev. Padre Thaoufilos el Soryany'
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
        <ContactCard person={person} />
        </li>
         </ul>
      </div>
    );
    
  }
}
