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
import {  useState } from 'react'

import {
  PlusSmIcon,
  RewindIcon,
  FastForwardIcon,
  IdentificationIcon,
  LibraryIcon,
  BellIcon,
  PencilAltIcon,
} from '@heroicons/react/solid'
import { TrafficResult } from '@/components/TrafficResult'
import { Pagination } from '@/components/Pagination'
import { SeoFilter } from '@/components/SeoFilter'
import { MinMax } from '@/components/MinMax'
import { DataHeader } from '@/components/DataHeader'
import { MobileFilter } from '@/components/MobileFilter'
import { PcFilter } from '@/components/PcFilter'

{/* ICON- START */ }
function ftlds() {
  return (
    <IdentificationIcon className="mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />
  )
}
function fdic() {
  return (
    <LibraryIcon className="mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />
  )
}
function ftime() {
  return <BellIcon className="mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />
}
function fdom() {
  return (
    <PencilAltIcon className="mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />
  )
}
{/* ICON- END */ }

{/* FILTER - ONE - START */ }
const tlds = {
  id: 'tlds',
  name: 'TLD Filters',
  icon: ftlds(),
  options: [{ value: 'Only Com', label: 'Only Com' }],
  myinput: false,
}

const closing = {
  id: 'closingtime',
  name: 'Closing Time',
  icon: ftime(),
  options: [{ value: 'Ending today', label: 'Ending today' }],
  myinput: false,
}


const doms = {
  id: 'filter domains',
  name: 'Filter Domains',
  icon: fdom(),
  options: [
    { value: 'no dashes', label: 'No dashes' },
    { value: 'all numbers', label: 'All numbers' },
    { value: 'no numbers', label: 'No numbers' },
  ],
  myinput: false,
}

const tradict = {
  id: 'dictionary',
  name: 'Auctions Platform',
  icon: fdic(),
  options: [
    { value: 'Godaddy', label: 'Godaddy' },
    { value: 'Others', label: 'Others' },
  ],
  myinput: false,
}



const ftra = [tlds, tradict, closing, doms]

const searchdata = {
  "alldatas":2000,
  "seleted":888,
}


export function TrafficDom() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [collapse, setCollapse] = useState(false)
  return (
    <div className="">
      <div>
        <MobileFilter show={mobileFiltersOpen} toggleShow={setMobileFiltersOpen} filters={ftra} />
        {/* Mobile filter dialog 手机端*/}
 
        <main className="mx-auto max-w-7xl px-3 pb-16 sm:pb-10 lg:max-w-7xl">
          <div className="bg-white pt-4 px-5 rounded-lg">
            {/* 显示搜索结果 条数和选择的条数*/}
            <DataHeader title1={searchdata.alldatas} title2={searchdata.seleted}>Traffic Domains</DataHeader>
            <div className={`lg:pt-3 lg:flex ${collapse ? 'flex-col' : ''}`}>
              {collapse && (
                <FastForwardIcon
                  className="h-5 w-5 mb-2 text-gray-500 cursor-pointer hover:text-green-700 transform motion-safe:hover:scale-110"
                  aria-hidden="true"
                  onClick={() => {
                    setCollapse(false)
                  }}
                />
              )}
              <aside
                className={`mr-2 lg:h-screen lg:w-60 ${collapse ? 'hidden' : ''}`}
              >
                <h2 className="sr-only">Filters</h2>

                <button
                  type="button"
                  className="inline-flex items-center lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="text-sm font-medium text-gray-700">
                    Filters
                  </span>
                  <PlusSmIcon
                    className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </button>

                <div className="bg-gray-50 sticky top-0 hidden lg:block">
                  <form className=" ">
                    <header className="rounded-t-lg bg-gray-500 bg-opacity-80 py-2 px-4 text-sm font-semibold text-white">
                      <div
                        className="flex justify-between px-4"
                        translation="FiltersComponent_Header"
                      >
                        <div>Filters</div>
                        <div className="transform motion-safe:hover:scale-105">
                          <RewindIcon
                            className="h-5 w-5 text-white cursor-pointer hover:text-gray-300"
                            aria-hidden="true"
                            onClick={() => {
                              setCollapse(true)
                            }}
                          />
                        </div>{' '}
                      </div>
                    </header>
                    <div className="space-y-2 divide-y divide-gray-200 p-4">
                      <PcFilter filters={ftra} />
                      {/* PC filter dialog PC端*/}
                      <div className="pt-1 px-4 border-none">
                        <MinMax >
                          Price Range
                        </MinMax>
                      </div>
                      <div className="pt-1 px-4 border-none">
                        <SeoFilter className="text-range-filter h-8 w-20  border-gray-300 text-xs" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-mygreen-500 flex w-full items-center justify-center rounded-b-md py-2 px-4 text-base font-medium text-white focus:outline-none"
                    >
                      Apply
                    </button>
                  </form>
                </div>

              </aside>

              {/* Product grid */}
              <div className="mt-2 flex-1 lg:mt-0">
                {/* Replace with your content */}
                <div className="lg:h-full">
                  <TrafficResult />
                  <Pagination />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
