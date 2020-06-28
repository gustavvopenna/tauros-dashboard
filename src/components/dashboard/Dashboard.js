import React from "react";
import './dashboard.css'

import Wallets from '../wallets/Wallets'

const Dashboard = () => {
  return (
    <div className='container'>
      <Wallets className='item wallets' />
      <div className='item graph'></div>
      <div className='item buysell'></div>
      <div className='item transactions'></div>
    </div>
  )
}

export default Dashboard