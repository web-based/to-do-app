import React, { useState } from 'react'
import {Link } from 'react-router-dom'


// |||||||| login component for any new user to the application ||||||||
function Login({setCurrentUser}) {
  // const history = useHistory()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  function handleSubmit(e){
    e.preventDefault();
    fetch('/login',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username,password}),
    })
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          // history.push("/login")
        })
      } else {
        res.json().then(errors => {
          console.error(errors)
        })
      }
    })
  }
  return (
    <div>
{/* ||||||||||||||||| Below this line is the login form for a new user ||||||||||||||||*/}
      <form className="box" onSubmit={handleSubmit}>
        <h1 class="text-center">Log In</h1>
          <div class="input-container">
            <input 
            type="text" 
            name={username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">User Name</label>		
          </div>

          <div class="input-container">		
            <input 
            type="password" 
            name=""
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div class="btn-container">
          <button class="btn-29" type="submit">Log In</button>
          <p>-- or --</p>
          <Link class="btn-29" type="submit"  to="/signup">Sign Up</Link>
          </div>
      </form>	

    </div>
  );
}

export default Login