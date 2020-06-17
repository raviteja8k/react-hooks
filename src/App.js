import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
      const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
      const [title,setTitle] = useState('useEffect() in Hooks');
    
    useEffect(() => {
      
    });
    
    return(
        <div className="App">
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
        </div>
      );
 
}

export default App;
