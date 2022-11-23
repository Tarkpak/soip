/* This example requires Tailwind CSS v2.0+ */
import { useRef,useState } from 'react'
import { Tab } from '@headlessui/react'
import { PlusSmIcon,ShieldExclamationIcon,TagIcon,LockClosedIcon,LockOpenIcon,ExternalLinkIcon , SearchIcon,MenuIcon,MenuAlt4Icon,MinusIcon,BadgeCheckIcon,CheckCircleIcon,CheckIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function copyToClipboard(textToCopy) {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
      // navigator clipboard api method'
      return navigator.clipboard.writeText(textToCopy);
  } else {
      // text area method
      let textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      // make the textarea out of viewport
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
      });
  }
}

const pricesdatas = [
{id: '1', status:'',registrar: 'GoDaddy', tld:'com', regs:'12.00', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'', update_at:'',},
{id: '11', status:'',registrar: 'GoDaddy', tld:'com', regs:'12.25', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'', update_at:'',},
{id: '12', status:'',registrar: 'GoDaddy', tld:'com', regs:'12.26', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'2', update_at:'',},
{id: '13', status:'',registrar: 'GoDaddy', tld:'com', regs:'12.00', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'', update_at:'',},
{id: '123', status:'',registrar: 'GoDaddy', tld:'com', regs:'123.00', renew:'12.00', trans:'12.00', whois:'1', tax:'', bitcoin:'1', feature:'', icann:'', notes:'', code:'', update_at:'',},
]


const Circle1 = () => {
  return(
    <>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-open text-green-500" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <rect x="5" y="11" width="14" height="10" rx="2"></rect>
   <circle cx="12" cy="16" r="1"></circle>
   <path d="M8 11v-5a4 4 0 0 1 8 0"></path>
</svg>
    </>
  )
}
const Circle2 = () => {
  return(
    <>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock text-orange-500" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <rect x="5" y="11" width="14" height="10" rx="2"></rect>
   <circle cx="12" cy="16" r="1"></circle>
   <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
</svg>
    </>
  )
}
const Circle3 = () => {
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
      </svg>
    </>
  )
}
const Award = () => {
  return(
    <>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-award" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="9" r="6"></circle>
   <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)"></polyline>
   <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)"></polyline>
</svg>
    </>
  )
}
const Cup = ({className}) => {
  return(
    <>
<svg xmlns="http://www.w3.org/2000/svg" class={className} width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line x1="8" y1="21" x2="16" y2="21"></line>
   <line x1="12" y1="17" x2="12" y2="21"></line>
   <line x1="7" y1="4" x2="17" y2="4"></line>
   <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
   <circle cx="5" cy="9" r="2"></circle>
   <circle cx="19" cy="9" r="2"></circle>
</svg>
    </>
  )
}
const Coupons = () => {
  return(
    <>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ticket text-purple-400 hover:text-purple-500" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line x1="15" y1="5" x2="15" y2="7"></line>
   <line x1="15" y1="11" x2="15" y2="13"></line>
   <line x1="15" y1="17" x2="15" y2="19"></line>
   <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
</svg>
    </>
  )
}
const Whoisprivay= () => {
  return(
    <>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-check text-green-200" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 12l2 2l4 -4"></path>
   <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
</svg>
    </>
  )
}
const Bitcoin = () => {
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-bitcoin text-orange-100" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"></path>
        <line x1="8" y1="6" x2="8" y2="18"></line>
        <line x1="8" y1="12" x2="14" y2="12"></line>
        <line x1="9" y1="3" x2="9" y2="6"></line>
        <line x1="13" y1="3" x2="13" y2="6"></line>
        <line x1="9" y1="18" x2="9" y2="21"></line>
        <line x1="13" y1="18" x2="13" y2="21"></line>
      </svg>
    </>
  )
}



