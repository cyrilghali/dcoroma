import React from 'react'

export const DonationCards = (props: {}) => {
  return (
    <div>
      <div>
        <IBAN />
        <Divider />
        <Payment /> 
      </div>
    </div>
  )
}

import { LockClosedIcon } from '@heroicons/react/solid'

const total = '$341.68'

function IBAN(){
  return(
    <>
      <h2 className="flex py-4 justify-center font-black text-lg"> IBAN </h2>
      <h2 className="flex py-4 justify-center font-semibold text-lg">IT 82 W 02008 05001 000401308210</h2>
      <h2 className="flex py-4 justify-center font-medium text-lg">Intestato a: "Diocesi Copto Ortodossa"</h2>
    
    </>
  )
}

function Payment() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <h2 className="flex py-8 justify-center font-black text-lg">Paypal / Carta di credito</h2>
      <h2 className="flex pt-4 justify-center font-semibold text-lg">1. Montant </h2>

  
      <div>
        <div className="my-3 flex justify-center relative rounded-md pt-5">
          <input
            type="text"
            name="price"
            id="price"
            className="focus:ring-rose-800 focus:border-rose-800 block w-auto pl-7 pr-12 sm:text-sm rounded-md"
            placeholder="0.00"
            aria-describedby="price-currency"
          />
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            €
          </span>
        </div>
      </div>
      <h2 className="flex justify-center font-semibold text-lg pt-12">2. Payment</h2>
      <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse py-12">
        {/* Checkout form */}
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
        >
          <div className="max-w-lg mx-auto">
            	<button type="button" class="w-full flex items-center justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                  Credit Card or PayPal
              </button>

          </div>
        </section>
      </main>
    </>
  )
}


import Divider from './Divider'
