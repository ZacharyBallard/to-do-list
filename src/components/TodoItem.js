import React from 'react';

function TodoItem () {
  return (
      <div className="checkbox"> 
        <input type="checkbox" className="checkboxInput" id="checkbox1" name="checkbox1"/>
        <label htmlFor="checkbox1"> checkbox1</label> 
      </div>
  )
}

export default TodoItem;