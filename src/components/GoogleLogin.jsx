import React from "react";
import { Button } from "react-bootstrap";
import { signInWithGoogle } from "../firebase";
import { Google } from "./SVGCompnent";

const GoogleLogin = () => {
  return (
    <div className="google-login-section">
      <p>OR</p>
      <Button
        className="google-login-btn"
        // onClick={handleGoogleLogin}
        // onClick={() => {
        //   auth
        //     .getRedirectResult(provider)
        //     .catch((error) => alert(error.message));
        // }}
        onClick={signInWithGoogle}
      >
        <Google />
        <span>Sign In With Google</span>
      </Button>
    </div>
  );
};

export default GoogleLogin;
