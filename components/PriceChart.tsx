import React from 'react'
import { PriceHistoryProps, 
  SinglePrice
 } from '../interfaces/interfaces';
// import ReactApexChart from 'react-apexcharts';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const getColor = (data: SinglePrice[]) => {
  return data[data.length-1].changeOverTime < 0 ? '#EF4444' :'#10B981'
}

const getPrice = (data: SinglePrice[]) => {
  return data.map( ({open,close,high,low}) => {
    return +((open + high + low + close)/4).toFixed(4)
  })
}
const getDate = (data: SinglePrice[]) => {
  return data.map( ({date}) => date)
}





const PriceChart: React.FC<PriceHistoryProps> = ({chartData}) => {
    const sortedchartData = chartData.historical.sort( (a,b) => a.date.localeCompare(b.date) )
    const options = {
      title: {
        text: chartData.symbol + ' Daily Price Chart',
        align: 'left',
        style: { 
          "color": "#333333", 
          "fontSize": "16px",
          "fontWeight": "900",
          "fontFamily": "Roboto, sans-serif",
        }
      },
      plotOptions:{
        area:{
          lineWidth: 1,
          marker: {
            enabled: false
          },
          fillOpacity:0.5,
        },
        series: {
          fillColor: {
              linearGradient: [0, 0, 0, 350],
              stops: [
                  [0, getColor(sortedchartData)],
                  [1, getColor(sortedchartData)+'00']
              ]
          }
      }
      },
      tooltip: {
        pointFormat: '{series.name} <b>{point.y}</b>'
      },
      legend: {
        enabled: false
      },
      chart: {
        type: 'area'
      },
      xAxis: {
        categories: getDate(sortedchartData),
        visible:false
      },
      yAxis: {
        title: {
          enabled: false
        },
      },
      colors:  [getColor(sortedchartData)],
      series: [{
        name: chartData.symbol,
        data: getPrice(sortedchartData)
      }]
    }

    return (
      <div className='w-full overflow-hidden rounded-md shadow-lg bg-white p-4 mt-5 ml-0 md:ml-5 md:mt-0' >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
}


export default PriceChart