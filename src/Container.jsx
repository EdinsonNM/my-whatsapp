import React, {useState} from 'react';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Contacts from './Contacts';
import States from './States';
import Calls from './Calls';
import {Switch, Route, Link} from 'react-router-dom';
export default function Container() {
    const [tab, setTab] = useState(0);
    const handleChangeTab = (event, newValue) => {
        setTab(newValue);
    };
    return (
        <div>
            <AppBar position="relative">
                <Tabs
                    variant="fullWidth"
                    value={tab}
                    onChange={handleChangeTab}
                >
                    <Tab label="Chat" component={Link} to="/main/contactos" />
                    <Tab label="Estados" component={Link} to="/main/estados" />
                    <Tab
                        label="Llamadas"
                        component={Link}
                        to="/main/Llamadas"
                    />
                </Tabs>
            </AppBar>
            <Switch>
                <Route exact path="/main" component={Contacts} />
                <Route path="/main/contactos" component={Contacts} />
                <Route path="/main/estados" component={States} />
                <Route path="/main/llamadas" component={Calls} />
            </Switch>
        </div>
    );
}
