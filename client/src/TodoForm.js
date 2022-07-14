import React, { useState, useEffect, useRef } from 'react'


function TodoForm({currentUser}) {

  const [ categories, setCategories ] = useState([])
  const [ formData, setFormData ] = useState({
    category_id: 1,
    user_id: currentUser.id,
    taskname: ""
  })

  const inputRef = useRef(null)

  useEffect(()=> {
    inputRef.current.focus()
  })

  const handleChange = e => {
      let key=e.target.name
      let value= e.target.type==='select-one' ? parseInt(e.target.value): e.target.value
      setFormData((formData)=>({...formData, [key]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    fetch(`/tasks`,{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => console.log(data))

    }



  useEffect (()=> {
    fetch(`/categories`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        setCategories(()=>data)
      })
  },[])  

  const categoryOptions = categories.map( (c) => (<option key={c.id} id={c.id} value={c.id}> {c.name} </option>) )




  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
      <select name="category_id" onChange={handleChange}>
       {categoryOptions}
      </select>
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
      
     
    </div>
  )
}

export default TodoForm