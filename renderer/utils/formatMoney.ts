export const formatMoney = (inQty:number) => {
  const formater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return formater.format(inQty)
}