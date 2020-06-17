import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // useState() returns an array! 
  // So, by using bracket as useState(0) we are using first value of array ([0]) 
  // as value of our state and second ([1]) is the method we define to change our state.
  
  return (
    <div className="App">
        <h1>Understanding React Hooks</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click to increase count</button>
    </div>
  );
}

export default App;
