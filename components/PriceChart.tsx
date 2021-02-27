import React from 'react'
import { SinglePrice } from '../interfaces/interfaces';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const getColor = (data: SinglePrice[]) => {
  console.log(data[0].changeOverTime)
  return data[0].changeOverTime < 0 ? '#EF4444' :'#10B981'
}

const getPrice = (data: SinglePrice[]) => {
  return data.map( ({open,close,high,low,date}) => {
      return {
          date: date,
          price: ((open + high + low + close)/4).toFixed(4)
      }
  }  )
}

const CustomTooltip = ({ active, payload }: {active?: boolean, payload: any}) => {
if (active && payload) {
    const date = payload[0].payload.date.split(" ")[0].split("-")
        return (
            <div className="rounded-md shadow-lg bg-white p-4">
            <p className="text-sm"> Price: <span className="price" >{payload[0].payload.price}</span> </p>
            <p className="text-sm">{`${date[2]}/${date[1]}/${date[0]}`}</p>
            </div>
        );
}

return null;
};






const PriceChart: React.FC<{chartData: SinglePrice[]}> = ({chartData}) => {
    const sortedchartData = chartData.sort( (a,b) => a.date.localeCompare(b.date) )

    return (
      <div className='w-full overflow-hidden rounded-md shadow-lg bg-white p-4 ml-5' >
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={getPrice(sortedchartData)}
          margin={{
            top: 0,
            right: 5,
            left: 5,
            bottom: 0,
          }}
        >
          <Tooltip 
            content={({ active, payload }) => <CustomTooltip  active={active} payload={payload} />}
          />
          <CartesianGrid
                        strokeDasharray="0 "
                        vertical={false}
                        strokeOpacity={0.5}
          />
          <XAxis 
              dataKey="date"
              hide={true}
          />
          <YAxis
              hide={false}
              domain={['dataMin - 10', 'dataMax + 10']}
              tickFormatter={ tick => tick.toFixed() }
              strokeOpacity={0}
              fillOpacity={1}
              // fill="rgb(0, 0, 0)"
              interval={0}
              width={30}
              style={{
                fill: '#000',
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "9px",
              }}
          />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke={getColor(sortedchartData)} fill={getColor(sortedchartData)} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
}


export default PriceChart