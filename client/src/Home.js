import React, { useState, useEffect } from 'react';
import TaskListCard from './TaskListCard';

function Home({currentUser}) {

  const [ taskLists, setTaskLists ] = useState([])
    useEffect (()=> {
      fetch(`/users/:user_id/task_lists`, {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(data => {
          setTaskLists(data)
        })
    },[])    
    
  const taskListsCards = taskLists.map( (t) => (<TaskListCard key={t.id} id={t.id} my_list={t.my_list} tasks={t.tasks}/>) )
    
  return (
    <div>{taskListsCards}</div>
  )
}

export default Home