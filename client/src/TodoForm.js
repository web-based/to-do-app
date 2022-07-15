import React, { useState, useEffect, useRef } from 'react'
import { FcTodoList } from 'react-icons/fc'
import Todo from './Todo'


function TodoForm({currentUser}) {

  const [ categories, setCategories ] = useState([])
  const [ tasks, setTasks ] = useState([])
  const [ formData, setFormData ] = useState({
                                              category_id: 1,
                                              user_id: currentUser.id,
                                              taskname: ""
                                            })

  useEffect(()=> {
    inputRef.current.focus()
  })

  useEffect (()=> {
    fetch(`/users/:user_id/tasks`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      setTasks(data)
    })
  },[])

  useEffect (()=> {
    fetch(`/categories`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      setCategories(data)
    })
  },[])  
  
  const inputRef = useRef(null)

  const categoryOptions = categories.map( (c) => (<option className="d" key={c.id} id={c.id} value={c.id}> {c.name} </option>) )
  
  const handleChange = (e) => {
      let key=e.target.name
      let value= e.target.type==='select-one' ? parseInt(e.target.value): e.target.value
      setFormData((formData)=>({...formData, [key]:value}))
  }

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    fetch(`/tasks`,{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newTask => {
        // console.log(newTask)
        setTasks([...tasks, newTask])
        setFormData({
          category_id: formData.category_id,
          user_id: currentUser.id,
          taskname:""})
    })
  }

  const handleDelete = (id) => {
    fetch(`/tasks/${id}`,{
      method: 'DELETE',
    })
    console.log(id)
    const updatedTasks = tasks.filter((t) => t.id !== id)
    setTasks(updatedTasks)

  }



  return (
    <div className="todo-app">

      <h1> What's your plan for Today? </h1>      
      <FcTodoList className="todo-list-icon"/>

      <form className="todo-form" onSubmit={handleTaskSubmit}>
          <select className="todo-button" id="dropdown" name="category_id" onChange={handleChange}> {categoryOptions} </select>
          <input 
              type="text" 
              placeholder="Add a todo" 
              value={formData.taskname} 
              name='taskname'
              className='todo-input'
              onChange={handleChange}
              ref={inputRef}
          />
         <button className='todo-button'> Add todo </button>         
      </form>         
          
      <Todo tasks={tasks} handleDelete={handleDelete}/>
     
    </div>
  )
}

export default TodoForm