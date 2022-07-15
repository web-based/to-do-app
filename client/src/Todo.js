import React from 'react'
import TaskCard from './TaskCard';


function Todo({tasks, handleDelete}) {

  const renderTaskCards = tasks.map( (t) => (
                          <TaskCard key={t.id} id={t.id} taskname={t.taskname} c={t.category.name} handleDelete={handleDelete}/>) )

  return(
      <div>
        {renderTaskCards}
      </div >
    )
}

export default Todo