import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
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
                <Route component = { Cadastro }  path="/cadastro" />
            </Switch>
        </BrowserRouter>
    )
}
