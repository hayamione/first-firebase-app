// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAh4E3-xE9vku4ZdavYULtCC1RKvGS-hGE",
  authDomain: "first-app-71581.firebaseapp.com",
  projectId: "first-app-71581",
  storageBucket: "first-app-71581.appspot.com",
  messagingSenderId: "564080015560",
  appId: "1:564080015560:web:abedb4c66f2d519c9b0dfd"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;