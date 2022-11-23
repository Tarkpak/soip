/* This example requires Tailwind CSS v2.0+ */
import { SelectorIcon,DocumentDownloadIcon,ClipboardCheckIcon } from '@heroicons/react/solid'

const people = [
  {id: '1', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '10', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '2', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '100', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '3', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '100', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '4', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '10', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '5', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '100', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '6', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '100', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '11', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '10', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '12', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '10', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '13', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '10', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '14', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '100', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '15', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '10', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  {id: '16', name: '1abcdefghijklmnopqrstuvwxyz.com', da: '100', backlinks: '1234567890', referringdomains: '123456789', year: '88',aby:'1988',acr:'123456'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DaChecksResult() {
  return (
    <div className="md:mb-12">

      <div className="mt-8 flex flex-col ">
        <div>
        <div className="pb-2 min-w-full">
            <div className="px-8 text-right sm:mx-auto w-screen 2xl:max-w-screen-2xl text-gray-400">
              <span className="pr-8" title="Export selected domains,include all results">
                <button>
                  <DocumentDownloadIcon className="h-6 w-6  hover:text-gray-500" aria-hidden="true" />
                </button>
              </span>
              <span className="" title="Copy all selected domains">
                <button>
                  <ClipboardCheckIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
                </button>
              </span>
            </div>
          </div>
          <div className="py-2 align-middle min-w-full sm:flex space-x-2 overflow-hidden sm:overflow-visible">
            <div className="shadow sm:mx-auto w-screen 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 min-w-full  border-collapse text-center flex  bg-gray-500 rounded-t-lg">
                <div className="py-3.5 text-oksm font-semibold text-gray-300 w-2-50 w-1-10">
                    <input
                      id='cb-select-all-1'
                      type='checkbox'
                      className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                    />
                  </div>
                <div className="py-3.5 text-oksm font-semibold text-gray-300  w-2-50 w-1-10">
                  <span  className="group inline-flex">
                    Id
                    <span className="flex-none rounded text-gray-400 hidden lg:block">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-3.5 text-oksm font-semibold text-gray-300 border border-gray-500 w-14-50 w-3-10">
                  <span  className="group inline-flex">
                    Domain
                    <span className="flex-none rounded text-gray-400 hidden lg:block">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-3.5 text-oksm font-semibold text-gray-300 border border-gray-500 w-3-50 w-1-10">
                  <span  className="group inline-flex" title="Domain Authority">
                    DA
                    <span className="flex-none rounded text-gray-400 hidden lg:block">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-3.5 text-oksm font-semibold text-gray-300 border border-gray-500 w-10-50 w-2-10">
                  <span  className="group inline-flex" title="Backlinks">
                    B<span className="hidden sm:inline">ack</span>L<span className="hidden sm:inline">inks</span>
                    <span className="flex-none rounded text-gray-400 hidden lg:block">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-3.5 text-oksm font-semibold text-gray-300 border border-gray-500 w-10-50 w-2-10">
                  <span  className="group inline-flex" title="Number of Backlinks from different Domains">
                    R<span className="hidden sm:inline">eferring</span>-D<span className="hidden sm:inline">omains</span>
                    <span className="flex-none rounded text-gray-400 hidden lg:block">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-3.5 text-oksm font-semibold text-gray-300 sm:border sm:border-gray-500 w-3-50 w-1-10">
                  <span  className="group inline-flex">
                    Y<span className="hidden sm:inline">ea</span>rs
                    <span className="flex-none rounded text-gray-400 hidden lg:block">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-3.5 text-oksm font-semibold text-gray-300 border border-gray-500 w-4-50 hidden md:block">
                  <span  className="group inline-flex" title="The Birth Year of the Domain using the first found Date from archive.org">
                    ABY
                    <span className="flex-none rounded text-gray-400 hidden lg:block">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-3.5 text-oksm font-semibold text-gray-300 w-4-50 hidden md:block">
                  <span  className="group inline-flex" title="Archive.org Number of Crawl Results">
                    ACR
                    <span className="flex-none rounded text-gray-400 hidden lg:block">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-white">
                  {people.map((person,personIdx) => (
                    <div key={person.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-3 text-oksm  text-gray-500 border border-gray-200 w-2-50  w-1-10">
                        <input
                          id={`${person.id}-${personIdx}`}
                          name={`${person.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-nowrap py-3 text-oksm font-medium text-gray-500 border border-gray-200 w-2-50 hidden md:block">
                        {person.id}
                      </div>
                      <div className="text-blue-500 whitespace-nowrap py-3 text-oksm font-medium border border-gray-200 w-14-50 truncate text-left sm:pl-4 w-3-10">
                        {person.name}
                      </div>

                      <div className={classNames(
                          person.da > 35 ? 'whitespace-nowrap py-3 text-oksm text-green-700 font-semibold border border-gray-200 w-3-50 truncate w-1-10' : 'whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-3-50 truncate w-1-10'
                        )}> 
                        {person.da}
                        </div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-9-50 w-2-10 truncate">{person.backlinks}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-9-50 w-2-10 truncate">{person.referringdomains}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-3-50 truncate w-1-10">{person.year}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-4-50 truncate hidden md:block">{person.aby}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border-t border-b border-l border-gray-200 w-4-50 hidden md:block">{person.acr}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
