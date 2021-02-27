import React from 'react'
import { PriceHistoryProps, SinglePrice } from '../interfaces/interfaces';
import ReactApexChart from 'react-apexcharts';


const getColor = (data: SinglePrice[]) => {
  console.log(data[data.length-1])
  return data[data.length-1].changeOverTime < 0 ? '#EF4444' :'#10B981'
}

const getPrice = (data: SinglePrice[]) => {
  return [{name: "Price", data: data.map( ({open,close,high,low,date}) => {
    return {
        x: date,
        y: ((open + high + low + close)/4).toFixed(4)
    }
}  )}] 
}





const PriceChart: React.FC<PriceHistoryProps> = ({chartData}) => {
    const sortedchartData = chartData.historical.sort( (a,b) => a.date.localeCompare(b.date) )
    const options = {
      chart: {
        type: 'area',
      },
      title: {
        text: `${chartData.symbol} Daily`,
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'medium',
          fontFamily:  'Roboto, sans-serif',
          color:  '#263238'
        },
    },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: false,
          offsetX: 0,
        },
        labels: {
          style: {
              colors: [],
              fontSize: '12px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label',
          },
          formatter: (value: number) => { return value.toLocaleString() },
      },
      },
      dataLabels: {
          enabled: false
        },
      stroke: {
          show: true,
          curve: 'smooth',
          colors: undefined,
          width: 1,
          dashArray: 0,      
      },
      tooltip: {
          x: {
              show: true,
              format: 'dd MMM yyyy',
              formatter: undefined,
          },
      },
      colors:  [getColor(sortedchartData)]
      
    }

    return (
      <div className='w-full overflow-hidden rounded-md shadow-lg bg-white p-4 ml-5' >
        <ReactApexChart options={options} series={getPrice(sortedchartData)} type="area" height='95%' width='100%' />
      </div>
    );
}


export default PriceChart