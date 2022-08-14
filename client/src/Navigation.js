import React from 'react'
import logo from './images/todo_logo.png'



// Logout funtion will remove a user information from state
function Navigation({setCurrentUser, currentUser,handleLogout}) {

  // const [navbarOpen, setNavbarOpen] = useState(false)


  return (
    <nav className="flex items-center justify-between text-2xl border-black border-b-2 pb-2 mb-4">
      <div className="flex flex-col">
        <div className="user-nav">
          <img alt="to-do logo" src={logo} 
          className="user-logo"/>
          <button
            className="todo-button logout"
            onClick={handleLogout}
          >
            {" "}
            <span id="circle"></span> Log Out
          </button>
        </div>

        <h1>Welcome! {currentUser.username}</h1>
      </div>
    </nav>
  );
}

export default Navigation