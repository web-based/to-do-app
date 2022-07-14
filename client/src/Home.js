import React, { useState, useEffect, useRef } from 'react';
import TaskCard from './TaskCard';
import CategoryCard from './CategoryCard';
import TodoList from './TodoList';

function Home({currentUser}) {

  const [ categories, setCategories ] = useState([])
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

  useEffect (()=> {
    fetch(`/categories`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        setCategories(()=>data)
      })
  },[])    

  const renderCategoryCards = categories.map( (t) => (<CategoryCard key={t.id} id={t.id} name={t.name}/>) )
  const renderTaskCards = tasks.map( (t) => (<TaskCard key={t.id} id={t.id} taskname={t.taskname}/>) )
    
  return (
    <div>
      



      <TodoList/>
      <div>{renderCategoryCards}</div>
      <div>{renderTaskCards}</div>
      
    </div>
  )
}

export default Home