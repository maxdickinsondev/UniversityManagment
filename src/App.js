import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from '../src/styles/global';
import Template from '../src/components/Template';
import Routes from '../src/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Template>
          <Routes />
          <ToastContainer autoClose={3000} />
          <GlobalStyle />
        </Template>
      </BrowserRouter>
    </>
  );
}

export default App;
