import React, { useState, useEffect } from 'react';

function Home({currentUser}) {

  const [tasks, setTasks] = useState({})
    useEffect (()=> {
      fetch("/tasks")
        .then(res => res.json())
        .then(data => {
          setTasks(data)
          // console.log(tasks)
        })
    },[])    
    

  return (
    <div>home</div>
  )
}

export default Home