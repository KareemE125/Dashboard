import React from 'react'

import { ChartComponent, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useAppContext } from '../../context/AppContext'

export default function StackedChart({ id, height }) 
{
  const {currentMode} = useAppContext();
  return <ChartComponent
    id={id}
    height={height}

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
}

