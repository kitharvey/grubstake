import { useMemo, useState } from "react";
// import { StockPricesProps, TickersPriceProps } from "../interfaces";

type Key = 'symbol' | 'name' | 'price' | 'change' | 'changes' | 'ticker' | 'companyName'
type Direction = string
export interface setSortConfigProps {
  key: Key
  direction: Direction
}

const useSortTable = (items: any) => {
  const [sortConfig, setSortConfig] = useState<setSortConfigProps | null>(null);
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig && sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: Key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort, sortConfig };
}

export default useSortTable