import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import Header from './components/Header'
import todosData from './todoData'

class App extends Component {
  constructor() {
      super()
      this.state = {
          todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
    //   this.handleNewItem = this.handleNewItem.bind(this)
  }
  
  handleChange = (id) => {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
              }
              return todo
          })
          return {
              todos: updatedTodos
          }
      })
  }

//   handleNewItem(event){
//     this.setState(prevState => {
//         const newItemTodos = prevState.todos.map(todo => {
//             if (todo.name === event.name){
//                 return todo
//             } else {
//                 return {
//                     ...todo, 
//                     [event.target.name]: newItemTodos
//                 }
//             }
//         })
//         return {
//             todos: newItemTodos
//         }
//     })
//   }
  
  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    //   const timestamp = new Date().getMilliseconds;
      return (
          <div className="todo-list">
              <Header/>
              {/* <input 
                name="newItem"
                key={timestamp}
                onChange={this.handleNewItem}
                type="text"
                id="newItemInput"
                value={this.state.name}
                /> */}
              {todoItems}
          </div>
      )    
  }
}

export default App
