/* This example requires Tailwind CSS v2.0+ */
import { SelectorIcon,CheckCircleIcon,XCircleIcon } from '@heroicons/react/solid'
import { NoResults } from '@/components/NoResults'
import { Savailable } from '@/components/Savailable'
import { Sunavailable } from '@/components/Sunavailable'
import { Sunknow } from '@/components/Sunknow'
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
    <div className="py-2 align-middle min-w-full sm:flex space-x-2 overflow-hidden sm:overflow-visible">
      <div className="shadow sm:mx-auto w-screen 2xl:max-w-screen-2xl">
        <div className="sticky top-0 z-10 min-w-full border-collapse text-center flex bg-gray-500 rounded-t-lg">
          <div className="py-3.5 text-sm font-semibold text-gray-300  w-2-50 w-1-10">
            <span  className="group inline-flex">
              Id
              <span className="flex-none rounded text-gray-400 hidden lg:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 border border-gray-500 w-7-50 w-3-10">
            <span  className="group inline-flex">
              Domain
              <span className="flex-none rounded text-gray-400 hidden lg:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 border border-gray-500 w-2-50">
            <span  className="group inline-flex">
              Type
              <span className="flex-none rounded text-gray-400 hidden lg:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 border border-gray-500 w-2-50 w-1-10">
            <span  className="group inline-flex">
              <span className="flex-none rounded text-green-500">
                <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-none rounded text-gray-400 hidden hover:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 border border-gray-500 w-2-50 w-1-10">
            <span  className="group inline-flex">
              <span className="flex-none rounded text-orange-500">
                <XCircleIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-none rounded text-gray-400 hidden hover:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 w-2-50 w-1-10">
            <span  className="group inline-flex">
              Park
              <span className="flex-none rounded text-gray-400 hidden hover:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 border border-gray-500 w-8-50 hidden md:block">
            <span  className="group inline-flex">
              Registrar
              <span className="flex-none rounded text-gray-400 hidden lg:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 border border-gray-500 w-5-50 w-2-10">
            <span  className="group inline-flex">
              Time-Reg
              <span className="flex-none rounded text-gray-400 hidden lg:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 border border-gray-500 w-5-50 w-2-10">
            <span  className="group inline-flex">
              Time-End
              <span className="flex-none rounded text-gray-400 hidden lg:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 border border-gray-500 w-6-50 hidden md:block">
            <span  className="group inline-flex">
              Status
              <span className="flex-none rounded text-gray-400 hidden lg:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="py-3.5 text-sm font-semibold text-gray-300 w-9-50 hidden md:block">
            <span  className="group inline-flex">
              NameServer
              <span className="flex-none rounded text-gray-400 hidden lg:block">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </div>
        </div>
        <div className="bg-white">
            {people.map((person) => (
              <div key={person.id} className="min-w-full divide-y divide-gray-300 border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                <div className="whitespace-nowrap py-3 text-sm font-medium text-gray-500 border border-gray-200 w-2-50 w-1-10">
                  {person.id}
                </div>
                <div className="text-blue-500 whitespace-nowrap py-3 text-sm font-medium border border-gray-200 w-7-50 truncate text-left sm:pl-4 w-3-10">
                  {person.name}
                </div>
                <div className="whitespace-nowrap py-3 text-sm text-gray-500 border border-gray-200 w-2-50">{person.typotype}</div>
                <div className="whitespace-nowrap py-3 text-sm border border-gray-200 w-2-50 w-1-10 flex items-center justify-center uppercase">


                {person.okreg == "available" ? <Savailable /> : person.okreg == "registered" ? <Sunavailable /> : <Sunknow />
                }

                </div>
                <div className="whitespace-nowrap py-3 text-sm text-gray-500 border border-gray-200 w-2-50 w-1-10 flex items-center justify-center uppercase">
                  <span className={classNames(
                    person.delorredemp ? 'rounded-full h-5 w-5 bg-orange-100 text-orange-700 font-bold hover:bg-orange-200' : 'rounded-full bg-green-100 h-5 w-5 text-green-700 font-bold hover:bg-green-200'
                  )}> 
                    {person.delorredemp}
                  </span>
                </div>
                <div className="whitespace-nowrap text-sm text-gray-500 border border-gray-200 w-2-50 w-1-10 flex items-center justify-center uppercase">
                  <span className={classNames(
                    person.parkorbuy ? 'rounded-full h-5 w-5 bg-orange-100 text-orange-700 font-bold hover:bg-orange-200' : 'rounded-full bg-green-100 h-5 w-5 text-green-700 font-bold hover:bg-green-200'
                  )}>
                    {person.parkorbuy}
                  </span>
                </div>
                <div className="whitespace-nowrap py-3 text-sm text-gray-500 border border-gray-200 w-8-50 truncate text-left pl-4 hidden md:block">{person.registrar}</div>
                <div className="whitespace-nowrap py-3 text-sm text-gray-500 border border-gray-200 w-5-50 w-2-10 truncate">{person.timereg}</div>
                <div className="whitespace-nowrap py-3 text-sm text-gray-500 border border-gray-200 w-5-50 w-2-10 truncate">{person.timeend}</div>
                <div className="whitespace-nowrap py-3 text-sm text-gray-500 border border-gray-200 w-6-50 truncate pl-4 hidden md:block">{person.status}</div>
                <div className="whitespace-nowrap py-3 text-sm text-gray-500 border border-gray-200 w-9-50 truncate text-left pl-4 hidden md:block">{person.nameserver}</div>

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
      {people.length
        ?
          <IsResults />
        :
          <NoResults> Typo Domain Generator Result </NoResults>
      }
    </>
    
  )
}
