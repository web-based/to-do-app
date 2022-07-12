import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Navigation from './Navigation'

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
            {/*  */}
          </Route>
          <Route>
            {/*  */}
          </Route> 
          <Redirect to= "/" />
        </Switch>
    </div>
  );
}

export default AuthenticatedApp