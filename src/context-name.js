import React, {useState} from 'react';
export const Context = React.createContext();
export const Provider = props => {
    const contactName = 'Listado con provider';
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const changeCounter1 = () => setCounter1(counter1 + 1);
    return (
        <Context.Provider
            value={{counter1, counter2, contactName, changeCounter1}}
        >
            {props.children}
        </Context.Provider>
    );
};
export const Consumer = Context.Consumer;
