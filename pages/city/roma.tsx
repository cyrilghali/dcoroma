import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const nameSelected = 'sangiorgio';
const chiese = [
    {
      name: 'sangiorgio',
    },
    {
      name: 'sanmina',
      
    },
    {
      name: 'vergine Maria',
    }
  ]

export default function Roma() {  
    return (
        <div>
          <Header />
          <RomaDetail />
          <Footer />
        </div>
    )
}

export function RomaDetail(){
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <a href="/city/roma/sangiorgio"className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <div className="flex-shrink-0">
                                <img className="w-14 h-14 rounded-full" src="/photos/SanGiorgioTh.jpg" alt="SanGiorgio"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                Chiesa del Megalomartire San Giorgio
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                Via Sante Bargellini 13 A
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <div className="flex-shrink-0">
                                <img className="w-14 h-14 rounded-full" src="/photos/sanMina.jpg" alt="SanMina"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                Chiesa del Megalomartire San Mina
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                Piazza della Trasfigurazione, 3
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <div className="flex-shrink-0">
                                <img className="w-14 h-14 rounded-full" src="/photos/sanmarco.jpg" alt="SanMina"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                Chiesa di San Marco Apostolo
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                Via appia nuova, 233
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}