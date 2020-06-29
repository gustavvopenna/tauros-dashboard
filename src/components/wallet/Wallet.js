import React from 'react'
import './wallet.css'

function Wallet({ wallet }) {
  return (
    <div className="wallet">
      <div className='coin-container'>
        <img src={wallet.coin_icon} alt={wallet.coin_name} className='coin-icon' />
        <span className='coin-name'>{wallet.coin_name}</span>
      </div>
      <div className='available-container'>
        <p className='available'>
          {wallet.balances.available}
        </p>
        <span className='available-pesos'>
          $149.50
        </span>
      </div>
    </div>
  )
}

export default Wallet;
