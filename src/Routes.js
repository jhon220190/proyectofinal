import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
import PrincipalView from './views/PrincipalView'
import InicioView from './views/InicioView'
import ModElemView from './views/ModElemView'
import PanelPrincipal from './views/PanelPrincipal'
import Register from './views/Register'
import Login from './views/Login'


/*
export default function Routes() {
    return (
        <Fragment>
            <Route exact path="/" component={InicioView} />
            <Route exact path="/principal" component={PrincipalView} />
            <Route exact path="/modificar" component={ModElemView} />
            <Route exact path="/crear" component={ModElemView} />
            <Route exact path="/PanelPrincipal" component={ModElemView} />
        </Fragment>
    )
}

*/



export default function Routes() {
    return (
        <Fragment>
            <Route exact path="/" component={InicioView} />
            <Route exact path="/principal" component={PrincipalView} />
            <Route exact path="/modificar" component={ModElemView} />
            <Route exact path="/crear" component={ModElemView} />
            <Route exact path="/PanelPrincipal" component={PanelPrincipal} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
        </Fragment>
    )
}
