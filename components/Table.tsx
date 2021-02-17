import React from 'react'
import { PriceProps } from '../interfaces';

interface TableProps {
    title: string | string[]
    tableItems: PriceProps[]
}

const Table: React.FC<TableProps> = ({title, tableItems}) => {
        return (
            <div className='container mx-auto p-10' >
                <h1 className='text-2xl font-black my-10' >{title}</h1>
                <div className='w-full overflow-hidden rounded-md shadow-lg' >
                    <table className="table-fixed w-full text-sm ">
                        <thead className='bg-gray-200' >
                            <tr>
                                <th className='w-1/6 p-4' >Ticker</th>
                                <th className='w-2/6 p-4' >Name</th>
                                <th className='w-1/6 p-4' >Price</th>
                                <th className='w-1/6 p-4' >Change</th>
                                <th className='w-1/6 p-4' >Change%</th>
                            </tr>
                        </thead>
                        <tbody className="font-thin">
                            {tableItems.map( tableItem => <tr key={tableItem.symbol} >
                                <td className='text-center p-3 border-t' >{tableItem.symbol}</td>
                                <td className='text-center p-3 border-t' >{tableItem.name}</td>
                                <td className='text-center p-3 border-t' >{tableItem.price.toLocaleString()}</td>
                                <td className={"text-center p-3 border-t " + (tableItem.change > 0 ? 'text-green-500' : 'text-red-500')} >{tableItem.change.toLocaleString()}</td>
                                <td className={"text-center p-3 border-t " + (tableItem.change > 0 ? 'text-green-500' : 'text-red-500')} >{tableItem.changesPercentage}%</td>
                            </tr> )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
}


export default Table