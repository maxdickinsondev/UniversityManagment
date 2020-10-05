import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from '../src/styles/global';
import Template from '../src/components/Template';
import Routes from '../src/routes';

function App() {
  return (
    <>
      <Template>
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
        <Routes />
      </Template>
    </>
  );
}

export default App;
