import React from 'react';
import useCounter from './UseCounter';

const CounterDemo = () => {
    const [count, handleCount] = useCounter(100, 130,5);
    // useCounter is our custom hook that receives 3 arguments: start, finish and step.

    return (<div>
        <p>Count: {count}</p>
        <button onClick={handleCount}>Count</button>
    </div>);
};

export default CounterDemo;