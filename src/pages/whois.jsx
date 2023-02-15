import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavTitle } from '@/components/NavTitle'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { WhoisCheck } from '@/components/WhoisCheck'
import { WhoisCheckResult } from '@/components/WhoisCheckResult'
import { BulkWhoisCheck } from '@/components/BulkWhoisCheck'
import { BulkWhoisCheckResult } from '@/components/BulkWhoisCheckResult'
import { useState } from 'react'

export default function Whois() {
  const [single, setSingle] = useState(true)
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <BannerTop />
      <Header />
      <NavTitle><span className="hidden sm:inline">The Best </span>WHOIS Domain Lookup<span className="hidden sm:inline"> Tool</span></NavTitle>
      <main className="bg-mymain">
        {single
          ? [<WhoisCheck setSingle={setSingle} />, <WhoisCheckResult />]
          : [<BulkWhoisCheck setSingle={setSingle} />, <BulkWhoisCheckResult />]
        }
        <WhoisCheckResult />
      </main>
      <Footer />
    </>
  )
}
