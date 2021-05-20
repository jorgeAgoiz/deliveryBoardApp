import React from "react";
import GoogleLogin from "react-google-login";
import { GOOGLEID } from "../../keys";

const Login = () => {
  const responseSuccess = (response) => {
    console.log("Logeado!!!!");
    console.log(response);
  };

  const responseFailure = () => {
    console.log("something went wrong!!");
  };

  return (
    <>
      <GoogleLogin
        className='ui button'
        clientId={GOOGLEID}
        buttonText='Sign In with Google'
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
};

export default Login;
