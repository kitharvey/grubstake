import React from 'react'
import {PriceProps} from '../interfaces'
import FlexBetween from './FlexBetween';
interface PriceDetailCardProps {
    priceData: PriceProps[]
}

const PriceDetailCard: React.FC<PriceDetailCardProps> = ({priceData}) => {

        return (
            <div className='overflow-hidden rounded-md shadow-lg w-96 bg-white p-4' >
                <FlexBetween category='Name' details={<p>{priceData[0].name}</p>} />
                <FlexBetween category='Price' details={<p>{priceData[0].price}</p>} />
                <FlexBetween category='Change' details={<p className={priceData[0].change > 0 ? 'text-green-500' : 'text-red-500'}>{priceData[0].change}</p>} />
                <FlexBetween category='Change Percentage' details={<p className={priceData[0].change > 0 ? 'text-green-500' : 'text-red-500'}>{priceData[0].changesPercentage}%</p>} />
                <FlexBetween category='Day High' details={<p>{priceData[0].dayHigh}</p>} />
                <FlexBetween category='Day Low' details={<p>{priceData[0].dayLow}</p>} />
                <FlexBetween category='Open' details={<p>{priceData[0].open}</p>} />
                <FlexBetween category='Previous Close' details={<p>{priceData[0].previousClose}</p>} />
            </div>
        );
}


export default PriceDetailCard