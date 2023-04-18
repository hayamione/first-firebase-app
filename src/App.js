import React, {useState, useEffect} from 'react';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import firebase from './firebase';
 
function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('signup');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log("This is user:  ",user);
 
  return (
    <div className="app">
      {user ? 
      <Home user={user}/>
      :
      page === 'login' ? <Login setPage={setPage} />
      :
      page === 'signup' && <Signup setPage={setPage} />
    }
    </div>
  );
}
 
export default App;