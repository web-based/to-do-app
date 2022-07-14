import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TaskCard from './TaskCard';


function Todo({todos, completeTodo, removeTodo, updateTodo}) {

  const [ tasks, setTasks ] = useState([])

  useEffect (()=> {
    fetch(`/users/:user_id/tasks`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      setTasks(()=>data)
    })
  },[])  
  
  const renderTaskCards = tasks.map( (t) => (<TaskCard key={t.id} id={t.id} taskname={t.taskname}/>) )












const [edit, setEdit] = useState({
  id: null,
  value: '',
});

const submitUpdate = value => {
  updateTodo(edit.id, value)
  setEdit({
    id: null,
    value: ''
  })
}
if (edit.id){
  return <TodoForm edit={edit} onSubmit={submitUpdate} />
}


return(
    <div>{renderTaskCards}  

     </div >
  )
}

export default Todo