import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Estagio from './pages/Estagio';
import ViewEstagio from './pages/ViewEstagio';
import segundaChamada from './pages/segundaChamada';
import ComplementaryHours from './pages/ComplementaryHours';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Estagio} />
      <Route exact path="/viewestagio" component={ViewEstagio} />
      <Route exact path="/segundaChamada" component={segundaChamada} />
      <Route exact path="/horacomplementar" component={ComplementaryHours} />
    </Switch>
  );
}
