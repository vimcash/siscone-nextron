import { formatMoney } from "./formatMoney"
import { getColumnByIndex } from "./getColumnByIndex"
import { getNameByRowType } from "./getNameByRowType"

export const convertTotalsToReport = (inTotals, excel=false) => [
  {
    category: `${getNameByRowType('breakfast')}`, 
    qty: `${getColumnByIndex(inTotals, 0) || 0}`,
    price: `${formatMoney(getColumnByIndex(inTotals, 1) || 0)}`,
    subsidy: `${formatMoney(getColumnByIndex(inTotals, 2) || 0)}`,
    total: `${formatMoney(getColumnByIndex(inTotals, 3) || 0)}`,
  },
  {
    category: `${getNameByRowType('lunch')}`,
    qty: `${getColumnByIndex(inTotals, 4) || 0}`,
    price: `${formatMoney(getColumnByIndex(inTotals, 5) || 0)}`,
    subsidy: `${formatMoney(getColumnByIndex(inTotals, 6) || 0)}`,
    total: `${formatMoney(getColumnByIndex(inTotals, 7) || 0)}`,
  },
  {
    category: `${getNameByRowType('dinner')}`,
    qty: `${getColumnByIndex(inTotals, 8) || 0}`,
    price: `${formatMoney(getColumnByIndex(inTotals, 9) || 0)}`,
    subsidy: `${formatMoney(getColumnByIndex(inTotals, 10) || 0)}`,
    total: `${formatMoney(getColumnByIndex(inTotals, 11) || 0)}`,
  },
  {
    category: `Total`,
    qty: `${getColumnByIndex(inTotals, 12) || 0}`,
    price: `${formatMoney(getColumnByIndex(inTotals, 13) || 0)}`,
    subsidy: `${formatMoney(getColumnByIndex(inTotals, 14) || 0)}`,
    total: `${formatMoney(getColumnByIndex(inTotals, 15) || 0)}`,
  }
]
