import React from 'react'


// Logout funtion will remove a user information from state
function Navigation({onLogout}) {

  function handleLogout(){
    fetch('/logout',{
      method: "DELETE",
    }).then(() => onLogout())
  }

  return (
    <div>
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
    </div>
  );
}

export default Navigation