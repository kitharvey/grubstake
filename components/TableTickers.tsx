import React from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { useRouter } from "next/router"
import useSortTable, { SetSortConfigProps } from "../hookFunctions/useSortTable"
import { TickersPriceProps } from "../interfaces/interfaces"

interface TableProps {
  title: string | string[]
  tableItems: TickersPriceProps[]
}

interface TableHeaderNameProps {
  title: string
  sortName: string
  sortConfig: SetSortConfigProps | null
}

const getClassNamesFor = (name: string, sortConfig: SetSortConfigProps | null) => {
  if (sortConfig) {
    if (sortConfig.key === name) {
      if (sortConfig.direction === "ascending") {
        return <FaAngleDown />
      }
      return <FaAngleUp />
    }
    return <FaAngleDown />
  }

  return <FaAngleDown />
}

const TableHeaderName: React.FC<TableHeaderNameProps> = ({ title, sortName, sortConfig }) => {
  return (
    <div className="flex items-center justify-center">
      {title}&nbsp;<span>{getClassNamesFor(sortName, sortConfig)}</span>
    </div>
  )
}

const TableTickers: React.FC<TableProps> = ({ title, tableItems }) => {
  const { items, requestSort, sortConfig } = useSortTable(tableItems)
  const router = useRouter()

  return (
    <div>
      <h1 className="text-2xl font-black my-5">{title}</h1>
      <div className="w-full overflow-hidden rounded-md shadow-lg">
        <table className="table-fixed w-full text-xs md:text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th
                className="w-1/6 py-4 cursor-pointer transition-all hover:text-blue-800"
                onClick={() => requestSort("ticker")}
              >
                <TableHeaderName title="Ticker" sortName="ticker" sortConfig={sortConfig} />
              </th>
              <th
                className="w-2/6 py-4 cursor-pointer transition-all hover:text-blue-800"
                onClick={() => requestSort("companyName")}
              >
                <TableHeaderName title="Name" sortName="companyName" sortConfig={sortConfig} />
              </th>
              <th
                className="w-1/6 py-4 cursor-pointer transition-all hover:text-blue-800"
                onClick={() => requestSort("price")}
              >
                <TableHeaderName title="Price" sortName="price" sortConfig={sortConfig} />
              </th>
              <th
                className="w-1/6 py-4 cursor-pointer transition-all hover:text-blue-800"
                onClick={() => requestSort("changes")}
              >
                <TableHeaderName title="Change" sortName="changes" sortConfig={sortConfig} />
              </th>
              <th className="w-1/6 py-4">Change%</th>
            </tr>
          </thead>
          <tbody className="">
            {items.map((tableItem) => {
              const changerate = tableItem.changesPercentage.replace(/[()%]/g, "")
              return (
                <tr
                  key={tableItem.ticker}
                  className="bg-white font-thin hover:bg-gray-50 hover:font-medium cursor-pointer "
                  onClick={() =>
                    router.push({
                      pathname: `/financial-summary/${tableItem.ticker}`,
                    })
                  }
                >
                  <td className="text-center py-3 border-t">{tableItem.ticker}</td>
                  <td className="text-center py-3 border-t">{tableItem.companyName}</td>
                  <td className="text-center py-3 border-t">{tableItem.price.toLocaleString()}</td>
                  <td
                    className={`text-center py-3 border-t ${
                      tableItem.changes > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {tableItem.changes.toLocaleString()}
                  </td>
                  <td
                    className={`text-center py-3 border-t ${
                      tableItem.changes > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {changerate}%
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableTickers
