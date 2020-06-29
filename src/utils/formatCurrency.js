export const formatCurrency = (number) => {
  const options = {
    style: 'currency',
    currency: 'USD'
  }
  const currency = new Intl.NumberFormat('en-US', options).format(number)
  return currency
}