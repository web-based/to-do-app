import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function TaskCard({ id, taskname, c, handleDelete }) {
   
  return (
        
    <div className="todo-row">
      <p>{taskname}</p>
     
      <div className="buttons-todo">
         

      {c}

      
        <RiCloseCircleLine 
          onClick={()=>handleDelete(id)}
          className='delete-icon'/>
        <TiEdit 
          onClick={() => ("")}
          className='edit-icon'/>
      </div>   
    </div>

  )
}

export default TaskCard