import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DaChecks } from '@/components/DaChecks'
import { DaChecksResult } from '@/components/DaChecksResult'

export default function DaCheck() {
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
      <NavSearch />
      <main className="bg-mymain">

        <DaChecks />
        <DaChecksResult />
      </main>
      <Footer />
    </>
  )
}
