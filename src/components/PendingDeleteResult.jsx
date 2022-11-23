/* This example requires Tailwind CSS v2.0+ */
import { SelectorIcon,PlusSmIcon,MinusSmIcon } from '@heroicons/react/solid'

const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '2', name: 'abcdeqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '3', name: 'ijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '4', name: 'abtuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '5', name: 'efghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '6', name: 'eqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '7', name: 'defghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '8', name: 'aeqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '9', name: 'imnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '10', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '11', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  {id: '12', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',co:'usa',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'08-08-2022'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function PendingDeleteResult() {
  return (
    <div>

      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500">
                <div className="py-2 text-sm font-semibold text-gray-300 w-2-50 w-1-10 text-center">
                  <input
                    id='cb-select-all-1'
                    type='checkbox'
                    className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                  />
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-13-50 w-5-10">
                  <span  className="group inline-flex">
                    Domain
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-3-50 w-1-10">
                  <span  className="group inline-flex" title="Domain Authority">
                    DA
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-5-50 w-2-10">
                  <span  className="group inline-flex"  title="BackLinks">
                    B<span className="hidden sm:inline">ack</span>L<span className="hidden sm:inline">inks</span>
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-4-50 hidden md:block">
                  <span  className="group inline-flex" title="Number of Backlinks from different Domains">
                    R-D
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-3-50 w-1-10">
                  <span  className="group inline-flex" >
                    Y<span className="hidden sm:inline">ea</span>rs
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-3-50 hidden md:block">
                  <span  className="group inline-flex" title="The Birth Year of the Domain using the first found Date from archive.org">
                    ABY
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-4-50 hidden md:block">
                  <span  className="group inline-flex" title="Archive.org Number of Crawl Results">
                    ACR
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-8-50 hidden md:block">
                  <span  className="group inline-flex" title="Category">
                    Cat
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-5-50 hidden md:block">
                  <span  className="group inline-flex" title="Date the Domain will be removed from this Domain List">
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
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border border-gray-200 w-13-50 truncate text-left pl-1 sm:pl-4 w-5-10">
                        <a href={"/domains/"+dom.name} className="hover:underline" title={dom.name} target="_blank">
                          {dom.name}
                        </a>
                      </div>
                      <div className={classNames(
                          dom.da > 35 ? 'whitespace-nowrap py-2 text-xs text-green-700 font-semibold border border-gray-200 w-3-50 truncate w-1-10' : 'whitespace-nowrap py-2 text-xs font-medium text-gray-500 border border-gray-200 w-3-50 truncate w-1-10'
                        )}> 
                        {dom.da}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 truncate w-2-10">{dom.backlink}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate hidden md:block">{dom.domainpop}</div>
                      <div className={classNames(
                          dom.year > 20 ? 'text-green-700 font-semibold whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate w-1-10' : 'whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate w-1-10'
                        )}> 
                        {dom.year}
                      </div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-3-50 truncate hidden md:block">{dom.archiveby}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-4-50 truncate hidden md:block">{dom.archivenum}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-8-50 text-left pl-4 hidden md:block" title={dom.cat}>{dom.cat}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border border-gray-200 w-5-50 hidden md:block" title={dom.dropdate}>{dom.dropdate}</div>
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
