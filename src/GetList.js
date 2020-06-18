import React,{useEffect,useState} from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {        
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);
    
    
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