import React from 'react'

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'



export default class SparkLineChart extends React.PureComponent
{
  render() 
  {
    const { id, type, height, data, currentColor, color } = this.props;
    
    return <SparklineComponent
      id={id}
      height={height}
      width='100%'
      lineWidth='1'
      valueType='Numeric'
      type={type}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
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
