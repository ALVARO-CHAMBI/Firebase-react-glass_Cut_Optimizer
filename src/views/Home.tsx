//import React, { useContext } from 'react';
import { useAuth } from '../context/authContext';

function Home() {
  const {user} = useAuth()
  //const AuthContext = useContext(context)
  console.log(user)
  return <h1>Home Page</h1>;
}

export default Home;