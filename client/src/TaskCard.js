import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function TaskCard({ id, taskname, c, handleDelete, handleUpdate }) {
   
  return (
        
    <div className="todo-row">

      <p>{taskname}</p>
      <div className="buttons-todo">
        {c.name}      
        <RiCloseCircleLine 
          onClick={()=>handleDelete(id)}
          className='delete-icon'/>
        <TiEdit 
          onClick={() =>handleUpdate(id, taskname, c.id)}
          className='edit-icon'/>        
      </div>

    </div>
  )
}

export default TaskCard