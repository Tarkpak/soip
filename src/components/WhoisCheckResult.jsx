/* This example requires Tailwind CSS v2.0+ */
import { NoResults } from '@/components/NoResults'
import Link from 'next/link'
import { useState } from 'react'

const whoisdata =[{id:1,rawdatas : `'
  Domain Name: fastabc.com
  Registry Domain ID: 2384591078_DOMAIN_COM-VRSN
  Registrar WHOIS Server: grs-whois.hichina.com
  Registrar URL: http://wanwang.aliyun.com
  Updated Date: 2022-06-01T02:45:30Z
  Creation Date: 2019-04-26T18:03:39Z
  Registrar Registration Expiration Date: 2032-04-26T18:03:39Z
  Registrar: Alibaba Cloud Computing Ltd. d/b/a HiChina (www.net.cn)
  Registrar IANA ID: 1599
  Reseller:
  Domain Status: ok https://icann.org/epp#ok
  Registrant City: 
  Registrant State/Province: 
  Registrant Country: 
  Registrant Email:https://whois.aliyun.com/whois/whoisForm
  Registry Registrant ID: Not Available From Registry
  Name Server: F1G1NS1.DNSPOD.NET
  Name Server: F1G1NS2.DNSPOD.NET
  DNSSEC: unsigned
  Registrar Abuse Contact Email: DomainAbuse@service.aliyun.com
  Registrar Abuse Contact Phone: +86.95187
  URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/
  >>>Last update of WHOIS database: 2022-08-28T05:15:14Z <<<
  
  For more information on Whois status codes, please visit https://icann.org/epp
  
  Important Reminder: Per ICANN 2013RAAs request, Hichina has modified domain names whois format of dot com/net/cc/tv, you could refer to section 1.4 posted by ICANN on http://www.icann.org/en/resources/registrars/raa/approved-with-specs-27jun13-en.htm#whois The data in this whois database is provided to you for information purposes only, that is, to assist you in obtaining information about or related to a domain name registration record. We make this information available "as is," and do not guarantee its accuracy. By submitting a whois query, you agree that you will use this data only for lawful purposes and that, under no circumstances will you use this data to: (1)enable high volume, automated, electronic processes that stress or load this whois database system providing you this information; or (2) allow, enable, or otherwise support the transmission of mass unsolicited, commercial advertising or solicitations via direct mail, electronic mail, or by telephone.  The compilation, repackaging, dissemination or other use of this data is expressly prohibited without prior written consent from us. We reserve the right to modify these terms at any time. By submitting this query, you agree to abide by these terms.For complete domain details go to:http://whois.aliyun.com/whois/domain/hichina.com
  '`,
   domain:'fastabc.com', okreg:'registered' ,registrar:'Alibaba Cloud Computing Ltd. d/b/a HiChina (www.net.cn)',registrant:'',regemail:'https://whois.aliyun.com/whois/whoisform' , time_update:'2012-04-26', time_reg:'2019-04-26', time_end: '2032-04-26',status:' ok',nameserver:' f1g1ns1.dnspod.net;f1g1ns2.dnspod.net' ,delorredemp:'0' ,parkorbuy:'0'},
]



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



const IsResults = () => {
  return (
    <>
    <div className="min-h-full px-4 sm:px-6  md:grid md:place-items-center lg:px-8 relative">
    <div className="max-w-max mx-auto min-w-full">
    <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-4">
          <div className="mb-8">
            <div className="">

              <div className="text-gray-500">
              {whoisdata.map((whois) => (

                              
                              

                <div key={whois.id} className="sm:flex sm:grid lg:grid-cols-2">
                <div className="bg-white border-b-4 border-l-4 border-r-4 border-dashed border-green-50">
                  <div className="py-3 bg-green-50 text-center text-green-700 font-bold border-4 border-dashed border-green-100"><span><a href={"/domains/"+whois.domain} className="hover:underline" title={whois.domain} target="_blank">See more details</a></span></div>
                  <div className="p-8 rounded-b-md space-y-4 divide-y divide-gray-200 block break-all overflow-clip overflow-hidden">
                  <div className="text-center"><span className="text-lg">Whois data for</span><span className="ml-4 text-lg font-bold">{whois.domain}</span></div>
                    <div className="py-3 space-y-2">
                      <div className="font-bold">Registrar Info</div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Name:</span><span className="text-sm col-span-3">{whois.registrar}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Status:</span><span className="text-sm col-span-3">{whois.status}</span></div>
                    </div>
                    <div className="py-3 space-y-2">
                      <div className="font-bold">Registrant Info</div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Name:</span><span className="text-sm col-span-3">{whois.registrant}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap">
                        <span className="col-span-1">Email:</span>
                        <span title="Click to copy it" className="text-sm col-span-3 block cursor-pointer hover:text-green-700 hover:font-bold"
                          onClick={(e) => {
                            {
                              e.preventDefault()
                              copyToClipboard(whois.regemail)
                                .then((res) => {
                                  alert('Email Copied Successful')
                                })
                                .catch((err) => {
                                  console.log(err)
                                  alert('Copy Failed')
                                })
                            }
                          }}
                        >
                          {whois.regemail}
                        </span>
                      </div>
                   </div>
                   <div className="py-3 space-y-2">
                      <div className="font-bold">Important Dates</div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Updated:</span><span className="text-sm col-span-3">{whois.time_update}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Created:</span><span className="text-sm col-span-3">{whois.time_reg}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Expires:</span><span className="text-sm col-span-3">{whois.time_end}</span></div>
                   </div>
                   <div className="py-3 space-y-2">
                      <div className="font-bold">Name Servers</div>
                      <div className="text-sm">{whois.nameserver}</div>
                    </div>
                    <div className="py-3 space-y-2">
                      <div className="font-bold">Site Stats</div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">pending Delete:</span><span className="text-sm col-span-3">{whois.delorredemp}</span></div>
                      <div className="grid sm:grid-cols-4 flex-wrap"><span className="col-span-1">Park Or Sell:</span><span className="text-sm col-span-3">{whois.parkorbuy}</span></div>
                    </div>


                    </div>
                </div>

                <div className="bg-gray-50 border-b-4 border-l-4 border-r-4 border-dashed border-orange-50">
                  <div className="py-3 bg-orange-50 text-center text-orange-700 font-bold border-4 border-dashed border-orange-100"><span><a href={"/website/"+whois.domain} className="hover:underline" title={whois.domain} target="_blank">Buy this domain</a></span></div>
                  <div className="hidden lg:block p-8 rounded-b-md">
                  <div className="text-center"><span className="text-lg">Raw Registrar Data</span></div>
                  <div className=" break-all overflow-clip overflow-hidden">{whois.rawdatas}</div>
                  </div>
                </div>
                </div>
                ))}
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

export function WhoisCheckResult() {
  return (
    <>

      {whoisdata.length ? (
        <IsResults />
      ) : (
        <NoResults> Typo Domain Generator Result </NoResults>
      )}

    </>
  )
}
