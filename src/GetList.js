import React,{useEffect,useState} from 'react';
//import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    async function fetchData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        response.json().then(res => setUsers(res)).catch(err => setError(err));
        setLoad(true);
    
    }
    
    useEffect(() => {
        console.log('useEffect still running');
        fetchData();
    },[]);
    // without the square bracket here the loop keeps running ad infinitum
    
    if (load) {
        return (
         <div>
        <h1>JSON Data</h1>
        <ul>
            {error ? <li>{error.message}</li> : 
            users.map((user, index) => <li key={index}>{user.name} is from {user.address.city}</li>)}
        </ul></div>   );
    } else {
        return (
            <div>
               <h1>Loading...</h1>
            </div>
        );
    }
};

export default UserList;