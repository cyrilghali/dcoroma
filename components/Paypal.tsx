import Link from 'next/link'
const Paypal = () => {
  return (
    <div>
      <h2 className="flex py-8 justify-center font-black text-lg">Paypal / Carta di credito</h2>
      <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse py-2">
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 "
        >
          <div className="max-w-lg mx-auto">
            <Link href="https://www.paypal.com/donate/?hosted_button_id=6YET43MYKB9ZN">
            	<button type="button" className="w-full flex items-center justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                  Credit Card or PayPal
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Paypal;
