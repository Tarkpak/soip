/* This example requires Tailwind CSS v2.0+ */
import { useRef } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import useChart from '@/hook/useChart'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TopRegistrars() {
  const chartRef = useRef(null)
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
    },
    series: [
      {
        name: '2022',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
    ],
  }
  useChart(chartRef, options)
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4  ">
        <div className="min-h-full md:grid md:place-items-center bg-white rounded-lg relative">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            World Population
          </h2>
          <div
            className="mb-20 mt-6  divide-y divide-gray-200"
            style={{ height: '400px' }}
            ref={chartRef}
          />
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>

        </div>
        </div>
      </div>
    </div>
  )
}
