import React from "react";
import { useDispatch } from "react-redux";

import { GoogleLogout } from "react-google-login";
import { signOut } from "../../actions/index";
const GOOGLEID = process.env.REACT_APP_GOOGLE_ID;

const Logout = () => {
  const dispatch = useDispatch();

  const responseSuccess = () => {
    dispatch(signOut());
  };

  const responseFailure = (response) => {
    console.log("Something Went Wrong!!");
    console.log(response)
  };

  return (
    <>
      <GoogleLogout
        className='ui button'
        clientId={GOOGLEID}
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
