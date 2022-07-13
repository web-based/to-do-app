import React, { useState } from 'react'
import { Link} from 'react-router-dom'


// |||||||| login component for any new user to the application ||||||||

function Login({setCurrentUser}) {
  // const history = useHistory();

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    const {name, value} = e.target
    setFormData((formData) => ({...formData,
      [name]: value
    }))
      console.log(name, value)
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target)
    console.log(formData)
    fetch("/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          console.log(user)
          setCurrentUser(user)
          // history.push('/')
        })
      } else {
        res.json().then(errors => {
          console.error(errors)
        })
      }
    })
  }
  return (
    <div >
{/* ||||||||||||||||| Below this line is the login form for a new user ||||||||||||||||*/}
      <form class="login_form" className="box" onSubmit={handleSubmit}>
        <h1 class="text-center">Log In</h1>
          <div class="input-container">
            <input 
            type="text" 
            // name={username}
            name="username"
            // value={username}
            value={formData.username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleChange}
            />
            <label 
            // htmlFor="username"
            >User Name</label>		
          </div>

          <div class="input-container">		
            <input 
              type="password" 
              name="password"
              // value={password}
              value={formData.password}
              // onChange={(e)=> setPassword(e.target.value)}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
            <div class="btn-container">
            <button class="btn-29"  to="/home">Log In</button>
            <p>-- or --</p>
            <Link class="btn-29" type="submit" to="/signup">Sign Up</Link>
          </div>
      </form>	

    </div>
  );
}

export default Login