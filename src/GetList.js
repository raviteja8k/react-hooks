import React,{useEffect,useState} from 'react';
//import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    async function fetchData(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        res.json().then(res => setUsers(res)).catch(err => setError(err));
        setLoad(true);
    
    }
    
    useEffect(() => {
        fetchData();
    });
    
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
                Loading...
            </div>
        );
    }
};

export default UserList;