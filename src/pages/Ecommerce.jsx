import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

import { GoPrimitiveDot } from 'react-icons/go'
import { StackedChart, Button, SparkLineChart } from '../components'
import { earningData } from '../data/dummy'

export default function Ecommerce() {

  let { activeSideBar, currentColor } = useAppContext();
  const [widthRefresh, setWidthRefresh] = useState(true)

  useEffect(() => {
    setWidthRefresh(prev => !prev);
  }, [activeSideBar])



  return <main className='flex flex-col flex-wrap justify-center w-full'>

    {/* Section: Wide Background with the earnings */}
    <section className='w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl p-8 pt-9 drop-shadow shadow-sm bg-hero-pattern bg-no-repeat bg-cover bg-center'>

      <div className='flex justify-between items-center'>
        <div className='text-xl bg-gray-200 bg-opacity-50 p-2 rounded-xl'>
          <p className='text-slate-900 font-bold'>Earnings</p>
          <p className='text-slate-800'>$71,308.44</p>
        </div>
      </div>

      <div className='my-4'>
        <Button color="white" bgColor={currentColor} text="Download" size='md' borderRadius="10px" />
      </div>

    </section>

    {/* Section: Earnings Status boxes (Grid) */}
    <section className='grid grid-cols-12 gap-3 my-5'>
      {
        earningData.map(item => <div key={item.title} className=' col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 bg-white drop-shadow shadow-sm dark:text-gray-200 dark:bg-secondary-dark-bg p-5 rounded-xl'>

          <button type='button' style={{ color: item.iconColor, background: item.iconBg }} className='text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl'>
            {item.icon}
          </button>

          <p className='mt-3 flex justify-between'>
            <span className='text-lg font-semibold'>
              {item.amount}
            </span>
            <span className={`text-sm font-bold text-${item.pcColor} ml-2`}>
              {item.percentage}
            </span>
          </p>

          <p className='text-sm text-gray-400 mt-1'>
            {item.title}
          </p>

        </div>)
      }
    </section>

    {/* Section: Revenue Updates with Charts */}
    <section className='grid grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg py-6 px-8 rounded-xl drop-shadow shadow-sm after:border-x-2'>

      {/* Budget & Expense Line Chart */}
      <div className='col-span-12 lg:col-span-6 '>

        {/* Budget + Expense */}
        <p className='font-semibold text-xl drop-shadow-lg'>Revenue Updates</p>

        <div className='px-8 pl-8 flex flex-col'>

          <div className='mb-5'>
            <p>
              <span className='text-2xl font-bold'>$91.998</span>
              <span className='px-2 py-1 rounded-full text-white text-xs m-2 bg-green-400 '>24%</span>
            </p>
            <p className='text-gray-500 pt-2'>Budget</p>
          </div>

          <div className='mb-5'>
            <p className='text-2xl font-bold'>$50.556</p>
            <p className='text-gray-500 pt-2'>Expense</p>
          </div>

        </div>

        {/* Chart */}
        <div key={widthRefresh ? 'openSideWithChart' : 'closedSideWithChart'} className='px-8 my-6'>
          <div className='border-l-2 border-b-2 border-black dark:border-gray-400'>
            <SparkLineChart id='sparkLineChart'  height='100px' currentColor={currentColor} color={currentColor} />
          </div>
        </div>
        <div className='px-8 my-8' >
          <Button color='white' bgColor={currentColor} text='Download Report' borderRadius='10px' />
        </div>

      </div>

      {/* Budget & Expense Bar Chart */}
      <div className='col-span-12 lg:col-span-6 pt-8 lg:pt-0'>

        {/* Budget + Expense */}
        <div className='flex items-center lg:justify-end gap-6'>
          <p className='flex items-center  text-gray-600 drop-shadow-lg'>
            <GoPrimitiveDot className='text-xl' />
            Expense
          </p>
          <p className='flex items-center  text-green-600 drop-shadow-lg'>
            <GoPrimitiveDot className='text-xl' />
            Budget
          </p>
        </div>


        {/* Chart */}
        <div key={widthRefresh ? 'openSideWithChart' : 'closedSideWithChart'} className='lg:pl-8 mt-6'>
          <StackedChart id='stackChart' height='400px' />
        </div>

      </div>

    </section>

  </main>
}
