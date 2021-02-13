import React from 'react';

function TodoItem (props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "black",
    textDecoration: "line-through"
}
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hour}:${minutes}`

  return (
      <div className="checkbox"> 
        <label htmlFor={props.item.key} style={props.item.completed ? completedStyle: null}> {props.item.completed ? `${props.item.text} ${time}` : props.item.text}
        <input 
          id={props.item.key}
          type="checkbox" 
          className="checkboxInput" 
          onChange={() => props.handleChange(props.item.id)}
          checked={props.item.completed} 
          style={{display: 'none'}}
        />
        </label>
      </div>
  )
}



export default TodoItem;