import React from 'react';
import TodoItem from './components/TodoItem'
import Header from './components/Header'
import todosData from './todoData'

function App () {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>);

  return (
      <div> 
        <Header/>
        {todoItems};
      </div>
  )
}

export default App;
