import React from "react";
import { useDispatch } from "react-redux";

import { GoogleLogout } from "react-google-login";
import { GOOGLEID } from "../../keys";
import { signOut } from "../../actions/index";

const Logout = () => {
  const dispatch = useDispatch();

  const responseSuccess = () => {
    dispatch(signOut());
  };

  const responseFailure = (response) => {
    console.log("Something Went Wrong!!");
  };

  return (
    <>
      <GoogleLogout
        className='ui button'
        clientId={process.env.GOOGLEID}
        buttonText='Sign Out'
        onFailure={responseFailure}
        onLogoutSuccess={responseSuccess}
        isSignedIn={false}
        theme='dark'
      />
    </>
  );
};

export default Logout;
