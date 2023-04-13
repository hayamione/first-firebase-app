// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBKJ4fN4KhXMLKSsnC_lCgLM8r77Raii-g",
  authDomain: "first-app-4677b.firebaseapp.com",
  projectId: "first-app-4677b",
  storageBucket: "first-app-4677b.appspot.com",
  messagingSenderId: "732365163965",
  appId: "1:732365163965:web:b76c250465d71062e396d4"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;