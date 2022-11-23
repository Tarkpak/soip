/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const aucdoms = [
{id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa',da: 10, backlink: 12345678901,  years: 18,askbid:'3,025', strvalue:'1,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
{id: '11', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18,askbid:'2,025', strvalue:'2,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
{id: '12', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18,askbid:'2,025', strvalue:'2,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
{id: '13', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18,askbid:'2,025', strvalue:'2,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
{id: '14', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18,askbid:'2,025', strvalue:'2,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
{id: '15', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18,askbid:'2,025', strvalue:'2,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
{id: '16', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18,askbid:'2,025', strvalue:'2,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
{id: '17', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18,askbid:'2,025', strvalue:'2,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
{id: '18', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18,askbid:'2,025', strvalue:'3,135', aby:1987, rank:1000,dropdate:'08-08-2022'},
]

const expdoms = [
  {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', da: 100, backlink: 12345678901, rd:11123, years: 18 ,aby:1990, rank:1000, dropdate:'08-08-2022'},
  {id: '12', name: 'abcdefghijklmnopqrstuvwxyz.com', da: 100, backlink: 12345678901, rd:12356, years: 18 ,aby:2020, rank:1000,dropdate:'08-08-2022'},
  ]

  const tradoms = [
    {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18, traffic:'1,000', renevue:'1,025',askbid:'2,025', strvalue:'3,135', rank:1000, dropdate:'08-08-2022'},
    {id: '12', name: 'abcdefghijklmnopqrstuvwxyz.com', golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18, traffic:'10,000', renevue:'1,025',askbid:'2,025', strvalue:'3,135',  rank:1000, dropdate:'08-08-2022'},
    ]

const mardoms = [
    {id: '1', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'godaddy',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18, askbid:'11,025', aby:2000, rank:1000, dropdate:'08-08-2022'},
    {id: '12', name: 'abcdefghijklmnopqrstuvwxyz.com', platform:'hugedomains',golink:'https://www.usa', da: 100, backlink: 12345678901,  years: 18, askbid:'1,025', aby:2000, rank:1000, dropdate:'08-08-2022'},
    ]


const Expireds = () => {
  return (
    <>
      <div className="px-4 text-xs">
      <span className="text-gray-300">* Inclue Godaddy , Dropcatch and Namejet datas.</span>
      <span className="underline text-blue-green text-sm font-semibold pl-4 sm:pl-0 sm:float-right pr-4 hover:text-green-700 hover:font-bold"><a href="/expireddomains" target="_blank">See More</a></span>
      </div>        
      <div className="sm:px-4 pb-8 pt-4">
        <div className="sticky rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2  w-13-50 w-5-10">
            <span  className="group inline-flex">
              Domain
            </span>
          </div>
          <div className="py-2 w-5-50 w-3-10">
            <span  className="group inline-flex">
              <span className="hidden lg:inline lg:pr-1">Current</span>Bid
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex">
            <span className="hidden lg:inline lg:pr-1">Estimated</span>Value
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex" title='Auctions Platform'>
              Platform
            </span>
          </div>
          <div className="py-2 w-4-50 w-1-10">
            <span  className="group inline-flex">
              Y<span className="hidden lg:inline">ea</span>rs
            </span>
          </div>
          <div className="py-2 w-4-50 w-1-10">
            <span  className="group inline-flex" title="Domain Authority">
              DA
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex">
              BackLinks
            </span>
          </div>
          <div className="py-2 w-4-50 hidden md:block">
            <span  className="group inline-flex" title="The Birth Year of the Domain using the first found Date from archive.org">
              ABY
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex" title="Time Left">
              Ended
            </span>
          </div>
        </div>
        {aucdoms.map((aucdom) => (
          <div key={aucdom.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
            <div className="whitespace-nowrap py-2 border-r text-left pl-1 sm:pl-4 w-13-50 truncate text-mysm font-semibold text-blue-500 w-5-10">
              <a href={aucdom.golink} className="hover:underline" target="_blank" rel="nofollow">
                {aucdom.name}
              </a>
            </div>
            <div className=
              {
                aucdom.askbid.replace(',','') > 2000 
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate w-3-10 text-orange-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate w-3-10"
              }
            >
              ${aucdom.askbid}
            </div>
            <div className=
              {
                aucdom.strvalue.replace(',','') > 2000
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block text-green-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block"
              }
            >
              ${aucdom.strvalue}
            </div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block">{aucdom.platform}</div>
            <div className="whitespace-nowrap py-2 border-r w-4-50 truncate w-1-10">{aucdom.years}</div>
            <div className=
              {
                aucdom.da >30
                ? 'whitespace-nowrap py-2 border-r w-4-50 truncate w-1-10 text-green-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-4-50 truncate w-1-10"       
              }
            >
              {aucdom.da}
            </div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate  hidden md:block">{aucdom.backlink}</div>
            <div className="whitespace-nowrap py-2 border-r w-4-50 truncate  hidden md:block">{aucdom.aby}</div>
            <div className="whitespace-nowrap py-2 w-5-50 truncate hidden md:block">{aucdom.dropdate}</div>
          </div>
          ))}
      </div>

    </>
  )
}

const Deleteds = () => {
  return (
    <>
      <div className="px-4 text-xs">
      <span className="text-gray-300">* Inclue all Pendding delete .com , .net and .org domains datas.</span>
      <span className="underline text-blue-green text-sm font-semibold pl-4 sm:pl-0 sm:float-right pr-4 hover:text-green-700 hover:font-bold"><a href="/pendingdelete" target="_blank">See More</a></span>
      </div>        
      <div className="sm:px-4 pb-8 pt-4">
        <div className="sticky rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2  w-20-50 w-5-10">
            <span  className="group inline-flex">
              Domain
            </span>
          </div>
          <div className="py-2 w-5-50 w-1-10">
            <span  className="group inline-flex" title="Domain Authority">
              DA
            </span>
          </div>
          <div className="py-2 w-5-50  w-2-10">
            <span  className="group inline-flex"  title="BackLinks">
              B<span className="hidden sm:inline">ack</span>L<span className="hidden sm:inline">inks</span>
            </span>
          </div>
          <div className="py-2 w-5-50  hidden md:block">
            <span  className="group inline-flex" title="Number of Backlinks from different Domains">
              R-D
            </span>
          </div>
          <div className="py-2 w-5-50 w-1-10">
            <span  className="group inline-flex">
              Y<span className="hidden sm:inline">ea</span>rs
            </span>
          </div>
          <div className="py-2 w-5-50 w-1-10">
            <span  className="group inline-flex" title="The Birth Year of the Domain using the first found Date from archive.org">
              ABY
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex" title="Time Left">
              Ended
            </span>
          </div>
        </div>
        {expdoms.map((expdom) => (
          <div key={expdom.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
            <div className="whitespace-nowrap py-2 border-r text-left pl-1 sm:pl-4 w-20-50 truncate text-mysm font-semibold text-blue-500 w-5-10">
              <a href={'/domains/'+expdom.name} className="hover:underline" target="_blank">
                {expdom.name}
              </a>
            </div>
            <div className=
              {
                expdom.da >30
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate w-1-10 text-green-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate w-1-10"       
              }
            >
              {expdom.da}
            </div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate w-2-10">{expdom.backlink}</div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block">{expdom.rd}</div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate w-1-10">{expdom.years}</div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate w-1-10">{expdom.aby}</div>
            <div className="whitespace-nowrap py-2 w-5-50 truncate hidden md:block">{expdom.dropdate}</div>
          </div>
          ))}
      </div>

    </>
  )
}

const Traffics = () => {
  return (
    <>
      <div className="px-4 text-xs">
      <span className="text-gray-300">* Inclue all Godaddy Expired and OK domains datas.</span>
      <span className="underline text-blue-green text-sm font-semibold pl-4 sm:pl-0 sm:float-right pr-4 hover:text-green-700 hover:font-bold"><a href="/trafficdomains" target="_blank">See More</a></span>
      </div>        
      <div className="sm:px-4 pb-8 pt-4">
        <div className="sticky rounded-t-md top-0 z-10 min-w-full text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2  w-14-50 w-4-10">
            <span  className="group inline-flex">
              Domain
            </span>
          </div>
          <div className="py-2 w-5-50 w-2-10">
            <span  className="group inline-flex" title="Estimated monthly pageviews">
              Traffic
            </span>
          </div>
          <div className="py-2 w-5-50 w-2-10">
            <span  className="group inline-flex" title="Estimated monthly revenue">
              Rev<span className="hidden sm:inline">enue</span>
            </span>
          </div>
          <div className="py-2 w-3-50 hidden md:block">
            <span  className="group inline-flex" title="Domain Authority">
              DA
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex">
              Backlinks
            </span>
          </div>
          <div className="py-2 w-3-50  hidden md:block">
            <span  className="group inline-flex">
              Years
            </span>
          </div>
          <div className="py-2 w-5-50 w-2-10">
            <span  className="group inline-flex">
              <span className="hidden lg:inline lg:pr-1">Current</span>Bid
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex">
            <span className="hidden lg:inline lg:pr-1">Estimated</span>Value
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex" title="Time Left">
              Ended
            </span>
          </div>
        </div>
        {tradoms.map((tradom) => (
          <div key={tradom.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
            <div className="whitespace-nowrap py-2 border-r text-left pl-1 sm:pl-4 w-14-50 truncate text-mysm font-semibold text-blue-500 w-4-10">
              <a href={tradom.golink} className="hover:underline" target="_blank" rel="nofollow">
                {tradom.name}
              </a>
            </div>
            <div className={
                (tradom.traffic).replace(',','') >3000
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate w-2-10 text-green-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate w-2-10"       
              }>
              {tradom.traffic}
              </div>
            <div className={
                (tradom.renevue).replace(',','') >100
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate  w-2-10 text-purple-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate  w-2-10"       
              }>

              ${tradom.renevue}
            </div>
            <div className=
              {
                tradom.da >30
                ? 'whitespace-nowrap py-2 border-r w-3-50 truncate hidden md:block text-green-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-3-50 truncate hidden md:block"       
              }
            >
              {tradom.da}
            </div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block">{tradom.backlink}</div>
            <div className="whitespace-nowrap py-2 border-r w-3-50 truncate hidden md:block">{tradom.years}</div>
            <div className=
              {
                tradom.askbid.replace(',','') > 2000 
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate w-2-10 text-orange-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate w-2-10"
              }
            >
              ${tradom.askbid}
            </div>
            <div className=
              {
                tradom.strvalue.replace(',','') > 2000
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block text-green-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block"
              }
            >
              ${tradom.strvalue}
            </div>
            <div className="whitespace-nowrap py-2 w-5-50 truncate hidden md:block">{tradom.dropdate}</div>
          </div>
          ))}
      </div>

    </>
  )
}

const Markets = () => {
  return (
    <>
      <div className="px-4 text-xs">
      <span className="text-gray-300">* Inclue all selling domains now.</span>
      <span className="underline text-blue-green text-sm font-semibold pl-4 sm:pl-0 sm:float-right pr-4 hover:text-green-700 hover:font-bold"><a href="/marketplace" target="_blank">See More</a></span>
      </div>        
      <div className="sm:px-4 pb-8 pt-4">
        <div className="sticky rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2  w-20-50 w-5-10">
            <span  className="group inline-flex">
              Domain
            </span>
          </div>
          <div className="py-2 w-5-50 w-3-10">
            <span  className="group inline-flex" title="Ask or Bid Price">
              <span className="hidden sm:inline">Ask </span>Price
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex" title="Marketplace Platform">
              P<span className="hidden sm:inline">latform</span>
            </span>
          </div>
          <div className="py-2 w-5-50 w-1-10">
            <span  className="group inline-flex" title="Domain Authority">
              DA
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex">
              Backlinks
            </span>
          </div>
          <div className="py-2 w-5-50 w-1-10">
            <span  className="group inline-flex">
              Y<span className="hidden sm:inline">ea</span>rs
            </span>
          </div>
          <div className="py-2 w-5-50 hidden md:block">
            <span  className="group inline-flex" title="The Birth Year of the Domain using the first found Date from archive.org">
              ABY
            </span>
          </div>
        </div>
        {mardoms.map((mardom) => (
          <div key={mardom.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
            <div className="whitespace-nowrap py-2 border-r text-left pl-1 sm:pl-4 w-20-50 truncate text-mysm font-semibold text-blue-500 w-5-10">
              <a href={mardom.golink} className="hover:underline" target="_blank" rel="nofollow">
                {mardom.name}
              </a>
            </div>
            <div className={
                (mardom.askbid).replace(',','') >5000
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate  w-3-10 text-green-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate  w-3-10"       
              }
            >
              ${mardom.askbid}
            </div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block">{mardom.platform}</div>
            <div className=
              {
                mardom.da >30
                ? 'whitespace-nowrap py-2 border-r w-5-50 truncate w-1-10 text-green-700 font-semibold'
                : "whitespace-nowrap py-2 border-r w-5-50 truncate w-1-10"       
              }
            >
              {mardom.da}
            </div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block">{mardom.backlink}</div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate w-1-10">{mardom.years}</div>
            <div className="whitespace-nowrap py-2 border-r w-5-50 truncate hidden md:block">{mardom.aby}</div>
            
          </div>
          ))}
      </div>

    </>
  )
}

const Expiredhidden = () =>{
  return (
    <>
    Expired <span className="hidden sm:inline">Auction Domains</span>
    </>
  )
}
const Deletedhidden = () =>{
  return (
    <>
    <span className="hidden sm:inline">Pending</span> Delete <span className="hidden sm:inline">Domains</span>
    </>
  )
}
const Traffichidden = () =>{
  return (
    <>
    Traffic<span className="hidden sm:inline"> Domains</span>
    </>
  )
}
const Markethidden = () =>{
  return (
    <>
    Market<span className="hidden sm:inline">Place</span>
    </>
  )
}
const Typeselect =[
  {
    id: 1,
    label: <Expiredhidden />,
    content: <Expireds />,
  },
  {
    id: 2,
    label: <Deletedhidden />,
    content: <Deleteds />,
  },
  {
    id: 3,
    label: <Traffichidden />,
    content: <Traffics />,
  },
  {
    id: 4,
    label: <Markethidden />,
    content: <Markets />,
  },
]

const AuctionIcons = () => {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gavel" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385"></path>
   <path d="M6 9l4 4"></path>
   <path d="M13 10l-4 -4"></path>
   <path d="M3 21h7"></path>
   <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z"></path>
</svg>
    </>
  )
}

const CatchIcons = () => {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-grab" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5"></path>
   <path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5"></path>
   <path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5"></path>
   <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
</svg>
    </>
    )
  }
export function HomesData() {

  return (
    <>

    <div className="min-h-full   md:grid md:place-items-center bg-white rounded-lg relative">
      <div className="max-w-max mx-auto min-w-full">
        <main>
          <div className="max-w-7xl mx-auto pt-2 sm:pt-4 sm:px-4">
            <div className="px-2 mb-8 sm:px-0">
              <div className="">
                <div className="text-gray-500">
                <div className="mx-auto text-base text-blue-green font-medium mb-6">
                  <div className="bg-maincolor p-4 flex grid grid-cols-6">
                    <div className="mx-auto place-self-center">
                      <AuctionIcons />
                    </div>
                    <div className="col-span-4 lg:px-10">
                      <p className="font-bold text-md md:text-xl xl:text-2xl">Get the best valued domains with our best free datas</p>
                      <p className="hidden lg:block">Catch and bid on expired domains anywhere, anytime.</p>
                    </div>
                    <div className="mx-auto place-self-center">
                      <CatchIcons />
                    </div>
                  </div> 
                </div>
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-lg bg-maincolor p-1">
                    {Typeselect.map((category, idx) => (
                      <Tab
                        key={idx}
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg py-2.5 text-sm font-semibold leading-5 text-gray-700',
                            '',
                          selected
                            ? 'bg-white shadow text-green-700'
                            : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-600'
                          )
                        }
                      >
                        {category.label}
                      </Tab>
                   ))}
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    {Typeselect.map((post, idx) => (
                      <Tab.Panel
                        key={idx}
                        className='rounded-xl bg-white py-3 px-2'>
                          {post.content}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>




                </div>
              </div>
            </div>
          {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
    </>
  )
}
