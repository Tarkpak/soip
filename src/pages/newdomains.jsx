import Head from 'next/head'


import { BannerTop } from '@/components/BannerTop'
import { NavSearch } from '@/components/NavSearch'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { NewDom } from '@/components/NewDom'

export default function NewDomains() {
  return (
    <>
      <Head>
        <title>NameCost - New Registered Domains</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <BannerTop />
      <Header />
      <NavSearch />
      <main className="bg-mymain">

        <NewDom />
      </main>
      <Footer />
    </>
  )
}
