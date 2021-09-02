import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ListarFotos from "./pages/ListarFotos";

const Routes = () => (
    <BrowserRouter>
        <Route component={ListarFotos} path="/" exact />
    </BrowserRouter>
);

export default Routes;
