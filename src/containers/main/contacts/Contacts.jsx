import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    loadContacts,
    connectContacts,
    disconnectContacts
} from '../../../redux/actions/contacts.actions';
import {
    List,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Dialog
} from '@material-ui/core';
import Contact from './components/Contact';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Search from '@material-ui/icons/Search';
import MoreVert from '@material-ui/icons/MoreVert';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Contacts({open = false, handleClose}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(connectContacts());
        return () => {
            dispatch(disconnectContacts());
        };
    }, [dispatch]);
    const {contacts, inProgress} = useSelector(state => state.ContactsReducer);
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            {inProgress && 'Loading...'}
            <AppBar position="relative">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6">Contactos</Typography>
                    <div style={{flexGrow: 1}}></div>
                    <IconButton color="inherit" onClick={handleClose}>
                        <Search />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleClose}>
                        <MoreVert />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <List>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        {...contact}
                        url={`https://api.adorable.io/avatars/285/${contact.email}.png`}
                    />
                ))}
            </List>
        </Dialog>
    );
}
