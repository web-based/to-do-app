import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Navigation from './Navigation'
// import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function AuthenticatedApp({currentUser, setCurrentUser}) {
  //  const history = useHistory()

   const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      if (res.ok){
        setCurrentUser(null)
        // history.push('/')
      }
    })
   }

  return (
    <div>
      <Navigation
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        handleLogout={handleLogout}
        />
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route>
           <Signup />
          </Route> 
          <Redirect to= "/" />
        </Switch>
    </div>
  );
}

export default AuthenticatedApp