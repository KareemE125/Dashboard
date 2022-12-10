import React from 'react'

import { ChartComponent, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

import { Header } from '../../components'
import { useAppContext } from '../../context/AppContext'



export default function Stacked() {

  const { currentMode, activeSideBar } = useAppContext();

  return <main>
    <Header title="Olympic Medal Counts - RIO" category="Bar Chart" />

    <section key={activeSideBar ? 'openSideWithChart' : 'closedSideWithChart'} className='p-4 pt-10 rounded-3xl bg-white dark:bg-secondary-dark-bg drop-shadow shadow-xl'>
      <ChartComponent
        id='stackedChart'
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        series={stackedCustomSeries}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ textStyle: { color: currentMode === 'Dark' ? 'white' : 'black', } }}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      </ChartComponent>

    </section>
  </main>
}