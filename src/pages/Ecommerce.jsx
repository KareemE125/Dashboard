import React from 'react'
import { useAppContext } from '../context/AppContext'

import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { StackedChart, PieChart, Button, SparkLineChart } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'


export default function Ecommerce() 
{

  //let {} = useAppContext();

  return <main className='w-full'>
    <div className='flex flex-wrap lg:flex-nowrap justify-center w-full'>
      <div className='w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>

      </div>
    </div>
  </main>
}
