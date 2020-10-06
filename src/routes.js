import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Estagio from './pages/Estagio';
import ViewEstagio from './pages/ViewEstagio';
import segundaChamada from './pages/segundaChamada';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Estagio} />
        <Route path="/viewestagio" component={ViewEstagio} />
        <Route path="/segundaChamada" component={segundaChamada} />
      </Switch>
    </BrowserRouter>
  );
}
