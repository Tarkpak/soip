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

export function DaChecks() {
  return (
    <div>
      <div className="relative sm:pb-6">

        <div className="mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-5xl lg:px-8">
          <div className="relative rounded-2xl px-10 overflow-hidden sm:px-12">
            <div className="my-6 sm:mx-auto sm:flex space-x-2">
              <div className=" flex-1 md:mr-12">
                <div className="mt-1">
                  <textarea
                    rows={12}
                    name="comment"
                    id="comment"
                    className="shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 block w-full sm:text-sm border-gray-300 rounded-md resize-none"
                    placeholder="Enter no more than 100 .COM domains one time"
                 />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
