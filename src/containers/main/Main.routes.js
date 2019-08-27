import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Messages from './messages/Messages';
import States from './states/States';
import Calls from './calls/Calls';
function MainRoutes() {
    return (
        <Switch>
            <Route exact path="/main" component={Messages} />
            <Route exact path="/main/contactos" component={Messages} />
            <Route exact path="/main/estados" component={States} />
            <Route exact path="/main/llamadas" component={Calls} />
        </Switch>
    );
}

export default MainRoutes;
