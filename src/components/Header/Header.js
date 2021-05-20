import React from "react";
import Login from "../GoogleAuth/Login";

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <a className='item'>Reparto</a>
      <a className='item'>FAQ</a>
      <a className='item active'>Repartidores</a>
      <div className='right menu'>
        <Login />
      </div>
    </div>
  );
};

export default Header;
