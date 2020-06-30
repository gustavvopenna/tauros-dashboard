import React from 'react';
import './trading-area.css'

const TradingArea = () => {
  return (
    <div className='item trading'>
      <div className='buttons-container'>
        <button className="sell-button active">Vender</button>
        <button className='buy-button'>Comprar</button>
      </div>

      <div className='trading-card'>
        <div className='body-top'>
          <button className="max-button">MAX</button>
          <button className="change-button">UPP</button>
          <div className='amount'>100 <span>MXN</span></div>
          <span>0.00077952 BTC</span>
        </div>
        <div className='body-bottom'>
          <p>Disponible: $6,765.00</p>
        </div>
      </div>
    </div>
  );
}

export default TradingArea;