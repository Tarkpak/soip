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
import { useState } from 'react'


function socialWindow(url) {
  var left = (screen.width - 570) / 2
  var top = (screen.height - 570) / 2
  var params =
    'menubar=no,toolbar=no,status=no,width=570,height=570,top=' +
    top +
    ',left=' +
    left
  window.open(url, 'NewWindow', params)
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

export function ReferralCodes() {
  const [sharecodes, setSharecodes] = useState({
    id: '1',
    link: 'Startup',
    fb: 'fbshare.com',
    tw: 'twfbshare.com',
  })
  const handleCopy = (e) => {
    e.preventDefault()
    copyToClipboard(sharecodes.link)
      .then((res) => {
        alert('copy successful')
      })
      .catch((err) => {
        console.log(err)
        alert('copy fail')
      })
  }
  const handleChange = (e) => {
    setSharecodes({
      ...sharecodes,
      link: e.target.value,
    })
  }

  return (
    <>
      <div className="text-center text-3xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
        Invite Your Friends by Email
      </div>
      <div className=" flex rounded-md px-4 py-5 text-center sm:p-6 ">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="John Smith"
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-filter px-4 py-2 text-sm font-medium text-white"
        >
          <span>Send Email</span>
        </button>
      </div>

      <div className="mt-10 text-center text-xl font-extrabold text-gray-500 sm:text-2xl sm:tracking-tight lg:text-3xl">
        Share Your Invite Link
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid  ">
          <div className="mt-5 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 items-center gap-6">
                    <div className=" mt-1 flex rounded-md shadow-sm col-span-6 sm:col-span-6 lg:col-span-2">
                      <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <input
                          type="text"
                          name="sharecode"
                          value={sharecodes.link}
                          onChange={(e) => handleChange(e)}
                          readonly="readonly"
                          className="block w-full rounded-none rounded-l-md border-gray-300 text-center bg-gray-100 text-xs text-gray-500 py-3"
                          placeholder="input..."
                        />
                      </div>
                      <button
                        type="button"
                        className="relative border-solid -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-filter px-4 py-2 text-sm font-medium text-white"
                      >
                        <span
                          className="text-white"
                          onClick={(e) => {
                            handleCopy(e)
                          }}
                        >
                          Copy
                        </span>
                      </button>
                    </div>

                    <div className="text-center col-span-6 sm:col-span-3 lg:col-span-2">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-full border border-transparent bg-[#1da1f2] px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          socialWindow(`https://twitter.com/intent/tweet?url=${location.href}&text=${sharecodes.link}`)
                        }}
                      >
                        <svg
                          viewBox="0 0 48 48"
                          className="mr-1 h-6 w-6 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"
                            fill="#fff"
                            stroke="#fff"
                            stroke-width="4"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Share on Twitter
                      </button>
                    </div>

                    <div className="text-center col-span-6 sm:col-span-3 lg:col-span-2">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-full border border-transparent bg-[#1877f2] px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          socialWindow(`https://www.facebook.com/sharer.php?u=${location.href}`)
                        }}
                      >
                        <svg
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-6 w-6 fill-white"
                        >
                          <path
                            d="M36 12.5997H31.2489H29.9871C28.9009 12.5997 28.0203 13.4803 28.0203 14.5666V21.4674H36L34.8313 29.0643H28.0203V43H19.2451V29.0643H12V21.4674H19.1515L19.2451 14.2563L19.2318 12.9471C19.1879 8.60218 22.6745 5.04434 27.0194 5.0004C27.0459 5.00013 27.0724 5 27.0989 5H36V12.5997Z"
                            fill="#ebebeb"
                            stroke="#ebebeb"
                            stroke-width="4"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Share on Facebook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
