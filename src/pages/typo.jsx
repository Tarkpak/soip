import Head from 'next/head'
import { BannerTop } from '@/components/BannerTop'
import { NavTitle } from '@/components/NavTitle'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TypoCheck } from '@/components/TypoCheck'
import { TypoCheckResult } from '@/components/TypoCheckResult'

export default function Typo() {
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
      <NavTitle><span className="hidden sm:inline">The Best </span>Typo Domain Name Generator<span className="hidden sm:inline"> Tool</span></NavTitle> 
      <main className="bg-mymain">

        <TypoCheck />
        <TypoCheckResult />
      </main>
      <Footer />
    </>
  )
}
