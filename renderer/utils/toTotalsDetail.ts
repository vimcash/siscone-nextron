import { getColumnByIndex } from "./getColumnByIndex";

export const toTotalsDetail = (dataSource) => ({
  breakfast: Number(getColumnByIndex(dataSource, 0)),
  lunch: Number(getColumnByIndex(dataSource, 4)),
  dinner: Number(getColumnByIndex(dataSource, 8)),
  money: Number(getColumnByIndex(dataSource, 13)),
  subsidy: Number(getColumnByIndex(dataSource, 14)),
  total: Number(getColumnByIndex(dataSource, 15))
})