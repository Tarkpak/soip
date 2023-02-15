/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { SelectorIcon,XCircleIcon,PlusIcon,PencilAltIcon,SpeakerphoneIcon,DownloadIcon,InboxInIcon } from '@heroicons/react/solid'
import { Pagination } from '@/components/Pagination'

const posts = [
  {id: '1', all: '110', approved: '80', rejected: '10', pendding: '10', draft: '10', thismonth: '1',lastmonth:'1',status:'10'},
]

const domains = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.comabcdefghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '2', name: 'What is a Sales Development Rep? How to Get a Job and the Skills You Need', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '3', name: 'ijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '4', name: 'abtuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '5', name: 'efghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '6', name: 'eqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '7', name: 'defghijklmnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '8', name: 'aeqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '9', name: 'imnopqrstuvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '10', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '11', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  {id: '12', name: 'uvwxyz.com', da: '100', backlink: '12345678901', domainpop: '12345678', year: '88',archiveby:'1998',archivenum:'655555' ,inkeys:'8',cat:'search engine',word:'1',tld:'com',within:'',dashnum:'',charnum:'',dropdate:'2022-08-08'},
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function BlogPost() {
  return (
    <div>
      <div className="text-lg">
        <div className="flex w-full items-start justify-between text-left text-gray-400">
          <span className="font-medium text-gray-900">
            <h3 className="text-xl font-semibold text-orange-500 sm:tracking-tight px-4">
              <PencilAltIcon className="h-6 w-6 text-mygreen-500" aria-hidden="true" />
                <span className="ml-2 space-x-4">
                  <span>Posts</span>
                  <a href='/account/newpost' ><span className="text-green-600 font-base text-base border py-1 px-4 bg-gray-50 hover:text-green-700 hover:bg-gray-200">Add New</span></a>
                </span>
            </h3>
          </span>
        </div>
      </div>


      {/* submitted your brands  --------START----------*/}
      <div className="my-4">
      </div>
      <div className="flex flex-col">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full divide-y divide-gray-100 border-collapse text-center flex bg-green-50">
                <div className="py-2 text-sm font-semibold text-green-700 border border-gray-100 w-10-50 w-2-10">
                  <span  className="group inline-flex">
                    All
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-green-700 border border-gray-100 w-6-50 w-2-10">
                  <span  className="group inline-flex">
                    Approved
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-400 border border-gray-100 w-6-50 w-2-10">
                  <span  className="group inline-flex">
                    Pendding
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-orange-600 border border-gray-100 w-6-50 w-2-10">
                  <span  className="group inline-flex">
                    Rejected
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-400 border border-gray-100 w-6-50 hidden md:block">
                  <span  className="group inline-flex">
                    Draft
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-green-700 border border-gray-100 w-6-50 hidden md:block">
                  <span  className="group inline-flex">
                    This Month
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-green-700 border border-gray-100 w-6-50 hidden md:block">
                  <span  className="group inline-flex">
                    Last Month
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-green-700 border border-gray-100 w-4-50 w-2-10">
                  <span  className="group inline-flex">
                    Notice
                  </span>
                </div>
              </div>
              <div className="bg-white">
                  {posts.map((post) => (
                    <div key={post.id} className="min-w-full  border-collapse text-center truncate flex">
                      <div className="whitespace-nowrap py-2 text-mysm font-bold text-green-500 border border-green-100 w-10-50 truncate text-left sm:pl-4 w-2-10 text-center">{post.all}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold  text-green-500 border border-green-100 w-6-50 truncate w-2-10">{post.approved}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-gray-400 border border-green-100 w-6-50 truncate w-2-10">{post.pendding}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-orange-500 border border-green-100 w-6-50 truncate w-2-10">{post.rejected}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-gray-400 border border-green-100 w-6-50 truncate hidden md:block">{post.draft}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-green-700 border border-green-100 w-6-50 truncate hidden md:block">{post.thismonth}</div>
                      <div className="whitespace-nowrap py-2 text-sm font-bold text-green-700 border border-green-100 w-6-50 truncate hidden md:block">{post.lastmonth}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-300 hover:text-gray-500 border border-green-100 w-4-50 w-2-10">
                        <button type="submit" >
                        <XCircleIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submitted your brands  --------END----------*/}
      {/* submitted your domains  --------START----------*/}
      <div className="mt-4">

        <div className="flex space-x-4 pt-1 pb-4">
          <div>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              defaultValue="Bulk Action"
              className="w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs"
            >
              <option value="bulkaction">Bulk Action</option>
              <option value="edit">Edit</option>
              <option value="trash">Trash</option>
            </select>
          </div>
          <div className="">
            <button
            type="submit"
            className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-500"
            >
              Apply
            </button>
          </div>

          <div>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              defaultValue="Bulk Action"
              className="w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs"
            >
              <option value="bulkaction">All dates</option>
              <option value="edit">Edit</option>
              <option value="trash">Trash</option>
            </select>
          </div>
          <div>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              defaultValue="Bulk Action"
              className="w-full py-1 px-8 border border-gray-300 bg-white rounded-md shadow-sm  focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white text-xs"
            >
              <option value="bulkaction">All Categories</option>
              <option value="edit">Edit</option>
              <option value="trash">Trash</option>
            </select>
          </div>
          <div className="">
            <button
            type="submit"
            className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-500"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-8">
        <div>
          <div className="align-middle min-w-full space-x-2 overflow-hidden sm:overflow-visible">
            <div className=" shadow 2xl:max-w-screen-2xl sm:mx-auto">
              <div className="sticky top-0 z-10 min-w-full border-collapse text-center flex bg-gray-500  rounded-t-lg">
                <div className="py-2 text-sm font-semibold text-gray-300 w-2-50 w-1-10 text-left sm:pl-4">
                  <input
                    id='cb-select-all-1'
                    type='checkbox'
                    className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                  />
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-33-50 w-8-10">
                  <span  className="group inline-flex">
                    Title
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-10-50 hidden md:block">
                  <span  className="group inline-flex">
                    Category
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 border border-gray-500 w-10-50 hidden md:block">
                  <span  className="group inline-flex">
                    Time
                  </span>
                </div>
                <div className="py-2 text-sm font-semibold text-gray-300 w-5-50 w-1-10">
                  <span  className="group inline-flex">
                    Status
                    <span className="flex-none rounded  text-gray-400 hidden lg:block ">
                      <SelectorIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-white">
                  {domains.map((dom,domIdx) => (
                    <div key={dom.id} className="min-w-full border-collapse text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200">
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-500 border-b border-gray-200 w-2-50 truncate text-left sm:pl-4 w-1-10">
                        <input
                          id={`${dom.id}-${domIdx}`}
                          name={`${dom.id}[]`}
                          type='checkbox'
                          className='text-mygreen-500 h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-white'
                        />
                      </div>
                      <div className="whitespace-nowrap py-2 text-mysm font-semibold text-blue-400 border-b border-gray-200 w-33-50 truncate text-left sm:pl-4 w-8-10">{dom.name}</div>
                      <div className="whitespace-nowrap py-2 text-xs font-medium text-gray-500 border-b border-gray-200 w-10-50 truncate  hidden md:block">{dom.da}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-500 border-b border-gray-200 w-10-50 truncate hidden md:block">{dom.backlink}</div>
                      <div className="whitespace-nowrap py-2 text-xs text-gray-300 hover:text-gray-500 border-b border-b border-gray-200 w-5-50 w-1-10">
                        <button type="submit" >
                        <XCircleIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* submitted your domains  --------END----------*/}
        <Pagination />
      </div>
  )
}
