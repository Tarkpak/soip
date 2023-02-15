import { useState } from "react"

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
    value: 'bx', 
    label: 'Look Alike',
    labelid : Circle0(),
    checked: true,
  },
  {
    id: '1',
    name: 'Typo Type',
    value: 'qz', 
    label: 'Miss Letter',
    labelid : Circle1(),
    checked: true,
  },
  {
    id: '2',
    name: 'Wrong Type(Horizontal)',
    value: 'hc', 
    label: 'Wrong Type(Horizontal)',
    labelid : Circle2(),
    checked: true,
  },
  {
    id: '3',
    name: 'Typo Type',
    value: 'dz', 
    label: 'Double Letter',
    labelid : Circle3(),
    checked: true,
  },
  {
    id: '4',
    name: 'Typo Type',
    value: 'dd', 
    label: 'Swap Letter',
    labelid : Circle4(),
    checked: true,
  },
  {
    id: '6',
    name: 'Typo Type',
    value: 'sc', 
    label: 'Wrong Letter(Vertical)',
    labelid : Circle6(),
    checked: false,
  },
  {
    id: '7',
    name: 'Typo Type',
    value: 'hd', 
    label: 'Double Hits (Horizontal)',
    labelid : Circle7(),
    checked: false,
  },
  {
    id: '8',
    name: 'Typo Type',
    value: 'sd', 
    label: 'Double Hits (Vertical)',
    labelid : Circle8(),
    checked: false,
  },
  {
    id: '9',
    name: 'Typo Type',
    value: 'qh', 
    label: 'Swap Letter II',
    labelid : Circle9(),
    checked: false,
  },
]

export function TypoCheck() {
  const [checkList, setCheckList] = useState(typeselect.map(({checked}) => checked))
  const handleChange = ({ target }) => {
    const idx = typeselect.findIndex(({value}) => value === target.defaultValue)
    setCheckList([...checkList.splice(idx, 0, target.checked)])
  }

  return (
    <div>
      <div className="relative">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-10 overflow-hidden sm:px-12">
            <div aria-hidden="true" className="absolute inset-0  md:mt-0">
            </div>
            <div className="relative">
              <div className="sm:text-center">
              </div>
              <form action="#" className="my-6">
                <div className="sm:mx-auto  sm:flex">
                <div className="flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Enter a domain name
                  </label>
                  <input
                    id="cta-email"
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
                </div>
                <div className="sm:mx-auto flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-4">
                  {typeselect.map((section, idx) => (
                    <div key={section.id} className="pt-3">
                        <div className="pt-2 space-y-1">
                            <div className="flex items-center">
                              <input
                                id={section.id}
                                name={section.name}
                                defaultValue={section.value}
                                type="checkbox"
                                checked={checkList[idx]}
                                onChange={e => handleChange(e)}
                                className="h-4 w-4 border-gray-300 rounded text-mygreen-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-white"
                              />
                              <label htmlFor={section.id} className="ml-3 text-sm text-gray-600">
                              <span className="text-mygreen-500 pr-1 font-bold">{section.labelid} </span><span className="font-semibold text-gray-400">{section.label}</span>
                              </label>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
