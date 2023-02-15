/* This example requires Tailwind CSS v2.0+ */

import { DownOrCopy } from '@/components/DownOrCopy'
import { ToolInput } from '@/components/ToolInput'
import { ToolExcelMenu } from '@/components/ToolExcelMenu'
const people = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', okreg: 'ok', registrar: 'Godaddy1998-08-08Godaddy1998-08-08Godaddy1998-08-08', timereg: '1998-08-08', timeend: '2028-08-08',status:'ok1998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '2', name: '1abcdefghijklmnopqrstuvwxyz.com', okreg: '1ok', registrar: '1Godaddy', timeup: '1997-08-08',timereg: '1997-08-08', timeend: '1998-08-08',status:'1ok',nameserver:'1ns1.bodis.com;ns2.bodis.com',delorredemp:'d' ,parkorbuy:'p'},
  {id: '3', name: 'abcdefghijklmnopqrstuvwxyz.com', okreg: 'ok', registrar: 'Godaddy1998-08-08Godaddy1998-08-08Godaddy1998-08-08', timereg: '1998-08-08', timeend: '2028-08-08',status:'ok1998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '4', name: '1abcdefghijklmnopqrstuvwxyz.com', okreg: '1ok', registrar: '1Godaddy', timeup: '1997-08-08',timereg: '1997-08-08', timeend: '1998-08-08',status:'1ok',nameserver:'1ns1.bodis.com;ns2.bodis.com',delorredemp:'d' ,parkorbuy:'p'},
  {id: '5', name: 'abcdefghijklmnopqrstuvwxyz.com', okreg: 'ok', registrar: 'Godaddy1998-08-08Godaddy1998-08-08Godaddy1998-08-08', timereg: '1998-08-08', timeend: '2028-08-08',status:'ok1998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '6', name: '1abcdefghijklmnopqrstuvwxyz.com', okreg: '1ok', registrar: '1Godaddy', timeup: '1997-08-08',timereg: '1997-08-08', timeend: '1998-08-08',status:'1ok',nameserver:'1ns1.bodis.com;ns2.bodis.com',delorredemp:'d' ,parkorbuy:'p'},
  {id: '7', name: 'abcdefghijklmnopqrstuvwxyz.com', okreg: 'ok', registrar: 'Godaddy1998-08-08Godaddy1998-08-08Godaddy1998-08-08', timereg: '1998-08-08', timeend: '2028-08-08',status:'ok1998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '8', name: '1abcdefghijklmnopqrstuvwxyz.com', okreg: '1ok', registrar: '1Godaddy', timeup: '1997-08-08',timereg: '1997-08-08', timeend: '1998-08-08',status:'1ok',nameserver:'1ns1.bodis.com;ns2.bodis.com',delorredemp:'' ,parkorbuy:''},
  {id: '9', name: 'abcdefghijklmnopqrstuvwxyz.com', okreg: 'ok', registrar: 'Godaddy1998-08-08Godaddy1998-08-08Godaddy1998-08-08', timereg: '1998-08-08', timeend: '2028-08-08',status:'ok1998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '10', name: '1abcdefghijklmnopqrstuvwxyz.com', okreg: '1ok', registrar: '1Godaddy', timeup: '1997-08-08',timereg: '1997-08-08', timeend: '1998-08-08',status:'1ok',nameserver:'1ns1.bodis.com;ns2.bodis.com',delorredemp:'d' ,parkorbuy:'p'},
  {id: '11', name: 'abcdefghijklmnopqrstuvwxyz.com', okreg: 'ok', registrar: 'Godaddy1998-08-08Godaddy1998-08-08Godaddy1998-08-08', timereg: '1998-08-08', timeend: '2028-08-08',status:'ok1998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '12', name: '1abcdefghijklmnopqrstuvwxyz.com', okreg: '1ok', registrar: '1Godaddy', timeup: '1997-08-08',timereg: '1997-08-08', timeend: '1998-08-08',status:'1ok',nameserver:'1ns1.bodis.com;ns2.bodis.com',delorredemp:'r' ,parkorbuy:'b'},
  {id: '213', name: 'abcdefghijklmnopqrstuvwxyz.com', okreg: 'ok', registrar: 'Godaddy1998-08-08Godaddy1998-08-08Godaddy1998-08-08', timereg: '1998-08-08', timeend: '2028-08-08',status:'ok1998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '214', name: '1abcdefghijklmnopqrstuvwxyz.com', okreg: '1ok', registrar: '1Godaddy', timeup: '1997-08-08',timereg: '1997-08-08', timeend: '1998-08-08',status:'1ok',nameserver:'1ns1.bodis.com;ns2.bodis.com',delorredemp:'d' ,parkorbuy:'p'},
  {id: '215', name: 'abcdefghijklmnopqrstuvwxyz.com', okreg: 'ok', registrar: 'Godaddy1998-08-08Godaddy1998-08-08Godaddy1998-08-08', timereg: '1998-08-08', timeend: '2028-08-08',status:'ok1998-08-08',nameserver:'ns1.bodis.com;ns2.bodis.com1998-08-08',delorredemp:'d' ,parkorbuy:'p'},
  {id: '216', name: '1abcdefghijklmnopqrstuvwxyz.com', okreg: '1ok', registrar: '1Godaddy', timeup: '1997-08-08',timereg: '1997-08-08', timeend: '1998-08-08',status:'1ok',nameserver:'1ns1.bodis.com;ns2.bodis.com',delorredemp:'d' ,parkorbuy:'p'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function BulkWhoisCheckResult() {
  return (
    <div className="md:mb-12">
      <div className="mt-8 flex flex-col ">
        <div>
          <DownOrCopy />
          <div className="py-2 align-middle min-w-full sm:flex space-x-2 overflow-hidden sm:overflow-visible">
            <div className="shadow sm:mx-auto w-screen 2xl:max-w-screen-2xl">
              <div className="sticky top-0 z-10 min-w-full border-collapse text-center flex bg-gray-500 rounded-t-lg">
                <ToolInput className=" w-2-50 w-1-10" />
                <ToolExcelMenu className="w-2-50 hidden md:block" title="Id"/>
                <ToolExcelMenu className="w-7-50 w-3-10" title="Domain"/>
                <ToolExcelMenu className="w-8-50 hidden md:block" title="Registrar"/>
                <ToolExcelMenu className="w-4-50 hidden md:block" title="Time-Up"/>
                <ToolExcelMenu className="w-4-50 w-2-10" title="Time-Reg"/>
                <ToolExcelMenu className="w-4-50 w-2-10" title="Time-End"/>
                <ToolExcelMenu className="w-7-50 hidden md:block" title="Status"/>
                <ToolExcelMenu className="w-8-50 hidden md:block" title="NameServer"/>
                <ToolExcelMenu className="w-2-50 w-1-10" title="Del"/>
                <ToolExcelMenu className="w-2-50 w-1-10" title="Park"/>
              </div>
              <div className="bg-white">
                  {people.map((person,personIdx) => (
                    <div key={person.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-3 text-oksm  text-gray-500 border border-gray-200 w-2-50 w-1-10">
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
                      <div className="text-blue-500 whitespace-nowrap py-3 text-oksm font-medium border border-gray-200 w-7-50 truncate text-left sm:pl-4 w-3-10">
                        <a href={"/domains/"+person.name} className="hover:underline" title={person.name} target="_blank">
                          {person.name}
                        </a>
                      </div>

                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-8-50 truncate text-left pl-4 hidden md:block" title={person.registrar}>{person.registrar}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-4-50 hidden md:block truncate">{person.timeup}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-4-50 w-2-10 truncate">{person.timereg}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-4-50 w-2-10 truncate">{person.timeend}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-7-50 truncate pl-4 hidden md:block" title={person.status}>{person.status}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-8-50 truncate text-left pl-4 hidden md:block" title={person.nameserver}>{person.nameserver}</div>
                      <div className="whitespace-nowrap py-3 text-oksm text-gray-500 border border-gray-200 w-2-50 w-1-10 flex items-center justify-center uppercase">
                      <span className={classNames(
                          person.delorredemp ? 'rounded-full h-5 w-5 bg-orange-100 text-orange-700 font-bold hover:bg-orange-200' : 'rounded-full bg-green-50 h-5 w-5 text-green-700 font-bold hover:bg-green-200'
                        )}> 
                          {person.delorredemp}
                        </span>
                      </div>
                      <div className="whitespace-nowrap text-oksm text-gray-500 border-t border-b border-l border-gray-200 w-2-50 w-1-10 flex items-center justify-center uppercase">
                        <span className={classNames(
                          person.parkorbuy ? 'rounded-full h-5 w-5 bg-orange-100 text-orange-700 font-bold hover:bg-orange-200' : 'rounded-full bg-green-50 h-5 w-5 text-green-700 font-bold hover:bg-green-200'
                        )}>
                          {person.parkorbuy}
                        </span>
                      </div>
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
