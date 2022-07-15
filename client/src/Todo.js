import React from 'react'
import TaskCard from './TaskCard';


function Todo({tasks, handleDelete, handleUpdate}) {

  const renderTaskCards = tasks.map( (t) => (
                                              <TaskCard 
                                                    key={t.id} id={t.id} taskname={t.taskname} c={t.category}
                                                    handleDelete={handleDelete} handleUpdate={handleUpdate}
                                              />))

  return(
      <div>
        {renderTaskCards}
      </div >
    )
}

export default Todo