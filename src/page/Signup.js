import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Google } from "../components/SVGCompnent";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

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
        navigate("/login");
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

  // getRedirectResult(auth)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access Google APIs.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;

  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });

  // const handleGoogleLogin = async () => {
  //   try {
  //     const googleAuth = new GoogleAuth();
  //     const { id_token } = await googleAuth.signIn({
  //       client_id:
  //         "564080015560-ioioidl01ddj07ae36bhtmo1c7t3bpgr.apps.googleusercontent.com",
  //       scope: "email",
  //     });
  //     const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
  //     await firebase.auth().signInWithCredential(credential);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  

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
              <p>
                Already have an account? <NavLink to="/login">Sign in</NavLink>
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
