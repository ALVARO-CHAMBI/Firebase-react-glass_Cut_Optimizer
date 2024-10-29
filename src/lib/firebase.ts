import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyCwnOPicbqutXLJSxNGpDp-OAjmaiYFE",
  authDomain: "reactfirebaseglass.firebaseapp.com",
  projectId: "reactfirebaseglass",
  storageBucket: "reactfirebaseglass.appspot.com",
  messagingSenderId: "126234046187",
  appId: "G-SJYNCWVSMG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);