import React, { useState, useEffect } from 'react';
import './App.css';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { BrowserRouter as Router } from 'react-router-dom'
// import Login from './Login';
// import Navigation from './Navigation';
// import Home from './Home';


function App() {

  const [currentUser,setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect (()=> {
    fetch("/me",{
      credentials: 'include'
    })
    .then(res => {
      if (res.ok){
        res.json().then((user) => {
          setCurrentUser(user)
          setAuthChecked(true)
        })
      } else {
        setAuthChecked(true)
      }
    })
  },[])

  if (!authChecked) { return <div></div> }
    return (    
    <Router>
     
        {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser} />
        )
      }     
    </Router>
  )
}

export default App;
