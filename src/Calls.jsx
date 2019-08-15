import React, {useEffect, useState} from 'react';

export default function Calls() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    useEffect(() => {
        document.title = 'Listado de llamadas';
    });
    useEffect(() => {
        console.log('cambio counter ...');
    }, [counter1, counter2]);
    const handleIncrementCounter1 = () => setCounter1(counter1 + 1);
    const handleIncrementCounter2 = () => setCounter2(counter2 + 1);
    const handleIncrementCounter3 = () => setCounter3(counter3 + 1);
    return (
        <div>
            <button onClick={handleIncrementCounter1}>
                Counter 1 ({counter1})
            </button>
            <button onClick={handleIncrementCounter2}>
                Counter 2 ({counter2})
            </button>
            <button onClick={handleIncrementCounter3}>
                Counter 3 ({counter3})
            </button>
        </div>
    );
}
