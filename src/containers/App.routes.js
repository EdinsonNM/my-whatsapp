import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './login/Login';
import Main from './main/Main';
function AppRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/main" component={Main} />
        </Switch>
    );
}

export default AppRoutes;
