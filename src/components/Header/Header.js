import React from "react";
import { useSelector } from "react-redux";
import Login from "../GoogleAuth/Login";
import Logout from "../GoogleAuth/Logout";

const Header = () => {
  const isSigned = useSelector((state) => state.auth.isSignedIn);

  const loginButton = () => {
    return isSigned ? <Logout /> : <Login />;
  };

  return (
    <div className='ui secondary pointing menu'>
      <a className='item'>Reparto</a>
      <a className='item'>FAQ</a>
      <a className='item active'>Repartidores</a>
      <div className='right menu'>{loginButton()}</div>
    </div>
  );
};

export default Header;
