import React, { Fragment } from 'react';
import './transaction.css'

import { formatDate } from '../../utils/formatDate'
import { formatCurrency } from '../../utils/formatCurrency'

const TradeType = ({ transaction }) => {
  const title = transaction.side === 'BUY' ? 'Compra' : 'Venta'

  const date = formatDate(transaction.closed_at)
  const amount = transaction.side === 'BUY' ? transaction.amount_received : -(transaction.amount_paid)
  const currency = transaction.side === 'BUY' ? formatCurrency(transaction.amount_paid) : formatCurrency(transaction.amount_received)
  const symbol = transaction.side === 'BUY' ? '-' : '+'

  return (
    <Fragment>
      <div>
        <p className='title'>
          {`${title.toUpperCase()} ${transaction.left_coin}`}
        </p>
        <p className='date'>
          <span className='transaction-icon' /> {date}
        </p>
      </div>
      <div>
        <p className='amount'>
          {amount} {transaction.left_coin}
        </p>
        <p className='amount-pesos'>
          {symbol} {currency}
        </p>
      </div>
    </Fragment>
  )
}


const TransferType = ({ transaction }) => {
  const title = transaction.type === 'deposit' ? `Depósito ${transaction.coin}` : 'Depósito'

  const date = formatDate(transaction.confirmed_at)
  const amount = transaction.coin === 'MXN' ? formatCurrency(transaction.amount) : transaction.amount

  return (
    <Fragment>
      <div>
        <p className='title'>
          {title.toUpperCase()}
        </p>
        <p className='date'>
          <span className='transaction-icon' /> {date}
        </p>
      </div>
      <p className='amount'>
        {amount} {transaction.coin}
      </p>
    </Fragment>
  )
}

const Transaction = ({ transaction }) => {
  return (
    <div className="transaction">
      {
        transaction.operation === 'transfer'
          ? <TransferType transaction={transaction} />
          : <TradeType transaction={transaction} />
      }
    </div>
  );
}

export default Transaction;