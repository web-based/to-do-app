import React, { useState} from 'react'


// |||||||| login component for any new user to the application ||||||||
function Login({onLogin}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  function handleSubmit(e){
    e.preventDefault();
    fetch('/users',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username}),
    })
    .then((r) => r.json())
    .then((user) => onLogin(user));
  }

  return (
    <div>
{/* ||||||||||||||||| Below this line is the login form for a new user ||||||||||||||||*/}
      <form className="box" onSubmit={handleSubmit}>
        <h1 class="text-center">Sign In</h1>
          <div class="input-container">
            <input 
            type="text" 
            required=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
                />
            <label>User Name</label>		
          </div>

          <div class="input-container">		
            <input 
            type="text" 
            required=""
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button class="btn-29" type="submit">Login</button>
      </form>	

    </div>
  );
}

export default Login