import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
  const [userDetail, setUserDetail] = useState('');
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUserDetail(user);
              // userEmail = user.email;
              // ...
              console.log("uid", user.email)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
    console.log("========", userDetail);
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/signup");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
 
  return (
    <>        
      <nav>
                <p>
                    Welcome Home  {userDetail.displayName}
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
    </>
  )
}
 
export default Home;