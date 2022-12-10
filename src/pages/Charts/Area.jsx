import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, DateTime, Legend, Inject, SplineAreaSeries } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { useAppContext } from '../../context/AppContext'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'


export default function Area() {

  const { currentMode, activeSideBar } = useAppContext();

  return <main>
    <Header title='Inflation Rate in Percentage' category='Area Chart' />
    
    <section key={activeSideBar ? 'openSideWithChart' : 'closedSideWithChart'} className='p-4 pt-10 rounded-3xl bg-white dark:bg-secondary-dark-bg drop-shadow shadow-xl'>
      <ChartComponent
        id='areaChart'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ textStyle: { color: currentMode === 'Dark' ? 'white' : 'black', } }}
      >
        <SeriesCollectionDirective>
          {
            areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
          }
        </SeriesCollectionDirective>
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      </ChartComponent>
    </section>
  </main>
}
