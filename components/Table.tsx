import React from 'react'
import useSortTable, {setSortConfigProps} from '../hookFunctions/useSortTable';
import { StockPricesProps } from '../interfaces';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import { useRouter } from 'next/router';
interface TableProps {
    title: string | string[]
    tableItems: StockPricesProps[]
}
interface TableHeaderNameProps {
    title: string
    sortName: string
    sortConfig: setSortConfigProps | null
}

const getClassNamesFor = (name: string, sortConfig: setSortConfigProps | null) => {
    if (!sortConfig) {
      return <FaAngleDown/>
    }
    return sortConfig.key === name ? sortConfig.direction === 'ascending' ? <FaAngleDown /> : <FaAngleUp /> : <FaAngleDown/>
}

const TableHeaderName: React.FC <TableHeaderNameProps> = ({title, sortName, sortConfig}) => {
    return  <div className='flex items-center justify-center' >{title}&nbsp;<span>{getClassNamesFor(sortName, sortConfig)}</span></div>
}

const Table: React.FC<TableProps> = ({title, tableItems}) => {
    const { items, requestSort, sortConfig } = useSortTable(tableItems);
    const router = useRouter()

        return (
            <div  >
                <h1 className='text-2xl font-black my-5' >{title}</h1>
                <div className='w-full overflow-hidden rounded-md shadow-lg' >
                    <table className="table-fixed w-full text-sm ">
                        <thead className='bg-gray-200' >
                            <tr >
                                <th className='w-1/6 p-4 cursor-pointer transition-all hover:text-blue-800' onClick={() => requestSort('symbol')} >
                                    <TableHeaderName title='Symbol' sortName='symbol' sortConfig={sortConfig} />
                                </th>
                                <th className='w-2/6 p-4 cursor-pointer transition-all hover:text-blue-800' onClick={() => requestSort('name')} >
                                    <TableHeaderName title='Name' sortName='name' sortConfig={sortConfig} />
                                </th>
                                <th className='w-1/6 p-4 cursor-pointer transition-all hover:text-blue-800' onClick={() => requestSort('price')} >
                                    <TableHeaderName title='Price' sortName='price' sortConfig={sortConfig} />
                                </th>
                                <th className='w-1/6 p-4 cursor-pointer transition-all hover:text-blue-800'onClick={() => requestSort('change')} >
                                    <TableHeaderName title='Change' sortName='change' sortConfig={sortConfig} />
                                </th>
                                <th className='w-1/6 p-4' >Change%</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {items.map( tableItem => (
                                <tr 
                                    key={tableItem.symbol} 
                                    className='bg-white font-thin hover:bg-gray-50 hover:font-medium cursor-pointer ' 
                                    onClick={() => router.push({
                                        pathname: `/financial-summary/${tableItem.symbol}`,
                                    })}
                                >
                                <td className='text-center p-3 border-t' >{tableItem.symbol}</td>
                                <td className='text-center p-3 border-t' >{tableItem.name}</td>
                                <td className='text-center p-3 border-t' >{tableItem.price.toLocaleString()}</td>
                                <td className={"text-center p-3 border-t " + (tableItem.change > 0 ? 'text-green-500' : 'text-red-500')} >{tableItem.change.toLocaleString()}</td>
                                <td className={"text-center p-3 border-t " + (tableItem.change > 0 ? 'text-green-500' : 'text-red-500')} >{tableItem.changesPercentage}%</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
}


export default Table