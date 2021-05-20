import React from "react";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import { GOOGLEID } from "../../keys";
import { signIn } from "../../actions/index";

const Login = () => {
  const dispatch = useDispatch();

  const responseSuccess = (response) => {
    const { googleId } = response;
    dispatch(signIn(googleId));
  };

  const responseFailure = () => {
    console.log("something went wrong!!");
  };

  return (
    <>
      <GoogleLogin
        className='ui button'
        clientId={GOOGLEID}
        buttonText='Sign In'
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
};

export default Login;
