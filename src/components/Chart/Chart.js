import React from 'react'

import './Chart.css'
import ChartBar from './ChartBar/ChartBar'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //using th MAP function to turn an array of objects --> array of values (string)
  const totalMaximum = Math.max(...dataPointValues); 
  //max = find max value in a set of arguements. 
  // we add the '...' to Pull out all values in array and add them as 12 standalone arguemtns to the 'Max' function.

  return (
    <div className='chart' >
      {props.dataPoints.map(dataPoint => 
        <ChartBar 
          key={dataPoint.label} 
          value={dataPoint.value} 
          maxValue={totalMaximum} 
          label={dataPoint.label} 
          />
        )}
    </div>
  )
};

export default Chart;