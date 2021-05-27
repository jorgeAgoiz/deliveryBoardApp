import React from "react";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import { signIn } from "../../actions/index";
const GOOGLEID = process.env.REACT_APP_GOOGLE_ID;

const Login = () => {
  const dispatch = useDispatch();

  const responseSuccess = (response) => {
    const { googleId } = response;
    dispatch(signIn(googleId));
  };

  const responseFailure = (response) => {
    console.log("something went wrong!!");
    console.log(response)
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
