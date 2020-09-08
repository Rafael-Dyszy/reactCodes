'use sttrict' 

import React, { useState, useEffect } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

export default function App () {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUSers] = useState(false);

  
useEffect(() => {
  const fetchUsers = async () => {
    const res = await fetch(
    'https://randomuser.me/api/?seed=rush&nat=br&results=10'
  );

  const json = await res.json()
  setUsers(json.results);
    };
    fetchUsers();
  
}, [])


  const handleShowUsers = (isChecked) => {
    setShowUSers(isChecked);
  }

    return (
      <div>
        <h2>React LifeCycle</h2>
        <Toggle enabled={showUsers} onToggle={handleShowUsers}/>
        <hr/>
        {showUsers && <Users users={users}/>}
        
      </div>
    )
  }

