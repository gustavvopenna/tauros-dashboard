export const formatDate = (rawDate) => {
  const date = new Date(rawDate)

  const options = {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }

  const formattedDate = new Intl.DateTimeFormat('es-MX', options).format(date)
  const dateWithoutPeriods = formattedDate.replace('.', '')
  return dateWithoutPeriods
}