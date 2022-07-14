import React from 'react';
import TodoList from './TodoList';

function Home({currentUser}) {


  return (
    <div>

      <TodoList currentUser={currentUser}/>
            
    </div>
  )
}

export default Home