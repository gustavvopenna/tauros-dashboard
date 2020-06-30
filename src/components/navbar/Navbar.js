import React from 'react';
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <div>
          Tauros
        </div>
      </div>
      <div className='navbar-right'>
        <div className='navbar-item'>Tarjeta Tauros</div>
        <div className='navbar-item selected'>Wallets</div>
        <div className='navbar-item'>Exchange</div>
        <div className='navbar-user'>
          <div className='text-container'>
            <p className='greeting'>¡Hola Manuel!</p>
            <p className='link-profile'>Ir a mi cuenta</p>
          </div>
          <div className='avatar' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;