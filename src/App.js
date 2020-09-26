/*

import React, { Component } from 'react'
import Child from './Child'
import Login from './components/Login'
import Dashboard from './components/Dashboard'




export default class App extends Component {
  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    )
  }
}            


*/



import React from "react";
import Routes from "./Routes";
import { Switch, BrowserRouter as RBrowser } from "react-router-dom";
import OperacionContextProvider from "./context/OperacionContext";
import Navegacion from "./components/Navegacion";






export default function App() {
  return (
    <RBrowser>
      <OperacionContextProvider>
        <Navegacion />
        <div className="container">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </OperacionContextProvider>
    </RBrowser>
  );
}


