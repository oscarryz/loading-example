import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios'
import User from './User'


function App() {
  // Get data with a delay
  const url = 'http://slowwly.robertomurray.co.uk/delay/4000/url/https://reqres.in/api/users?page=2'

  const [users, setUsers] = useState([null, null, null]) 
  useEffect(() => {
    (async () => {
      const response = await axios.get(url)
      setUsers(response.data.data)
    })()

  }, [url])

  return (
    <div className="App">
      { users.map(user =>  <User data={user} />) }
    </div>
  );
}

export default App;
