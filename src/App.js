import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from '../src/styles/global';
import Routes from '../src/routes';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
