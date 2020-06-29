import React from "react";
import './dashboard.css'

import Wallets from '../wallets/Wallets'
import Transactions from '../transactions/Transactions'

const Dashboard = () => {
  return (
    <div className='container'>
      <Wallets className='item wallets' />
      <div className='item graph'></div>
      <div className='item buysell'></div>
      <Transactions />
    </div>
  )
}

export default Dashboard