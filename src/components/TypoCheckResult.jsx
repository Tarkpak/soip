/* This example requires Tailwind CSS v2.0+ */
import {
  SelectorIcon,
  CheckCircleIcon,
  AtSymbolIcon,
  QuestionMarkCircleIcon,
  DocumentDownloadIcon,
  ClipboardCheckIcon,
} from '@heroicons/react/solid'
import { NoResults } from '@/components/NoResults'

{/* 

获得people数据，数据为空则定义为空的people数组
const people = []

*/}

const people = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: '', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '2', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'registered', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '3', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'registered', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:''},
  {id: '4', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'registered', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'' ,parkorbuy:'p'},
  {id: '5', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'available', registrar: '', timereg: '', timeend: '',status:'',nameserver:'',delorredemp:'' ,parkorbuy:''},
  {id: '6', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'registered', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '7', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'available', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'' ,parkorbuy:'p'},
  {id: '8', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'available', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '9', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'reserved', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '111', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'reserved', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:''},
  {id: '122', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'reserved', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'' ,parkorbuy:'p'},
  {id: '123', name: 'abcdefghijklmnopqrstuvwxyz.com',typotype:9,rankno:582220, okreg: 'reserved', registrar: 'Godaddy1998-08-08Godaddy1998-', timereg: '1998-08-081998-08-08', timeend: '2028-08-08',status:'ok1998-08-081998-08-081998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const IsResults = () => {
  return (
    <>
      <div className="md:mb-12">
        <div className="mt-8 flex flex-col ">
          <div>
          <div className="pb-2 min-w-full">
            <div className="px-8 text-right sm:mx-auto w-screen 2xl:max-w-screen-2xl text-gray-400">
              <span className="pr-8" title="Export selected domains,include all results">
                <button>
                  <DocumentDownloadIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
                </button>
              </span>
              <span className="" title="Copy all selected domains">
                <button>
                  <ClipboardCheckIcon className="h-6 w-6 hover:text-gray-500" aria-hidden="true" />
                </button>
              </span>
            </div>
          </div>
            <div className="min-w-full space-x-2 overflow-hidden py-2 align-middle sm:flex sm:overflow-visible">
              <div className="w-screen shadow sm:mx-auto 2xl:max-w-screen-2xl">
                <div className="sticky top-0 z-10 flex min-w-full border-collapse rounded-t-lg bg-gray-500 text-center">
                  <div className="w-2-50 w-1-10  py-3.5 text-oksm font-semibold text-gray-300">
                    <input
                      id='cb-select-all-1'
                      type='checkbox'
                      className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                    />
                  </div>
                  <div className="w-2-50 hidden md:block py-3.5 text-oksm  font-semibold text-gray-300">
                    <span className="group inline-flex">
                      Id
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-7-50 w-3-10 border border-gray-500 py-3.5 text-oksm font-semibold text-gray-300">
                    <span className="group inline-flex">
                      Domain
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-2-50  w-1-10 border border-gray-500 py-3.5 text-oksm font-semibold text-gray-300">
                    <span className="group inline-flex" title="Typo domain's type: 0-9">
                      Type
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-2-50 w-1-10 border border-gray-500 py-3.5 text-oksm font-semibold text-gray-300">
                    <span className="group inline-flex" title="Domain status: available, registered, unknow">
                      <span className="flex-none rounded text-green-500">
                        <CheckCircleIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-2-50 w-1-10 border border-gray-500 py-3.5 text-oksm font-semibold text-gray-300">
                    <span className="group inline-flex" title="Domain status: Pending delete">
                      Del
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-2-50 w-1-10 py-3.5 text-oksm font-semibold text-gray-300">
                    <span className="group inline-flex" title="Domain nameserver: parking or selling">
                      Park
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-8-50 hidden border border-gray-500 py-3.5 text-oksm font-semibold text-gray-300 md:block">
                    <span className="group inline-flex">
                      Registrar
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-6-50 w-2-10 sm:border sm:border-gray-500 py-3.5 text-oksm font-semibold text-gray-300">
                    <span className="group inline-flex">
                      Time-Reg
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-6-50 hidden border border-gray-500 py-3.5 text-oksm font-semibold text-gray-300 md:block">
                    <span className="group inline-flex">
                      Time-End
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-6-50 hidden border border-gray-500 py-3.5 text-oksm font-semibold text-gray-300 md:block">
                    <span className="group inline-flex">
                      Status
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="w-7-50 hidden py-3.5 text-oksm font-semibold text-gray-300 md:block">
                    <span className="group inline-flex">
                      NameServer
                      <span className="hidden flex-none rounded text-gray-400 lg:block">
                        <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                </div>
                

                <div className="bg-white">
                  {people.map((person,personIdx) => (
                    <div
                      key={person.id}
                      className="flex min-w-full border-collapse truncate !bg-opacity-40 text-center even:bg-green-50 hover:bg-gray-200"
                    >
                      <div className="w-2-50 w-1-10 whitespace-nowrap border border-gray-200 py-3 text-oksm font-medium text-gray-500">
                        <input
                          id={`${person.id}-${personIdx}`}
                          name={`${person.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="w-2-50 hidden md:block whitespace-nowrap border border-gray-200 py-3 text-oksm font-medium text-gray-500">
                        {person.id}
                      </div>
                      <div className="w-7-50 w-3-10 truncate whitespace-nowrap border border-gray-200 py-3 text-left text-oksm font-medium text-blue-500 sm:pl-4" title={person.name}>
                        {person.name}
                      </div>
                      <div className="w-2-50 w-1-10 whitespace-nowrap border border-gray-200 py-3 text-oksm text-gray-500">
                        {person.typotype}
                      </div>
                      <div className="w-2-50 w-1-10 flex items-center justify-center whitespace-nowrap border border-gray-200 py-3 text-oksm uppercase">
                        {person.okreg == 'available' ? (
                          <span className="h-5 w-5 rounded-full font-bold  text-green-400">
                            <CheckCircleIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : person.okreg === 'registered' ? 
                          <span className="h-5 w-5 rounded-full font-bold  text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 font-bold">
                              <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
                            </svg>
                          </span>
                         : 
                          <span className="h-5 w-5 rounded-full font-bold  text-green-200">
                            <QuestionMarkCircleIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        }
                      </div>
                      <div className="w-2-50 w-1-10 flex items-center justify-center whitespace-nowrap border border-gray-200 py-3 text-oksm uppercase text-gray-500">
                        <span
                          className={classNames(
                            person.delorredemp
                              ? 'h-5 w-5 rounded-full bg-orange-100 font-bold text-orange-700 hover:bg-orange-200'
                              : 'h-5 w-5 rounded-full bg-green-50 font-bold text-green-700 hover:bg-green-200'
                          )}
                        >
                          {person.delorredemp}
                        </span>
                      </div>
                      <div className="w-2-50 w-1-10 flex items-center justify-center whitespace-nowrap border border-gray-200 text-oksm uppercase text-gray-500">
                        <span
                          className={classNames(
                            person.parkorbuy
                              ? 'h-5 w-5 rounded-full bg-orange-100 font-bold text-orange-700 hover:bg-orange-200'
                              : 'h-5 w-5 rounded-full bg-green-50 font-bold text-green-700 hover:bg-green-200'
                          )}
                        >
                          {person.parkorbuy}
                        </span>
                      </div>
                      <div className="w-8-50 hidden truncate whitespace-nowrap border border-gray-200 py-3 pl-4 text-left text-oksm text-gray-500 md:block" titile={person.registrar}>
                        {person.registrar}
                      </div>
                      <div className="w-5-50 w-2-10 truncate whitespace-nowrap border border-gray-200 py-3 text-oksm text-gray-500">
                        {person.timereg}
                      </div>
                      <div className="w-5-50 hidden truncate whitespace-nowrap border border-gray-200 py-3 text-oksm text-gray-500 md:block">
                        {person.timeend}
                      </div>
                      <div className="w-6-50 hidden truncate whitespace-nowrap border border-gray-200 py-3 pl-4 text-oksm text-gray-500 md:block" title={person.status}>
                        {person.status}
                      </div>
                      <div className="w-7-50 hidden truncate whitespace-nowrap border-t border-b border-l border-gray-200 py-3 pl-4 text-left text-oksm text-gray-500 md:block" title={person.nameserver}>
                        {person.nameserver}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function TypoCheckResult() {
  return (
    <>
      {people.length ? (
        <IsResults />
      ) : (
        <NoResults> Typo Domain Generator Result </NoResults>
      )}
    </>
  )
}
