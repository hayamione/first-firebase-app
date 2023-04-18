import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = ({setPage}) => {

  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName,
        });
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("asdada", errorCode, errorMessage);
        if (displayName === null)
          toast.error("Please enter username.", { autoClose: 3000 });
        if (errorCode === "auth/invalid-email")
          toast.error("Please enter valid email.", { autoClose: 3000 });
        else if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/email-already-in-use"
        )
          toast.error("User already exists.", { autoClose: 3000 });
        else if (errorCode === "auth/missing-password")
          toast.error("Please enter password.", { autoClose: 3000 });
      });
  };

  

  return (
    <>
      <div className="main-wrapper">
        <div className="signup-page">
          <div className="container">
            <div className="card">
              <div className="card-header">Sign Up / Create Account</div>
              <form>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    className="form-control"
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    label="User Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                    placeholder="User Name"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Create Password</label>
                  <input
                    className="form-control"
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                </div>

                <Button type="submit" onClick={onSubmit} className="btn-block">
                  Sign up
                </Button>
              </form>
              <p>
                Already have an account? <span onClick={()=>setPage('login')}>Log in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
