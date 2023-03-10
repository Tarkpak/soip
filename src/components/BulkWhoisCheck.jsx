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

export function BulkWhoisCheck({ setSingle }) {
  return (
   <div>
      <div className="relative sm:pb-6">

        <div className="mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-5xl lg:px-8">
          <div className="relative rounded-2xl px-10 overflow-hidden sm:px-12">
            <form className="my-6 sm:mx-auto sm:flex space-x-2">
              <div className=" flex-1 md:mr-12">
                <div className="relative mt-1">
                  <textarea
                    rows={12}
                    name="comment"
                    id="comment"
                    className="shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 block w-full sm:text-sm border-gray-300 rounded-md resize-none pl-4"
                    placeholder="Enter a list of domains no more than 100"
                  />
                  <div className="absolute cursor-pointer hover:underline top-1/2 transform -translate-y-1/2 right-4 font-bold text-red-500" onClick={() => { setSingle(true) }} >Whois</div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 !md:ml-12 align-bottom">
                <div className="">
                  <p className="text-center leading-8 text-gray-400 font-medium md:mt-8">Example<br></br>
                    example.com<br></br>
                    example.net<br></br>
                    example.org<br></br>
                    ...
                  </p>
                </div>
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
  )
}
