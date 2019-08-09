import React, {useState} from 'react';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Contacts from './Contacts';
import States from './States';
import Calls from './Calls';

export default function Container() {
    const [tab, setTab] = useState(0);
    const handleChangeTab = (event, newValue) => setTab(newValue);
    return (
        <div>
            <AppBar position="relative">
                <Tabs
                    variant="fullWidth"
                    value={tab}
                    onChange={handleChangeTab}
                >
                    <Tab label="Chat" />
                    <Tab label="Estados" />
                    <Tab label="Llamadas" />
                </Tabs>
            </AppBar>
            {tab === 0 && <Contacts />}
            {tab === 1 && <States />}
            {tab === 2 && <Calls />}
        </div>
    );
}
