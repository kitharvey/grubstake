import { useMemo, useState } from "react";
import { PriceProps } from "../interfaces";

type Key = 'symbol' | 'name' | 'price' | 'change'
type Direction = string
interface setSortConfigProps {
  key: Key
  direction: Direction
}

// const sortTFout = (a: any, b: any) => {
//   if (a.key === b.key)
//     return a.position - b.position;
//   if (a.key < b.key)
//     return -1;
//   return 1;
// };



const useSortTable = (items: PriceProps[]) => {
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