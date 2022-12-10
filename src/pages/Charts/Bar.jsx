import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Legend, Tooltip, Category, DataLabel, Inject } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { useAppContext } from '../../context/AppContext'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'


export default function Bar() {

  const { currentMode, activeSideBar } = useAppContext();

  return <main>
    <Header title="Olympic Medal Counts - RIO" category="Bar Chart"   />
    
    <section key={activeSideBar ? 'openSideWithChart' : 'closedSideWithChart'} className='p-4 pt-10 rounded-3xl bg-white dark:bg-secondary-dark-bg drop-shadow shadow-xl'>
      <ChartComponent
        id='barChart'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ textStyle: { color: currentMode === 'Dark' ? 'white' : 'black', } }}
      >
        <SeriesCollectionDirective>
          {
            barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
          }
        </SeriesCollectionDirective>
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
      </ChartComponent>
    </section>
  </main>
}
