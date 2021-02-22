import React from 'react'
import ReactApexChart from 'react-apexcharts';
import priceHistory from '../data/history'
import { SinglePrice } from '../interfaces';

interface PriceChartProps {

}

const getColor = (data: SinglePrice[]) => {
  return data[data.length-1].changeOverTime > 0 ? '#10B981' : '#EF4444'
}

const PriceChart: React.FC<PriceChartProps> = () => {
  const data = priceHistory.historical.reverse()
  const options = {
    chart: {
      type: 'area',
    },
    title: {
      text: `${priceHistory.symbol} Daily`,
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
    colors:  [getColor(data)]
    
  }

const getPrice = (data: SinglePrice[]) => {
    return [{name: "Price", data: data.map( ({open,close,high,low,date}) => {
        return {
            x: date,
            y: ((open + high + low + close)/4).toFixed(4)
        }
    }  )}] 
}
    return (
      <div className='w-full overflow-hidden rounded-md shadow-lg bg-white p-4 ml-5' >
        <ReactApexChart options={options} series={getPrice(data)} type="area" height='95%' width='100%' />
      </div>
    );
}


export default PriceChart