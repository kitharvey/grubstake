import React from 'react'
import {StockPricesProps} from '../interfaces/interfaces'
import FlexBetween from './FlexBetween';
interface PriceDetailCardProps {
    priceData: StockPricesProps[]
}

const PriceDetailCard: React.FC<PriceDetailCardProps> = ({priceData}) => {
    const newPrice = priceData.map( data => {
        return {
            name: data.name,
            price: data.price.toLocaleString(), 
            change: data.change.toLocaleString(),
            changesPercentage: data.changesPercentage.toLocaleString(),
            dayHigh: data.dayHigh?.toLocaleString(),
            dayLow: data.dayLow?.toLocaleString(),
            open: data.open?.toLocaleString(),
            previousClose: data.previousClose.toLocaleString(),
        }
    } )
    const {name, price, change, changesPercentage, dayHigh, dayLow, open, previousClose} = newPrice[0]

        return (
            <div className='grid grid-rows-8 overflow-hidden rounded-md shadow-lg bg-white p-2 w-full md:w-96' >
                <FlexBetween category='Name' details={<p>{name}</p>} />
                <FlexBetween category='Price' details={<p>{price}</p>} />
                <FlexBetween category='Change' details={<p className={+change > 0 ? 'text-green-500' : 'text-red-500'}>{change}</p>} />
                <FlexBetween category='Change Percentage' details={<p className={+change > 0 ? 'text-green-500' : 'text-red-500'}>{changesPercentage}%</p>} />
                <FlexBetween category='Day High' details={<p>{dayHigh}</p>} />
                <FlexBetween category='Day Low' details={<p>{dayLow}</p>} />
                <FlexBetween category='Open' details={<p>{open}</p>} />
                <FlexBetween category='Previous Close' details={<p>{previousClose}</p>} />
            </div>
        );
}


export default PriceDetailCard