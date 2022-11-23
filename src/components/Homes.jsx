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
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  PlusSmIcon,
  RewindIcon,
  FastForwardIcon,
  IdentificationIcon,
  LibraryIcon,
  BellIcon,
  PencilAltIcon,
  ViewGridAddIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/solid'
import { HomesData } from '@/components/HomesData'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AuctionIcons = () => {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gavel" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385"></path>
   <path d="M6 9l4 4"></path>
   <path d="M13 10l-4 -4"></path>
   <path d="M3 21h7"></path>
   <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z"></path>
</svg>
    </>
  )
}

const CatchIcons = () => {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-grab" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5"></path>
   <path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5"></path>
   <path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5"></path>
   <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
</svg>
    </>
    )
  }

export function Homes() {
  return (
    <div>
      <div className="relative sm:pb-6">

        <div className="mx-auto px-2 sm:px-4 md:px-6 lg:max-w-7xl">
          <div className="relative  ">
            <div className="relative">
              <div className="">
                {/*
                <div className="mx-auto text-base text-blue-green font-medium mb-6">
                  <div className="bg-blue-50 p-4 flex grid grid-cols-6">
                    <div className="mx-auto place-self-center">
                      <AuctionIcons />
                    </div>
                    <div className="col-span-4 lg:px-10">
                      <p className="font-bold text-2xl">Get the best valued domains with our best free datas</p>
                      <p>Catch and bid on expired domains anywhere, anytime.</p>
                    </div>
                    <div className="mx-auto place-self-center">
                      <CatchIcons />
                    </div>
                  </div> 
                </div>
                  */}
              </div>
            </div>
            <HomesData />
          </div>
        </div>
      </div>
    </div>
  )
}
