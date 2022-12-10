import React from 'react'

import { SeriesCollectionDirective, ChartComponent, SeriesDirective, DateTime, Legend, Tooltip, Inject, LineSeries } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { useAppContext } from '../../context/AppContext'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'



export default function Line() {

  const { currentMode, activeSideBar } = useAppContext();

  return <main>
    <Header title='Inflation Rate' category='Line Chart' />

    <section key={activeSideBar ? 'openSideWithChart' : 'closedSideWithChart'} className='p-4 pt-10 rounded-3xl bg-white dark:bg-secondary-dark-bg drop-shadow shadow-xl'>
      <ChartComponent
        id='lineChart'
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ textStyle: { color: currentMode === 'Dark' ? 'white' : 'black', } }}
      >
        <SeriesCollectionDirective>
          {
            lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
          }
        </SeriesCollectionDirective>
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      </ChartComponent>
    </section>
  </main>
}
