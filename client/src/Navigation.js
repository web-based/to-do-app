import React from 'react'


// Logout funtion will remove a user information from state
function Navigation({setCurrentUser, currentUser,handleLogout}) {

  // const [navbarOpen, setNavbarOpen] = useState(false)


  return (
    <nav className="flex items-center justify-between text-2xl border-black border-b-2 pb-2 mb-4">
      <div className="flex flex-col">
        <h1>To Do App</h1>
        <h1>Welcome! {currentUser.username}</h1>
        <button onClick={handleLogout}>Log Out</button>
        {/* <button className="text-right" onClick={() => setNavbarOpen(!navbarOpen)}></button>
        <div className="relative w-52">
          <div className={`flex flex-col w-52 bg-white shadow overflow-hidden absolute space-y-3 text-lg ${navbarOpen ? 'p-4 max-h-screen' : 'p-0 max-h-0'}`}>
            <hr/>
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Navigation