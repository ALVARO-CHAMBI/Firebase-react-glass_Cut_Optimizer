import React from 'react';
import { AuthForm } from './components/AuthForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <AuthForm />
    </>
  );
}

export default App;