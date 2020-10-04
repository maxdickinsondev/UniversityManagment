import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Estagio from './pages/Estagio';
import ViewEstagio from './pages/ViewEstagio';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Estagio} />
                <Route path="/viewestagio" component={ViewEstagio} />
            </Switch>
        </BrowserRouter>
    );
}