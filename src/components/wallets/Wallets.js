import React from 'react'
import './wallets.css'

import { useFetch } from '../../api/tauros'

import Wallet from '../wallet/Wallet'

const Wallets = () => {
  const { response } = useFetch('/api/v1/data/listbalances/', 'GET')
  const wallets = response?.data?.wallets || []
  const walletsAvailable = wallets.length > 0
  console.log(wallets)

  return (
    <div className='wallets wallets__container'>
      <div className='wallets__total-available'>
        <div className='title'>
          <span>Wallets</span>
        </div>
        <div className='amount-container'>
          <p className='amount'>
            $54,602.56
          </p>
          <p className='subtitle'>
            Total aproximado en MXN
          </p>
        </div>
      </div>
      <div className='wallets__all'>
        {walletsAvailable ?
          wallets.map((wallet) => (
            <Wallet key={wallet.coin} wallet={wallet} />
          )) : null
        }
      </div>
    </div>
  )
}

export default Wallets