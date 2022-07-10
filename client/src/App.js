import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login';
// import Navigation from './Navigation';


function App() {

  const [user,setUser] = useState(null);

  useEffect (()=> {
    fetch("/me").then((response) => {
      if (response.ok){
        response.json().then((user) => setUser(user));
      }
    });
  },[]);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  } else {
  } return (
    <Router>
      <div className="App">
        {/* <Navigation /> */} 
        <header>
          <Switch>

            <Route exact path="/">
              <Login onLogin={setUser}  />
            </Route>

          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
