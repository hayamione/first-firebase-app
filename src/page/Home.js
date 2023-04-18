import React from "react";
import { auth } from "../firebase";
import { Button } from "react-bootstrap";

const Home = ({user}) => {

  return (
    <div className="main-wrapper">
      <div className="home-page">
        <div className="card">
          <h3>
            Hello World {user && <span>{user.displayName}</span>}
          </h3>
          {user ? (user.photoURL !== null) && <img src={user.photoURL} className="profile-pic" alt="" /> : ''}
          {user ? 
          <Button onClick={()=>auth.signOut()} className="logout-btn">
            Sign Out
          </Button>
          :
          <Button onClick={()=>auth.signOut()} className="logout-btn">
            Log In
          </Button>
          }
        </div>
      </div>
      </div>
  );
};

export default Home;
