import React from 'react'

function TaskCard({ id, taskname }) {
   
  return (
    <div>
        <h2>{taskname}
        <button>edit</button>
        <button>x</button></h2>
    </div>
  )
}

export default TaskCard