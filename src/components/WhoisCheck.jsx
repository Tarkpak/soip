/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Link from 'next/link'

export function WhoisCheck() {
  return (
    <div>
      <div className="relative sm:pb-6">

        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0  md:mt-0">

            </div>
            <div className="relative">
              <div className="text-center">
                <p className="mx-auto max-w-2xl text-lg text-gray-300 font-medium">
                  <Link href="/bulkwhois" className="underline text-sm  hover:text-red-300 text-base" >Bulk Whois Lookup</Link>
                </p>
              </div>
              <form action="#" className="my-6 sm:mx-auto  sm:flex">
                <div className="flex-1">
                  <label htmlFor="cta-text" className="sr-only">
                    Enter a domain name
                  </label>
                  <input
                    id="cta-text"
                    type="text"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 sm:text-center"
                    placeholder="Enter a domain name,e.g. namecost.com"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-myred-500 text-base font-medium text-white shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-10"
                  >
                    Search
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
