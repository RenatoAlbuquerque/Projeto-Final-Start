import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Produto from "../Pages/Produto";
import Compras from "../Pages/Compras";
export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route component = { Login }  path="/" exact />
                <Route component = { Home }  path="/home"  />
                <Route component = { Produto }  path="/produto" />
                <Route component = { Compras }  path="/compras" />
            </Switch>
        </BrowserRouter>
    )
}
