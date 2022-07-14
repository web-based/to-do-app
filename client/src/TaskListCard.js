import React from 'react'

function TaskListCard({ id, my_list, tasks }) {
    const items = tasks.map( (task) => (<li key={task.id} id={task.id}>{task.taskname}<button>edit</button><button>x</button></li> ))
  return (
    <div>
        <h2>{my_list}<button>edit</button><button>x</button></h2>
        <ul>{items}</ul>
    </div>
  )
}

export default TaskListCard