import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
      const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
      const [title] = useState('useEffect() in Hooks');
      const[updateName] = useState(false);
    
    useEffect((updateName) => {
        console.log('Running useEffect');
        if(updateName)
        setFullName({name: 'Updated name'});
    }, []);
    // Running useEffect without [] keeps running the loop like componentDidUpdate 
    // To tell useEffect to act like componentDidMount just pass an empty array []
   
    //updateName({updateName: true});

    return(
        <div className="App">
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
            <button onClick={updateName}>Click to update</button>
        </div>
      );
 
}

export default App;
