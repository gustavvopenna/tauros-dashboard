import React from 'react';

const TradeType = ({ transaction }) => {
  const title = transaction.side === 'BUY' ? 'Compra' : 'Venta'

  const formatDate = (rawDate) => {
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

  const date = formatDate(transaction.closed_at)

  return (
    <div>
      {`${title.toUpperCase()} ${transaction.left_coin}`}
      <p>
        {date}
      </p>
    </div>
  )
}

export default TradeType;