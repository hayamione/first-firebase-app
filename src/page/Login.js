import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Log in successful.", {
            position: toast.POSITION.TOP_CENTER
          });
          navigate("/home");
          console.log("user log in ",user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, " ------ ", errorMessage);
        if (errorCode === "auth/wrong-password")
        toast.error("You entered the wrong password.",{ autoClose: 3000 });
        else if (errorCode === "auth/user-not-found")
        toast.error("You entered the wrong username.",{ autoClose: 3000 });
      });
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="signup-page">
          <div className="container">
            <div className="card">
              <div className="card-header">Log in to your Account</div>
              <form>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    className="form-control"
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="password">Create Password</label>
                  <input
                    className="form-control"
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Button type="submit" onClick={onLogin} className="btn-block">
                  Login
                </Button>
              </form>
              <p>
                No account yet? <NavLink to="/signup">Sign up</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
