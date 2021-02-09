import React from 'react';
import TodoItem from './components/TodoItem'
import Header from './components/Header'

function App () {
  return (
      <div> 
        <Header/>
        <TodoItem/> 
        <TodoItem/> 
        <TodoItem/> 
        <TodoItem/> 
      </div>
  )
}

export default App;
