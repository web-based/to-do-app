import React from 'react'
import TaskCard from './TaskCard';


function Todo({tasks}) {

  const renderTaskCards = tasks.map( (t) => (<TaskCard key={t.id} id={t.id} taskname={t.taskname}/>) )

  return(
      <div>
        {renderTaskCards}
      </div >
    )
}

export default Todo