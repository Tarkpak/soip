/* This example requires Tailwind CSS v2.0+ */
import { SelectorIcon } from '@heroicons/react/solid'

const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'gd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'https://www.usa',tld:'com',dropdate:'2022-08-08'},
  {id: '10', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'nj', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '11', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'dp', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '12', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'gd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '13', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'nj', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '14', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'dp', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '15', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'gd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '16', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'nj', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '17', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'dp', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '18', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'gd', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '19', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'nj', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  {id: '111', name: 'abcdefghijklmnopqrstuvwxyz.com', place:'dp', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',aby:2010,DomValued:'6,998',askbid:'655,555' ,golink:'usa',tld:'com',dropdate:'2022-08-08'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ExpiredResult() {
  return (
    <div>

      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full  border-collapse text-center flex rounded-t-lg bg-gray-500">
                <div className="py-2 text-sm font-semibold text-gray-300 w-2-50 w-1-10 text-center">
                  <input
                    id='cb-select-all-1'
                    type='checkbox'
                    className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                  />
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-11-50 w-4-10">
                  <span  className="group inline-flex">
                    Domain
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-3-50 hidden md:block">
                  <span  className="group inline-flex" title='Auctions Platform'>
                    P
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-3-50 w-1-10">
                  <span  className="group inline-flex" title="Domain Authority">
                    DA
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-5-50 w-2-10">
                  <span  className="group inline-flex" title="BackLinks">
                    BL
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-5-50 hidden md:block">
                  <span  className="group inline-flex" title="Number of Backlinks from different Domains">
                    R-D
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-3-50 hidden md:block">
                  <span  className="group inline-flex">
                    Years
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-4-50 hidden md:block">
                  <span  className="group inline-flex" title="The Birth Year of the Domain using the first found Date from archive.org">
                    ABY
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-5-50 hidden md:block">
                  <span  className="group inline-flex" title="Estimated Value">
                    BidNow
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 sm:border sm:border-gray-500 w-5-50 w-2-10">
                  <span  className="group inline-flex">
                    Valued
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-5-50 hidden md:block">
                  <span  className="group inline-flex" title="Time Left">
                    ED
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-white">
                  {domains.map((dom,domIdx) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border-b border-gray-200 w-2-50 truncate text-center w-1-10">
                        <input
                          id={`${dom.id}-${domIdx}`}
                          name={`${dom.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-11-50 truncate text-left sm:pl-4 w-4-10">
                        <a href={dom.golink} title={dom.name} target="_blank" className="hover:underline" rel="nofollow">
                          {dom.name}
                        </a>
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate  hidden md:block uppercase">
                          {dom.place}
                      </div>
                      <div className={classNames(
                          dom.da > 35 ? 'whitespace-nowrap py-2 text-xs text-green-700 font-semibold border border-gray-200 w-3-50 truncate w-1-10' : 'whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-3-50 truncate w-1-10'
                        )}> 
                        {dom.da}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-2-10">{dom.backlink}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block">{dom.domainpop}</div>
                      <div className={classNames(
                          dom.year > 20 ? 'text-green-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block'
                        )}> 
                        {dom.year}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 text-left pl-4 hidden md:block" title={dom.aby}>{dom.aby}</div>
                      <div className={classNames(
                          dom.askbid.replace(',','') > 2000 ? 'text-orange-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-2-10' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-2-10k'
                        )}> 
                        ${dom.askbid}
                      </div>
                      <div className={classNames(
                          (dom.DomValued).replace(',','') > 5000 ? 'text-green-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate hidden md:block'
                        )}> 
                        ${dom.DomValued}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border-t border-b border-l border-gray-200 w-5-50 hidden md:block">{dom.dropdate}</div>
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
