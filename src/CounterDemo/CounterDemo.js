import React from 'react';
import useCounter from './UseCounter';

const CounterDemo = () => {
    const [count, handleCount] = useCounter(100, 130,5);
    return (<div>
        <p>{count}</p>
        <button onClick={handleCount}>Count</button>
    </div>);
};

export default CounterDemo;