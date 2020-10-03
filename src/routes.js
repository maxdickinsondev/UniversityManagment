import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Estagio from './pages/Estagio';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Estagio} />
            </Switch>
        </BrowserRouter>
    );
}