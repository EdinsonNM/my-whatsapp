import React, {useState} from 'react';
import {Snackbar} from '@material-ui/core';
export const NotificationContext = React.createContext();
export const NotificationProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const handleOpen = message => {
        setOpen(true);
        setMessage(message);
    };
    const handleClose = () => {
        setMessage('');
        setOpen(false);
    };
    return (
        <NotificationContext.Provider
            value={{
                open,
                handleOpen,
                handleClose
            }}
        >
            {children}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
            />
        </NotificationContext.Provider>
    );
};
