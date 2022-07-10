import React, { useState} from 'react'


// |||||||| login component for any new user to the application ||||||||
function Login({onLogin}) {

  const [username, setUsername] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    fetch('/login',{
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
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

    </div>
  );
}

export default Login