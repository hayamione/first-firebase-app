import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../images/logo.png";

const Layout = ({ children }) => {
  const [userDetail, setUserDetail] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserDetail(user);
        // userEmail = user.email;
        // ...
        console.log("uid", user.email);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  console.log("========", userDetail);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="main-wrapper">
      <div className="header-section">
        <div className="logo-section">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <button onClick={handleLogout} className="logout-btn">
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
      <div className="main-content">
      {children}
      </div>
    </div>
  );
};

export default Layout;
