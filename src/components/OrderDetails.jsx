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
import { useState } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'


const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]
const discount = { code: 'CHEAPSKATE', amount: '$16.00' }
const mypaymentMethods = [
  { id: 'credit-card', types:'Visa',no:'XXXX XXXX XXXX 1234',expired:'09/2026'},

]
const paymentstatus = { code: 'successful' ,note: "Your payment didn't go through. Please try a different payment method or try again later." }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function OrderDetails() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(mypaymentMethods[0])

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <div className="py-6 mx-auto text-center">
            <div>
              {paymentstatus.code = 'successful' ?
                <div className="flex-shrink-0 mx-auto space-x-4">
                  <CheckCircleIcon className="h-12 w-12 text-green-400" aria-hidden="true" />
                  <span className="text-lg font-semibold text-green-800">Payment successful</span>
                </div>
               :
                <div className="flex-shrink-0 mx-auto space-x-4">
                  <XCircleIcon className="h-12 w-12 text-red-400" aria-hidden="true" />
                  <span className="text-lg font-semibold text-red-800">Payment failure</span>
                </div>
               }
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
          {paymentstatus.code = 'successful' ?
            <div>
              <p className="mt-2 text-lg font-bold tracking-tight text-gray-500 sm:tracking-tight">
                Thanks for ordering
              </p>
              <p className="mt-2 text-base text-gray-500 lg:my-4">
                We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!
              </p>
            </div>
          :
            <div>
              <p className="mt-2 text-lg font-bold tracking-tight text-gray-500 sm:tracking-tight">
              Unable to complete transaction
             </p>
              <p className="mt-2 text-base text-gray-500 lg:my-4">
               {paymentstatus.note}
              </p>
            </div>
          }
          <div className="mt-2 text-base font-bold tracking-tight text-gray-500 sm:tracking-tight ">
            Order Summary
          </div>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img src={product.imageSrc} alt={product.imageAlt} className="w-20 rounded-md" />
                    </div>

                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                              {product.title}
                            </a>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                        </div>
                      </div>

                      <div className="flex-1 pt-2 flex items-end justify-between">
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>

                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">

                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                </div>
                <div className="flex justify-between">
                      <dt className="flex text-sm">
                        Discount
                        <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                          {discount.code}
                        </span>
                      </dt>
                      <dd className="text-sm font-semibold text-green-600">-{discount.amount}</dd>
                    </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Credits</dt>
                  <dd className="text-sm font-semibold text-green-600">-$500.00</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Taxes</dt>
                  <dd className="text-sm font-medium text-gray-900">$6.40</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="text-base font-medium text-gray-900">$0.00</dd>
                </div>
              </dl>

            </div>
          </div>

          {/* right */}
          <div>

          {/* Thanks */}
          <div className="pt-4 sm:pt-0">
              {/* Order Number */}
            <div className="">
              <div className="mt-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-500">
                  Aug 21, 2020, 7:19 PM EDT
                  </label>
                </div>
              </div>
            </div>
              {/* Payment */}
            <div className="mt-4 border-t border-gray-200 pt-4">
              <h2 className="mt-2 text-base font-bold tracking-tight text-gray-500 sm:tracking-tight">Payment Details</h2>
              <div className="mt-4  grid sm:grid-cols-2">
                <div className="block text-sm font-medium text-gray-500">
                  <span className="block font-semibold">Transaction ID</span>
                  <span className="block text-mygreen-700">abc20220818202060001</span>
                </div>
                <div className="block text-sm font-medium text-gray-500">
                  <span className="block font-semibold">Payment Method</span>
                  <span className="block text-mygreen-700">Visa</span>
                </div>

                <div className="block text-sm font-medium text-gray-500 sm:mt-2">
                  <span className="block font-semibold">Charged Amount</span>
                  <span className="block text-mygreen-700">$35.88</span>
                </div>
                <div className="block text-sm font-medium text-gray-500 sm:mt-2">
                  <span className="block font-semibold">Payment Account</span>
                  <span className="block text-mygreen-700">XXXX XXXX XXXX 1234</span>
                </div>
              </div>
            </div>
            </div>
            
              
              {/* supplier */}
              <div className="mt-4 border-t border-gray-200 pt-4">
              <h2 className="mt-2 text-base font-bold tracking-tight text-gray-500 sm:tracking-tight">Supplier</h2>

              <div className="mt-4 grid grid-cols-2 gap-y-2 sm:gap-x-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    Namecost, Inc
                  </label>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                  4600 East Washington Street., Suite 305
                  </label>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    support@namecost.com
                  </label>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                  Phoenix, AZ 85034
                  </label>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    Phone
                  </label>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    USA
                  </label>
                </div>
              </div>
            </div>

              {/* customer */}
            <div className="mt-4 border-t border-gray-200 pt-4">
              <h2 className="mt-2 text-base font-bold tracking-tight text-gray-500 sm:tracking-tight">Customer</h2>

              <div className="mt-4 grid grid-cols-2 gap-y-2 sm:gap-x-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    Name
                  </label>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    Address
                  </label>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    Email
                  </label>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                  City,State / Province,Zip
                  </label>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    Phone
                  </label>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-500 col-span-2 sm:col-span-1">
                    Country
                  </label>
                </div>
              </div>
            </div>

          </div>
        </div>
          {/* Print Download Resend */}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none sm:space-x-4 grid sm:grid-cols-3  justify-items-end">
              <div></div>
              <div></div>
              <div className="sm:col-span-3 space-x-4">
                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-mygreen-500 px-4 py-2 text-sm font-medium text-white shadow-sm sm:w-auto">
                  Print
                </button>
                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-myred-500 px-4 py-2 text-sm font-medium text-white shadow-sm sm:w-auto">
                  Download
                </button>
                <button type="button" class="inline-flex items-center justify-center hover:underline px-4 py-2 text-sm font-medium sm:w-auto">
                  Resend Receipt
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
