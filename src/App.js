import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios'
import User from './User'


function App() {
  const url = 'http://slowwly.robertomurray.co.uk/delay/4000/url/https://reqres.in/api/users?page=2'
  const [users, setUsers] = useState([null, null, null])
  useEffect(() => {
    (async () => {
      // Get data with a delay
      const response = await axios.get(url)
      setUsers(response.data.data)
    })()

  }, [url])

  return (
    <div className="App">
      {
        users.map(u => {
          if (u !== null) {
            u.title = 'Program Manager'
            u.phone = '(555) 658-1111'
          }
          return <User data={u} />
        })
      }
    </div>
  );
}

export default App;
