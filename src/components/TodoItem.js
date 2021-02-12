import React from 'react';

function TodoItem (props) {
  return (
      <div className="checkbox"> 
        <input 
        type="checkbox" 
        className="checkboxInput" 
        id="checkbox1" 
        name="checkbox1" 
        onChange={() => props.handleChange(props.item.id)}
        checked={props.item.completed} />
        <label htmlFor="checkbox1"> {props.item.text} </label> 
      </div>
  )
}



export default TodoItem;