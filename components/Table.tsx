import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import useSortTable from '../hookFunctions/useSortTable';
import { PriceProps } from '../interfaces';

interface TableProps {
    title: string | string[]
    tableItems: PriceProps[]
}

const Table: React.FC<TableProps> = ({title, tableItems}) => {
    const { items, requestSort, sortConfig } = useSortTable(tableItems);
    const getClassNamesFor = (name: string) => {
        if (!sortConfig) {
          return <FontAwesomeIcon icon={faAngleDown} />
        }
        return sortConfig.key === name ? sortConfig.direction === 'ascending' ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleDown} />
    }

        return (
            <div className='container mx-auto p-10' >
                <h1 className='text-2xl font-black my-10' >{title}</h1>
                <div className='w-full overflow-hidden rounded-md shadow-lg' >
                    <table className="table-fixed w-full text-sm ">
                        <thead className='bg-gray-200' >
                            <tr>
                                <th className='w-1/6 p-4 cursor-pointer transition-all hover:text-gray-600' onClick={() => requestSort('symbol')} >
                                    <span>Symbol &nbsp;{getClassNamesFor('symbol')}</span>
                                </th>
                                <th className='w-2/6 p-4 cursor-pointer transition-all hover:text-gray-600' onClick={() => requestSort('name')} >
                                    <span>Name &nbsp;{getClassNamesFor('name')}</span>
                                </th>
                                <th className='w-1/6 p-4 cursor-pointer transition-all hover:text-gray-600' onClick={() => requestSort('price')} >
                                    <span>Price &nbsp;{getClassNamesFor('price')}</span>
                                </th>
                                <th className='w-1/6 p-4 cursor-pointer transition-all hover:text-gray-600'onClick={() => requestSort('change')} >
                                    <span>Change &nbsp;{getClassNamesFor('change')}</span>
                                </th>
                                <th className='w-1/6 p-4 cursor-pointer transition-all hover:text-gray-600' >Change%</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {items.map( tableItem => <tr key={tableItem.symbol} className='bg-white font-thin hover:bg-gray-50' >
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