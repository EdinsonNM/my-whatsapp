import React, {useState} from 'react';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import {Link} from 'react-router-dom';
export default function Container({children}) {
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
            {children}
        </div>
    );
}
