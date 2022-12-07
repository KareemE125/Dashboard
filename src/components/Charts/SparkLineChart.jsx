import React from 'react'

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'
import { SparklineAreaData } from '../../data/dummy';



export default class SparkLineChart extends React.PureComponent
{

  render() 
  {
    const { id, height, currentColor, color } = this.props;
    
    return <SparklineComponent
      id={id}
      height={height}
      lineWidth='1'
      valueType='Numeric'
      type='Line'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={SparklineAreaData}
      xName='x-axis'
      yName='y-axis'
      tooltipSettings={{
        visible: true,
        format: 'X : ${x-axis}  ,  Y : ${y-axis}',
        trackLineSettings: { visible: true, width: 2 },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  }

}
