import React from 'react';

function TodoItem (props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "black",
    textDecoration: "line-through"
}
  
  return (
      <div className="checkbox"> 
        <input 
        type="checkbox" 
        className="checkboxInput" 
        onChange={() => props.handleChange(props.item.id)}
        checked={props.item.completed} />
        <p style={props.item.completed ? completedStyle: null}> {props.item.text} </p> 
      </div>
  )
}



export default TodoItem;