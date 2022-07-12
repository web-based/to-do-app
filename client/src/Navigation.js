import React , { useState} from 'react'


// Logout funtion will remove a user information from state
function Navigation({setCurrentUser, currentUser,handleLogout}) {

  const [navbarOpen, setNavbarOpen] = useState(false)


  return (
    <nav className="flex items-center justify-between text-2xl border-black border-b-2 pb-2 mb-4">
      <div className="">
      </div>
      <div className="flex flex-col">
        <button className="text-right" onClick={() => setNavbarOpen(!navbarOpen)}>
        </button>
        <div className="relative w-52">
          <div className={`flex flex-col w-52 bg-white shadow overflow-hidden absolute space-y-3 text-lg ${navbarOpen ? 'p-4 max-h-screen' : 'p-0 max-h-0'}`}>
            
            <hr/>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation