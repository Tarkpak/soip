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

import { TopData } from '@/components/TopData'

export function Tops() {
  return (
    <div>
      <div className="relative sm:pb-6">

        <div className="mx-auto px-2 sm:px-4 md:px-6 lg:max-w-7xl">
          <div className="relative  ">
            <div className="relative">
              <div className="">
              </div>
            </div>
            <TopData />
          </div>
        </div>
      </div>
    </div>
  )
}
