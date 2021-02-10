import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import Header from './components/Header'
import todosData from './todoData'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: todosData
    }
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>);

    return (
        <div> 
          <Header/>
          {todoItems};
        </div>
    )
  }
}

export default App;
