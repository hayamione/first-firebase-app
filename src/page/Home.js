import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
// import { useNavigate } from 'react-router-dom';
import Layout from "../components/Layout";

const Home = () => {
  const [userDetail, setUserDetail] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserDetail(user);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  console.log("========", userDetail);
  // const navigate = useNavigate();

  return (
    <Layout>
      <div className="home-page">
        <div className="card">
          <p>
            Welcome Home <span>{userDetail.displayName}</span>
          </p>
          {userDetail.photoURL ? <img src={userDetail.photoURL} alt="" /> : ''}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
