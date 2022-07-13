import React, { useState} from 'react'

function CreateTask(props) {
  const [tasks, setTasks] = useState('');



  function addTask() {
    const companyName = document.getElementById('company-name').value;
    if (!companyName) {
      return;
    }
    const taskTypeId = +(document.getElementById('task-type').value);
    const taskType = tasks.find((item) => item.id === taskTypeId);
    const task = {
      id: Date.now(),
      companyName: companyName,
      taskTypeId: taskTypeId,
      taskType: taskType
    };
    const updatedTask = [...tasks.getTasks(), task];
    tasks.setTasks(JSON.stringify(updatedTask));
    props.setTasks(updatedTask);

    document.getElementById('company-name').value = '';
    document.getElementById('task-type').value = '1';
  }

  return (
    <div className="create-task">
    <input id="company-name" type="text" placeholder="Task name" />
    <select id="task-type" className="select-css">
      {tasks.map((task) => {
        return (
        <React.Fragment key={task.id}><option value={task.id}>{task.name}</option></React.Fragment>);
      })}
    </select>
    <button className="add-task-button" onClick={addTask}>+ Add Task</button>
  </div>
  )
}

export default CreateTask