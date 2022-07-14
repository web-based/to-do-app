import React from 'react'

function CategoryCard({name}) {
    
  function handleClick(){
    
  }

  return (
    <div>
        <button onClick={handleClick}>{name}</button>
    </div>
  )
}

export default CategoryCard