import Head from "next/head"
import  RangeSlider  from "@/components/RangeSlider"

export default function Test() {
  return (
    <>
    <div className="">
      <Head>
        <title>Range Slider App</title>
        <meta name="description" content="Generated QuickNuggets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-red-800">
        <RangeSlider
          initialMin={0}
          initialMax={100}
          min={0}
          max={10000}
          step={100}
          priceCap={100}
        >titles</RangeSlider>
      </main>
    </div>
    </>
  )
}