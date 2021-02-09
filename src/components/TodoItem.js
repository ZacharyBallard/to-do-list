import React from 'react';

function TodoItem (props) {
  return (
      <div className="checkbox"> 
        <input type="checkbox" className="checkboxInput" id="checkbox1" name="checkbox1" checked={props.item.completed}/>
        <label htmlFor="checkbox1"> {props.item.text} </label> 
      </div>
  )
}

export default TodoItem;