import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

export default function StackedChart({ id, height }) {
  return <ChartComponent
    id={id}
    height={height}

    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    series={stackedCustomSeries}

    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
    legendSettings={{ background: 'white' }}
  >
    <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
  </ChartComponent>
}

