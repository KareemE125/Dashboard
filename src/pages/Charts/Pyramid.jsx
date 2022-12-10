import React from 'react';

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components'
import { useAppContext } from '../../context/AppContext'
import { PyramidData } from '../../data/dummy';


export default function Pyramid()
{

  const { currentMode, activeSideBar } = useAppContext();

  return <main>
    <Header title='Inflation Rate in Percentage' category='Area Chart' />
    
    <section key={activeSideBar ? 'openSideWithChart' : 'closedSideWithChart'} className='p-4 pt-10 rounded-3xl bg-white dark:bg-secondary-dark-bg drop-shadow shadow-xl'>
      <AccumulationChartComponent
          id="pyramidChart"
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ textStyle: { color: currentMode === 'Dark' ? 'white' : 'black', } }}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    </section>
  </main>
}

