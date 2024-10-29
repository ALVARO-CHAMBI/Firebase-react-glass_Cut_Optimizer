// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyCwnOPicbqutXLJSxNGpDp-OAjmaiYFE",
  authDomain: "reactfirebaseglass.firebaseapp.com",
  projectId: "reactfirebaseglass",
  storageBucket: "reactfirebaseglass.appspot.com",
  messagingSenderId: "126234046187",
  appId: "1:126234046187:web:95f8f6d2865ed039db18ae",
  measurementId: "G-SJYNCWVSMG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)