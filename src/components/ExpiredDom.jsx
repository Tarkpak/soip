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
import { Fragment, useState } from 'react'
import { Listbox,Dialog, Disclosure, Transition } from '@headlessui/react'
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
  CheckIcon,
  SearchIcon,
  ShoppingCartIcon,
  SwitchHorizontalIcon,
  DocumentDownloadIcon,
  ClipboardCheckIcon,
} from '@heroicons/react/solid'
import { ExpiredResult } from '@/components/ExpiredResult'
import { Pagination } from '@/components/Pagination'
import RangeSlider from '@/components/RangeSlider'

const people = [
  { id: 1, name: 'Contains' },
  { id: 2, name: 'Starts With' },
  { id: 3, name: 'Ends With' },
]

function ftlds() {
  return (
    <IdentificationIcon
      className="mr-2 h-4 w-4 text-gray-400"
      aria-hidden="true"
    />
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

const filters = [
  {
    id: 'tlds',
    name: 'TLD Filters',
    icon:ftlds(),
    options: [
      { value: 'Com', label: 'Com' },
      { value: 'Non Com', label: 'Non-Com' },
    ],
    myinput:false,
  },
  {
    id: 'dictionary',
    name: 'Auctions Platform',
    icon:fdic(),
    options: [
      { value: 'Godaddy', label: 'Godaddy' },
      { value: 'Dropcatch', label: 'Dropcatch' },
      { value: 'Namejet', label: 'Namejet' },
      { value: 'Others', label: 'Others' },   
    ],
    myinput:false,
  },
  {
    id: 'closingtime',
    name: 'Closing Time',
    icon:ftime(),
    options: [
      { value: 'any date', label: 'Any date' },
      { value: 'Ending today', label: 'Ending today' },
    ],
    myinput:false,
  },
  {
    id: 'filter domains',
    name: 'Filter Domains',
    icon:fdom(),
    options: [
      { value: 'no dashes', label: 'No dashes' },
      { value: 'all numbers', label: 'All numbers' },
      { value: 'no numbers', label: 'No numbers' },
    ],
    myinput:false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ExpiredDom() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [selected, setSelected] = useState(people[0])
  return (
    <div className="">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pt-4 pb-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {' '}
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pt-4 pb-2">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-3 pb-16 sm:pb-10 lg:max-w-7xl">
          <div className="bg-white pt-4 px-5 rounded-lg">
          <div className="nc-expired md:flex md:grid md:grid-cols-5">
            <div>
            <h2 className="text-md lg:text-md xl:text-xl font-bold tracking-tight text-gray-500 md:text-center">
              Expired Dom Auctions
            </h2>
            </div>
            <div className="col-span-4 flex md:justify-between">
              <form method="POST" action="">
            <div className="rounded-md border border-gray-300 mx-4  text-center place-self-center hidden md:flex">
              <div className="z-40 block text-base sm:text-sm text-center  border-r border-gray-300 font-semibold  focus:ring-0 focus:ring-offset-0 cursor-pointer">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative ">
                      <Listbox.Button className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md px-4 xl:px-10 py-2 text-sm font-medium text-gray-300 hover:text-gray-500 ">
                        <span className="block truncate text-center pr-4">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-2  pr-2">
                          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="font-medium absolute z-10 mt-1 max-h-60  overflow-auto rounded-md bg-gray-100 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active ? 'text-white bg-filter' : 'text-gray-400',
                                  'relative cursor-default select-none py-2  pl-3 pr-10'
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span className='font-semibold block truncate'>
                                    {person.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? 'text-white' : 'text-gray-400 ',
                                        'absolute inset-y-0 right-0 flex items-center pr-1'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
              </div>
              <div className="relative border-r border-gray-300 flex flex-grow items-stretch focus-within:z-10">
                <input
                  type=""
                  name="domainkeyword"
                  id="domainkeyword"
                  className="block w-full rounded-none placeholder-gray-300 border-none focus:outline-none focus:border-transparent focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-200 px-4 lg:px-20 sm:text-sm"
                  placeholder="Please enter a keyword"
                />
              </div>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <SearchIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
              </button>
            </div>
            </form>
            <div>
              <section className="pt-2 text-sm text-gray-500 sm:text-center">
                {' '}
                <span className="mr-1">200</span>
                <span>Results,</span> 
                <span className="mx-1 font-semibold text-orange-600 text-normal">( 88 )</span>
                <span className="text-green-700 font-semibold">Selected</span>
                <span className="mx-2 font-semibold text-gray-400 text-normal" title="Export selected domains,include all results">
                  <button>
                    <DocumentDownloadIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
                  </button>
                </span>
                <span className="mx-2 font-semibold text-gray-400 text-normal" title="Copy all selected domains">
                  <button>
                    <ClipboardCheckIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
                  </button>
                </span>
              </section>
            </div>

            
            </div>
          </div>

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

              <div className="bg-form sticky top-0 hidden lg:block">
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
                  <div className="space-y-3 divide-y divide-gray-200 p-4">
                    {filters.map((section, sectionIdx) => (
                      <div
                        key={section.name}
                        className={sectionIdx === 0 ? 'px-4' : 'pt-3 px-4'}
                      >
                        <fieldset>
                          <legend className="block text-sm font-semibold text-gray-500">
                            {section.icon} {section.name}
                          </legend>
                          <div
                            className={
                              section.myinput ? 'space-y-1 pt-2' : 'space-y-1 pt-2'
                            }
                          >
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type={section.myinput ? 'text' : 'checkbox'}
                                  className={
                                    section.myinput
                                      ? 'text-mygreen-500 h-6 max-w-max  border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                                      : 'text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                                  }
                                />
                                <label
                                  htmlFor={`${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-400 font-medium"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                    <div className="pt-3 px-4">
                      <legend class="mb-2 block text-sm font-semibold text-gray-500">
                        <SwitchHorizontalIcon
                          className="mr-2 h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                        Fast Filter
                      </legend>
                      <RangeSlider
                        initialMin={0}
                        initialMax={30}
                        min={0}
                        max={30}
                        step={1}
                        priceCap={3}
                      >
                        <span>Years</span>
                      </RangeSlider>
                      <RangeSlider
                        initialMin={0}
                        initialMax={100}
                        min={0}
                        max={100}
                        step={1}
                        priceCap={4}
                      >
                        <span>DA</span>
                      </RangeSlider>
                      <div className="mt-4 flex justify-between">
                        <div className="flex">
                          <input
                            id="minbl"
                            name="minbl"
                            type="text"
                            placeholder="Min BL"
                            className="text-range-filter h-8 w-20  border-gray-300 text-xs"
                          />
                        </div>
                        <div className="flex">
                          <input
                            id="minrd"
                            name="minrd"
                            type="text"
                            placeholder="Min RD"
                            className="text-range-filter h-8 w-20  border-gray-300 text-xs"
                          />
                        </div>
                      </div>
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
                <ExpiredResult />
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
