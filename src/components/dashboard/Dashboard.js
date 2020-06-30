import React from "react";

import './dashboard.css'

import Wallets from '../wallets/Wallets'
import TradingGraph from '../trading-graph/TradingGraph'
import TradingArea from '../trading/TradingArea'
import Transactions from '../transactions/Transactions'

const Dashboard = () => {

  return (
    <div className='container'>
      <Wallets className='item wallets' />
      <TradingGraph />
      <TradingArea />
      <Transactions />
    </div>
  )
}

export default Dashboard