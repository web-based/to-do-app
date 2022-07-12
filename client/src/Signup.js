import React, { useState} from 'react'
import { Link } from 'react-router-dom'

function Signup({setCurrentUser}) {

//  const history = useHistory()
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [passwordConfirmation, setPasswordConfirmation] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
  fetch('/signup', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      username,
      password,
      passConfirm: passwordConfirmation
    })
  })
 
 .then(res => {
  if (res.ok) {
   res.json().then(user => {
    setCurrentUser(user)
    // history.push('/signup')
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
      <form className="box" onSubmit={handleSubmit}>
        <h1 class="text-center">Sign Up</h1>
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

           <div class="input-container">		
            <input 
            type="password" 
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
            />
            <label>Password Confirmation</label>
          </div>
          <div class="btn-container">
            <button class="btn-29" type="submit">Sign Up</button>
            <p>-- or --</p>
            <Link type="submit" class="btn-29" to="/login">Log In</Link>
          </div>
      </form>	

    </div>
  )
}

export default Signup