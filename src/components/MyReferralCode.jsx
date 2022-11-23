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
import { MyDashboard } from '@/components/MyDashboard'
import { ReferralCodes } from '@/components/account/ReferralCodes'


export function MyReferralCode() {
  return (
    <div className="">
      <div>
        <main className="bg-white rounded-lg max-w-7xl mx-auto pb-16 px-4 pt-4 sm:pb-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="nc-expired flex justify-between">
          </div>
          <div className="pt-6 lg:grid lg:grid-cols-4 lg:gap-x-2 xl:grid-cols-5">
            <MyDashboard />
            {/* Product grid */}
            <div className="mt-6 lg:mt-0 lg:col-span-3 xl:col-span-4">
              {/* Replace with your content */}
              <div className="lg:h-full" >
                <ReferralCodes />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
