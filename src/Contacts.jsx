import React, {useState, useEffect} from 'react';
import {List} from '@material-ui/core';
import Contact from './Contact';
import UserApi from './api/user';
export default function Contacts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        //componentDidMount
        console.log('useEffect: componentDidMount');
        UserApi.getAll().then(response => {
            let {results} = response;
            setData(results);
        });
    }, []);

    useEffect(() => {
        //component didUpdate
        console.log('se ejecuto useEffect al escuchar cambios en data ');
    }, [data]);
    return (
        <List>
            {data.map(contact => (
                <Contact
                    key={contact.login.uuid}
                    firstname={contact.name.first}
                    lastname={contact.name.last}
                    url={contact.picture.thumbnail}
                />
            ))}
        </List>
    );
}
