import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MyApi } from '@/components/MyApi'

export default function Api() {
  return (
    <>
      <Head>
        <title>Namecost</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">

        <MyApi />
      </main>
      <Footer />
    </>
  )
}
