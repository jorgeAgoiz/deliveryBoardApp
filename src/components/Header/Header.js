import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "../GoogleAuth/Login";
import Logout from "../GoogleAuth/Logout";

const Header = () => {
  const isSigned = useSelector((state) => state.auth.isSignedIn);

  const loginButton = () => {
    return isSigned ? <Logout /> : <Login />;
  };

  return (
    <div className='ui secondary pointing menu'>
      <NavLink to='/' className='item'>
        Reparto
      </NavLink>
      <NavLink to='/dealers' className='item'>
        Repartidores
      </NavLink>
      <NavLink to='/faq' className='item'>
        FAQ
      </NavLink>
      <div className='right menu'>{loginButton()}</div>
    </div>
  );
};

export default Header;
