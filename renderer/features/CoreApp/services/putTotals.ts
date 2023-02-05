import { nodeFirebird } from "../../../lib/nodeFirebird"
let query
export const putTotals = (queryWhere, category) => {
  console.log(queryWhere)
  if(queryWhere)
    query = queryWhere
  const select = `SELECT 
      BREAKFAST_COUNT,
      BREAKFAST_TOTAL_PRICE,
      BREAKFAST_TOTAL_SUBSIDY,
      BREAKFAST_TOTAL,
      LUNCH_COUNT,
      LUNCH_TOTAL_PRICE,
      LUNCH_TOTAL_SUBSIDY,
      LUNCH_TOTAL,
      DINNER_COUNT,
      DINNER_TOTAL_PRICE,
      DINNER_TOTAL_SUBSIDY,
      DINNER_TOTAL,
      COUNT_TOTAL,
      PRICE_TOTAL,
      SUBSIDY_TOTAL,
      TOTAL
    FROM 
      ST_GET_TOTALS_FILTER(${(query || "'01.01.' || EXTRACT(YEAR FROM current_timestamp), current_date")}${category == 'GENERAL'? ",'')" : ",'" + category + "')"}`
  console.log(select)
  const totals = nodeFirebird(select)
  return totals
}

export default putTotals
