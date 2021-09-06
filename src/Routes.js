import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import ListarFotos from "./pages/ListarFotos";

const customHistory = createBrowserHistory();

const Routes = () => (
    <BrowserRouter>
        <Router history={customHistory}>
            <Route component={ListarFotos} path="/" exact />
        </Router>
    </BrowserRouter>
);

export default Routes;
