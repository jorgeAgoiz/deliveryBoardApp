import React from "react";
import { GoogleLogout } from "react-google-login";
import { GOOGLEID } from "../../keys";

const Logout = () => {
  const responseSuccess = (response) => {
    console.log(response);
    console.log("Log out completed!!");
  };

  const responseFailure = (response) => {
    console.log(response);
    console.log("Something Went Wrong!!");
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
