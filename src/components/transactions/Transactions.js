import React from 'react'
import './transactions.css'

import Transaction from '../transaction/Transaction'

import { useFetch } from '../../api/tauros'

const Transactions = () => {

  const { response } = useFetch('/api/v2/wallets/activity/', 'GET')
  const transactions = response?.results || []
  console.log(transactions)


  return (
    <div className='item transactions'>
      <div className='header'>
        <p className='title'>
          Últimas transacciones
        </p>
        <p className='see-more'>
          Ver completo
        </p>
      </div>
      {
        transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))
      }
    </div>
  );
}

export default Transactions;