const HandleCopy = (e,coupons) => {
  e.preventDefault()
  copyToClipboard(coupons)
    .then((res) => {
      alert('Copy Coupon Successful')
    })
    .catch((err) => {
      console.log(err)
      alert('Copy Fail')
    })
}
const Newdata = () => {

  return (
    <>
     <div className="px-4 text-xs hidden lg:flex lg:grid lg:grid-cols-2">
      <span className="text-gray-400 place-self-center">* <Bitcoin /> = Accept Bitcoin , <Whoisprivay /> = Free Whois Privacy , <Coupons /> = Click to Copy <span className="font-semibold">Coupon Code</span></span>

      <form method="POST" action="">
        <div className="rounded-md border border-gray-300 mx-4  text-center place-self-center hidden md:flex">
          <div className="relative border-r border-gray-300 flex flex-grow items-stretch focus-within:z-10">
            <input
              type=""
              name="domainkeyword"
              id="domainkeyword"
              className="block w-full rounded-none placeholder-gray-300 border-none focus:outline-none focus:border-transparent focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-200 px-4 lg:px-20 sm:text-sm"
              placeholder="Please enter a extension"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <SearchIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
          </button>
        </div>
      </form>
      </div>        
      <div className="sm:px-4 pb-8 pt-2">
        <div className="sticky py-1 rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2  w-10-50 w-2-10">
            <span  className="group inline-flex">
              TLD
            </span>
          </div>
          <div className="py-2 w-15-50 hidden md:block">
            <span  className="align-center">
              <LockClosedIcon className="h-4 w-4 text-gray-300 mr-2" aria-hidden="true" /><span>Limited</span>
            </span>
          </div>
          <div className="py-2 w-15-50 w-6-10">
            <span  className="align-center">
             <LockOpenIcon className="h-4 w-4 text-gray-300 mr-2" aria-hidden="true" /><span>Bulk</span>
            </span>
          </div>
          <div className="py-2 w-10-50 w-2-10">
            <span  className="group inline-flex">
              
            </span>
          </div>
        </div>

        {pricesdatas.map((price) => (
          <div key={price.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
            <div className="whitespace-nowrap py-3 border-r truncate text-mysm font-semibold text-blue-500 w-10-50 w-2-10">
              <span className="nav-blue-color hover:bg-blue-500 text-white py-1 md:px-3 rounded-md md:font-bold text-xs md:text-sm"><a href={"/domainsprice/"+price.tld} target="_blank">.{price.tld}</a></span>
            </div>
            <div className='whitespace-nowrap py-4 border-r truncate w-15-50 hidden md:block'>
              <div className="flex grid grid-cols-2 lg:grid-cols-3">

                <div className=""><span className="text-orange-600 bg-maincolor py-1 px-3 rounded-md font-semibold">${price.regs}</span></div>
                <div className="">
                  <span className="text-white bg-filter py-1 px-3 rounded-md font-medium">
                    <a className="hover:underline xl:space-x-2" href="" target="_blank" rel="nofollow">
                      <span title={price.registrar}>{price.registrar}</span>
                      {price.bitcoin ? <span className="hidden lg:inline-block" title="Accept Bitcoin Payment"><Bitcoin /></span> : null} 
                      {price.whois >0 ? <span className="hidden lg:inline-block" title="Free Whois Privacy"><Whoisprivay /></span>:null }
                    </a>
                  </span>
                </div>
                <div className="pr-2 hidden lg:block place-self-center">
                  {price.code ? <button type="button" className="relative"><span onClick={(e) => {HandleCopy(e,price.code)}} title={'Click to copy the Coupon : '+price.code}><Coupons /></span></button> : null}
                </div>

              </div>
            </div>
            <div className='whitespace-nowrap py-3 border-r truncate w-15-50 w-6-10'>
              <div className="flex grid grid-cols-2">
                <div className=""><span className="xl:float-right  py-1 rounded-md sm:font-semibold"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
                <div className="place-self-center">
                  <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                    <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                    {price.bitcoin ? <span className="hidden lg:inline-block" title="Accept Bitcoin Payment"><Bitcoin /></span> : null} 
                    {price.whois >0 ? <span className="hidden lg:inline-block" title="Free Whois Privacy"><Whoisprivay /></span>:null }
                  </span>
                </div>
              </div>
            </div>
            <div className='whitespace-nowrap py-3 truncate text-mysm font-semibold w-10-50 w-2-10'><a className="text-blue-500 hover:text-blue-600" href={"/domainsprice/"+price.tld} target="_blank"><PlusSmIcon className="h-5 w-5" aria-hidden="true" /><span className="hidden sm:inline-block hover:underline">more</span></a></div>
          </div>
          ))}
      </div>

    </>
  )
}
const Renewdata = () => {

  return (
    <>
     <div className="px-4 text-xs hidden lg:flex lg:grid lg:grid-cols-2">
      <span className="text-gray-400 place-self-center">* <Bitcoin /> = Accept Bitcoin , <Whoisprivay /> = Free Whois Privacy , <Coupons /> = Click to Copy <span className="font-semibold">Coupon Code</span></span>
      <form method="POST" action="">
        <div className="rounded-md border border-gray-300 mx-4  text-center place-self-center hidden md:flex">
          <div className="relative border-r border-gray-300 flex flex-grow items-stretch focus-within:z-10">
            <input
              type=""
              name="domainkeyword"
              id="domainkeyword"
              className="block w-full rounded-none placeholder-gray-300 border-none focus:outline-none focus:border-transparent focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-200 px-4 lg:px-20 sm:text-sm"
              placeholder="Please enter a extension"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <SearchIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
          </button>
        </div>
      </form>
      </div>        
      <div className="sm:px-4 pb-8 pt-2">
        <div className="sticky py-1 rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2  w-7-50 w-2-10">
            <span  className="group inline-flex">
              TLD
            </span>
          </div>
          <div className="py-2 w-12-50 w-6-10">
            <span  className="align-center py-1 px-2">
            <MenuIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-12-50 hidden md:block">
            <span  className="align-center py-1 px-2">
            <MenuAlt4Icon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-12-50 hidden md:block">
            <span  className="align-center py-1 px-2">
            <MinusIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-7-50 w-2-10">
            <span  className="group inline-flex">
            </span>
          </div>
        </div>

        {pricesdatas.map((price) => (
          <div key={price.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
            <div className="whitespace-nowrap py-4 border-r truncate text-mysm font-semibold text-blue-500 w-7-50 w-2-10">
              <span className="nav-blue-color hover:bg-blue-500 text-white py-1 md:px-3 rounded-md md:font-bold text-xs md:text-sm"><a href={"/domainsprice/"+price.tld} target="_blank">.{price.tld}</a></span>
            </div>
            <div className='whitespace-nowrap py-4 border-r truncate w-12-50 w-6-10'>
            <div className="flex grid grid-cols-2">
                <div className=""><span className="text-orange-600 bg-maincolor py-1 px-3 rounded-md font-semibold"><span className="">${price.regs}</span></span></div>
                <div className="place-self-center">
                  <span className="text-white bg-filter py-1 px-3 rounded-md font-medium">
                    <a className="hover:underline xl:space-x-1" href="" target="_blank" rel="nofollow">
                      <span className="mr-1" title={price.registrar}>{price.registrar}</span>
                      {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><Bitcoin /></span> : null} 
                      {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><Whoisprivay /></span>:null }
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='whitespace-nowrap py-4 border-r truncate w-12-50 hidden md:block'>
              <div className="flex grid grid-cols-2">
                <div className=""><span className="py-1 rounded-md sm:font-semibold text-green-700"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
                <div className="place-self-center">
                  <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                    <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                    {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><Bitcoin /></span> : null} 
                    {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><Whoisprivay /></span>:null }
                  </span>
                </div>
              </div>
            </div>
            <div className='whitespace-nowrap py-4 border-r truncate w-12-50 hidden md:block'>
              <div className="flex grid grid-cols-2">
                <div className=""><span className="py-1 rounded-md sm:font-semibold"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
                <div className="place-self-center">
                  <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                    <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                    {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><Bitcoin /></span> : null} 
                    {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><Whoisprivay /></span>:null }
                  </span>
                </div>
              </div>
            </div>
            <div className='whitespace-nowrap py-4 truncate text-mysm font-semibold w-7-50 w-2-10'><a className="text-blue-500 hover:text-blue-600" href={"/domainsprice/"+price.tld} target="_blank"><PlusSmIcon className="h-5 w-5" aria-hidden="true" /><span className="hidden sm:inline-block hover:underline">more</span></a></div>
          </div>
          ))}
      </div>

    </>
  )
}

const Transferdata = () => {

  return (
    <>
    <div className="px-4 text-xs hidden lg:flex lg:grid lg:grid-cols-2">
     <span className="text-gray-400 place-self-center">* <Bitcoin /> = Accept Bitcoin , <Whoisprivay /> = Free Whois Privacy , <Coupons /> = Click to Copy <span className="font-semibold">Coupon Code</span></span>
     <form method="POST" action="">
        <div className="rounded-md border border-gray-300 mx-4  text-center place-self-center hidden md:flex">
          <div className="relative border-r border-gray-300 flex flex-grow items-stretch focus-within:z-10">
            <input
              type=""
              name="domainkeyword"
              id="domainkeyword"
              className="block w-full rounded-none placeholder-gray-300 border-none focus:outline-none focus:border-transparent focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-200 px-4 lg:px-20 sm:text-sm"
              placeholder="Please enter a extension"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <SearchIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
          </button>
        </div>
      </form>
     </div>        
     <div className="sm:px-4 pb-8 pt-2">
     <div className="sticky py-1 rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2  w-7-50 w-2-10">
            <span  className="group inline-flex">
              TLD
            </span>
          </div>
          <div className="py-2 w-12-50 w-6-10">
            <span  className="align-center py-1 px-2">
            <MenuIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-12-50 hidden md:block">
            <span  className="align-center py-1 px-2">
            <MenuAlt4Icon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-12-50 hidden md:block">
            <span  className="align-center py-1 px-2">
            <MinusIcon className="h-5 w-5 text-gray-300 hover:text-gray-500" aria-hidden="true" />
            </span>
          </div>
          <div className="py-2 w-7-50 w-2-10">
            <span  className="group inline-flex">
            </span>
          </div>
        </div>

       {pricesdatas.map((price) => (
         <div key={price.id} className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
           <div className="whitespace-nowrap py-4 border-r truncate text-mysm font-semibold text-blue-500 w-7-50 w-2-10">
             <span className="nav-blue-color hover:bg-blue-500 text-white py-1 md:px-3 rounded-md md:font-bold text-xs md:text-sm"><a href={"/domainsprice/"+price.tld} target="_blank">.{price.tld}</a></span>
           </div>
           <div className='whitespace-nowrap py-4 border-r truncate w-12-50 w-6-10'>
           <div className="flex grid grid-cols-2">
               <div className=""><span className="text-orange-600 bg-maincolor py-1 px-3 rounded-md font-semibold"><span className="">${price.regs}</span></span></div>
               <div className="place-self-center">
                  <span className="text-white bg-filter py-1 px-3 rounded-md font-medium">
                    <a className="hover:underline xl:space-x-1" href="" target="_blank" rel="nofollow">
                      <span className="mr-1" title={price.registrar}>{price.registrar}</span>
                      {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><Bitcoin /></span> : null} 
                      {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><Whoisprivay /></span>:null }
                    </a>
                  </span>
               </div>
             </div>
           </div>
           <div className='whitespace-nowrap py-4 border-r truncate w-12-50 hidden md:block'>
             <div className="flex grid grid-cols-2">
               <div className=""><span className="py-1 rounded-md sm:font-semibold text-green-700"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
               <div className="place-self-center">
                 <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                   <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                   {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><Bitcoin /></span> : null} 
                   {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><Whoisprivay /></span>:null }
                 </span>
               </div>
             </div>
           </div>
           <div className='whitespace-nowrap py-4 border-r truncate w-12-50 hidden md:block'>
             <div className="flex grid grid-cols-2">
               <div className=""><span className="py-1 rounded-md sm:font-semibold"><span className="border-b border-dashed border-green-900">${price.regs}</span></span></div>
               <div className="place-self-center">
                 <span className="text-myblue-500 underline py-1 font-semibold space-x-2 text-mysm">
                   <span title={price.registrar}><a href="" target="_blank" rel="nofollow">{price.registrar}<ExternalLinkIcon className="h-4 w-4 -mt-4 text-gray-300 hover:text-blue-500" aria-hidden="true" /></a></span>
                   {price.bitcoin ? <span className="hidden xl:inline-block" title="Accept Bitcoin Payment"><Bitcoin /></span> : null} 
                   {price.whois >0 ? <span className="hidden xl:inline-block" title="Free Whois Privacy"><Whoisprivay /></span>:null }
                 </span>
               </div>
             </div>
           </div>
           <div className='whitespace-nowrap py-4 truncate text-mysm font-semibold w-7-50 w-2-10'><a className="text-blue-500 hover:text-blue-600" href={"/domainsprice/"+price.tld} target="_blank"><PlusSmIcon className="h-5 w-5" aria-hidden="true" /><span className="hidden sm:inline-block hover:underline">more</span></a></div>
         </div>
         ))}
     </div>

   </>
  )
}

const Catchdata = () => {

  return (

    <>
     <div className="px-4 text-xs">
      <span className="text-gray-300">* Inclue GoDaddy , Dropcatch and Namejet datas.</span>
      <span className="underline text-blue-green text-sm font-semibold pl-4 sm:pl-0 sm:float-right pr-4 hover:text-green-700 hover:font-bold"><a href="/expireddomains" target="_blank">See More</a></span>
      </div>        
      <div className="sm:px-4 pb-8 pt-4">
        <div className="sticky rounded-t-md top-0 z-10 min-w-full  text-center flex bg-gray-500 text-sm font-semibold text-gray-300">
          <div className="py-2 w-15-50 w-2-10"><span  className="group inline-flex">Platform</span></div>
          <div className="py-2 w-35-50 w-8-10"><span  className="group inline-flex">Pricing </span>
          </div>
        </div>
        <div  className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
          <div className="whitespace-nowrap place-self-center  truncate text-mysm font-semibold text-blue-500 w-15-50 w-2-10">
            <div className="py-2">
              <a className="hover:underline" href="https://dropcatch.com" target="_blank" rel="nofollow">DropCatch.com</a>
            </div>
          </div>
          <div className='whitespace-nowrap border-l truncate text-mysm font-semibold text-blue-500 w-35-50 w-8-10'>
            <div className="flex grid grid-cols-3 text-center border-b">
              <span className="py-2">Discount Club  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">com, net</span>
              <span className="py-2 text-orange-700 font-medium">$11-$58</span>
            </div>
            <div className="flex grid grid-cols-3 text-center">
              <span className="py-2">Backorder  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">com, net, org</span>
              <span className="py-2 text-orange-700 font-medium">$59</span>
            </div>
          </div>
        </div>

        <div  className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
          <div className="whitespace-nowrap place-self-center  truncate text-mysm font-semibold text-blue-500 w-15-50 w-2-10">
            <div className="py-2">
              <a className="hover:underline" href="https://namejet.com" target="_blank" rel="nofollow">NameJet.com</a>
            </div>
          </div>
          <div className='whitespace-nowrap border-l truncate text-mysm font-semibold text-blue-500 w-35-50 w-8-10'>
            <div className="flex grid grid-cols-3 text-center">
              <span className="py-2 text-semibold text-green-700 border-r  col-span-2">com, net, org</span>
              <span className="py-2 text-orange-700 font-medium">$79</span>
            </div>
          </div>
        </div>

        <div  className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
          <div className="whitespace-nowrap place-self-center  truncate text-mysm font-semibold text-blue-500 w-15-50 w-2-10">
            <div className="py-2">
              <a className="hover:underline" href="https://snapnames.com" target="_blank" rel="nofollow">SnapNames.com</a>
            </div>
          </div>
          <div className='whitespace-nowrap border-l truncate text-mysm font-semibold text-blue-500 w-35-50 w-8-10'>
            <div className="flex grid grid-cols-3 text-center">
              <span className="py-2 text-semibold text-green-700 border-r  col-span-2">com, net, org</span>
              <span className="py-2 text-orange-700 font-medium">$79</span>
            </div>
          </div>
        </div>

        <div  className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
          <div className="whitespace-nowrap place-self-center  truncate text-mysm font-semibold text-blue-500 w-15-50 w-2-10">
            <div className="py-2">
              <a className="hover:underline" href="https://www.sav.com/domains" target="_blank" rel="nofollow">SAV.com</a>
            </div>
          </div>
          <div className='whitespace-nowrap border-l truncate text-mysm font-semibold text-blue-500 w-35-50 w-8-10'>
            <div className="flex grid grid-cols-3 text-center border-b">
              <span className="py-2">Backorder  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">com</span>
              <span className="py-2 text-orange-700 font-medium">$8.95</span>
            </div>
            <div className="flex grid grid-cols-3 text-center border-b">
              <span className="py-2">Backorder  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">net</span>
              <span className="py-2 text-orange-700 font-medium">$9.88</span>
            </div>
            <div className="flex grid grid-cols-3 text-center border-b">
              <span className="py-2">Backorder  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">org</span>
              <span className="py-2 text-orange-700 font-medium">$7.49</span>
            </div>
            <div className="flex grid grid-cols-3 text-center border-b">
              <span className="py-2">Backorder  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">co</span>
              <span className="py-2 text-orange-700 font-medium">$4.99</span>
            </div>
            <div className="flex grid grid-cols-3 text-center border-b">
              <span className="py-2">Backorder  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">io</span>
              <span className="py-2 text-orange-700 font-medium">$29.95</span>
            </div>
            <div className="flex grid grid-cols-3 text-center">
              <span className="py-2">Backorder  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">others</span>
              <span className="py-2 text-orange-700 font-medium"><a className="hover:underline" href="https://www.sav.com/domains" target="_blank" rel="nofollow">view more</a></span>
            </div>
          </div>
        </div>

        <div  className="min-w-full  text-center truncate flex even:bg-green-50 !bg-opacity-40 hover:bg-gray-200 border text-xs font-normal text-gray-500">
          <div className="whitespace-nowrap place-self-center  truncate text-mysm font-semibold text-blue-500 w-15-50 w-2-10">
            <div className="py-2">
              <a className="hover:underline" href="https://hexonet.net" target="_blank" rel="nofollow">Hexonet.net</a>
            </div>
          </div>
          <div className='whitespace-nowrap border-l truncate text-mysm font-semibold text-blue-500 w-35-50 w-8-10'>
          <div className="flex grid grid-cols-3 text-center border-b">
              <span className="py-2">Backorder  </span>
              <span className="py-2 text-semibold text-green-700 border-r  border-l">com, org, net</span>
              <span className="py-2 text-orange-700 font-medium">$18.91</span>
            </div>
            <div className="flex grid grid-cols-3 text-center">
              <span className="py-2 text-semibold text-green-700 border-r  col-span-2">
                <span className="block">.ac .ag .bz .cc.ch.co .fm .io .it .lc .li .me</span>
                <span className="block"> .mn .nl .nu .pw .sc .se .sh .tv .uk .us .vc </span>
              </span>
              <span className="py-2 text-orange-700 font-medium place-self-center"><a className="hover:underline" href="https://hexonet.net/backorder" target="_blank" rel="nofollow">view more</a></span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

const Newhidden = () =>{
  return (
    <>
      New
    </>
  )
}
const Renewhidden = () =>{
  return (
    <>
      Renew
    </>
  )
}
const Transferhidden = () =>{
  return (
    <>
      Transfer
    </>
  )
}

const Catchhidden = () =>{
  return (
    <>
      Catch
    </>
  )
}

const Typeselect =[
  {
    id: 1,
    label: <Newhidden />,
    content: <Newdata />,
  },
  {
    id: 2,
    label: <Renewhidden />,
    content: <Renewdata />,
  },
  {
    id: 3,
    label: <Transferhidden />,
    content: <Transferdata />,
  },
  {
    id: 4,
    label: <Catchhidden />,
    content: <Catchdata />,
  },
]

const AuctionIcons = () => {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M19.5 7a8.998 8.998 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
   <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
   <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4.004"></path>
   <path d="M19.5 17a8.998 8.998 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
   <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
   <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4.004"></path>
   <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
   <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
   <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
</svg>
    </>
  )
}

const CatchIcons = () => {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hand-grab" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5"></path>
   <path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5"></path>
   <path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5"></path>
   <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
</svg>
    </>
    )
  }
export function PricesComData() {

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
                      <p className="font-bold text-md md:text-xl">Best Domain Registrars, NameServer, SSL, MX provider 2022</p>
                      <p className="hidden lg:block">Find the best domains service provider for you.</p>
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
                        className='rounded-xl bg-white py-1 px-2'>
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
