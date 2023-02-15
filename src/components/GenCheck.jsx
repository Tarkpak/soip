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
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { SelectorIcon,XCircleIcon,PlusIcon,PencilAltIcon,SpeakerphoneIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Circle0 (){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>
  )
}
function Circle1 (){
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 16v-8l-2 2"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
function Circle2 (){
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
function Circle3 (){
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12a2 2 0 1 0 -2 -2"></path>
   <path d="M10 14a2 2 0 1 0 2 -2"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
function Circle4 (){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M13 16v-8l-4 6h5"></path>
    <circle cx="12" cy="12" r="9"></circle>
 </svg>
  )
}
function Circle5 (){
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
function Circle6 (){
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="14" r="2"></circle>
   <path d="M14 10a2 2 0 1 0 -4 0v4"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
function Circle7 (){
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 8h4l-2 8"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
function Circle8 (){
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="10" r="2"></circle>
   <circle cx="12" cy="14" r="2"></circle>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
function Circle9 (){
  return (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-9" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="10" r="2"></circle>
   <path d="M10 14a2 2 0 1 0 4 0v-4"></path>
   <circle cx="12" cy="12" r="9"></circle>
</svg>
  )
}
const typeselect = [
  {
    id: '0',
    name: 'Typo Type',
    value: 'popular', 
    label: 'Popular',
    labelid : Circle1(),
    checked: true,
  },
  {
    id: '1',
    name: 'Typo Type',
    value: 'it', 
    label: 'IT',
    labelid : Circle2(),
    checked: true,
  },
  {
    id: '2',
    name: 'Typo Type',
    value: 'pro', 
    label: 'Professional',
    labelid : Circle3(),
    checked: true,
  },
  {
    id: '3',
    name: 'Wrong Type(Horizontal)',
    value: 'biz', 
    label: 'Business',
    labelid : Circle4(),
    checked: true,
  },
  {
    id: '4',
    name: 'Typo Type',
    value: 'fin', 
    label: 'Finance',
    labelid : Circle5(),
    checked: true,
  },
  {
    id: '5',
    name: 'Typo Type',
    value: 'market', 
    label: 'Market',
    labelid : Circle6(),
    checked: true,
  },
  {
    id: '6',
    name: 'Typo Type',
    value: 'shop', 
    label: 'Shop',
    labelid : Circle7(),
    checked: false,
  },
  {
    id: '7',
    name: 'Typo Type',
    value: 'food', 
    label: 'Food',
    labelid : Circle8(),
    checked: false,
  },
  {
    id: '8',
    name: 'Typo Type',
    value: 'realestate', 
    label: 'Real Estate',
    labelid : Circle9(),
    checked: false,
  },
  {
    id: '9',
    name: 'Typo Type',
    value: 'sport', 
    label: 'Sport',
    labelid : Circle1(),
    checked: false,
  },
  {
    id: '10',
    name: 'Typo Type',
    value: 'travel', 
    label: 'Travel',
    labelid : Circle2(),
    checked: true,
  },
  {
    id: '11',
    name: 'Wrong Type(Horizontal)',
    value: 'health', 
    label: 'Health',
    labelid : Circle3(),
    checked: true,
  },
  {
    id: '12',
    name: 'Typo Type',
    value: 'beauty', 
    label: 'Beauty',
    labelid : Circle4(),
    checked: true,
  },
  {
    id: '13',
    name: 'Typo Type',
    value: 'org', 
    label: 'Organization',
    labelid : Circle5(),
    checked: true,
  },
  {
    id: '14',
    name: 'Typo Type',
    value: 'social', 
    label: 'Social',
    labelid : Circle6(),
    checked: false,
  },
  {
    id: '15',
    name: 'Typo Type',
    value: 'media', 
    label: 'Media',
    labelid : Circle7(),
    checked: false,
  },
  {
    id: '16',
    name: 'Typo Type',
    value: 'academic', 
    label: 'Academic',
    labelid : Circle8(),
    checked: false,
  },
  {
    id: '17',
    name: 'Typo Type',
    value: 'adult', 
    label: 'Adult',
    labelid : Circle9(),
    checked: false,
  },
]

export function GenCheck() {
  return (
    <div>
      <div className="relative px-2 sm:px-0 sm:pb-6">
        <div className="mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <div className="relative rounded-2xl">
            <div className="relative">
              <form action="#" className="my-6">
                <div className="sm:mx-auto  sm:flex">
                  <div className="flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Enter a keyword
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-200 sm:text-center"
                      placeholder="Enter a keyword,e.g. namecost"
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
                </div>
                <dl className="">
                <Disclosure as="div" className="mt-8">
                {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                      <span className="font-medium text-gray-900">
                        <h3 className="text-base font-bold text-orange-500 sm:tracking-tight px-4">
                          <PencilAltIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" />
                          <span className="ml-2">
                            Extensions? <span className="ml-4 text-green-700 font-base">Click here to select</span>
                          </span>
                        </h3>
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? '-rotate-180' : 'rotate-0',
                            'h-6 w-6 transform'
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="">
                    <div className="">
                    {/* submit your domains   --------START----------*/}
                    <form className="mb-6 sm:px-4 sm:mx-auto sm:flex">
                    <div className="px-8 sm:px-0 sm:mx-auto w-full flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 mt-4">
                    {typeselect.map((section, idx) => (
                    <div key={section.id} className="pt-3">
                        <div className="pt-2 space-y-1">
                            <div className="flex items-center">
                              <input
                                id={section.id}
                                name={section.name}
                                defaultValue={section.value}
                                type="radio"
                                className="h-4 w-4 border-gray-300 rounded text-mygreen-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-white"
                              />
                              <label htmlFor={section.id} className="ml-3 text-sm text-gray-600">
                              <span className="text-mygreen-500 pr-1 font-bold"> </span><span className="font-semibold text-gray-400">{section.label}</span>
                              </label>
                            </div>
                        </div>
                      </div>
                    ))}
                    </div>
                    </form>
                    {/* submit your domains   --------END----------*/}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
              </Disclosure>
              </dl>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
