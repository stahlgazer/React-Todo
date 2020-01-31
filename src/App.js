import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  // Constructor with state
  constructor() {
    super();
    // initialize the state object
    this.state = {
      todoList: todos,
    };

    // this.toggleItem = this.toggleItem.bind(this)
  }
  // Class methods to update state
  // arrow function implicity bind the "this" keyword to the function
  toggleItem = id => {
    // find the item we clicked on
    // toggle the purchased field
    // update state with the new todo data
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    // update todoList
    this.setState({
      todoList: newTodoList
    });
  };

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
        todoText: e.target.value
    });
};

  handleSubmit = e => {
    e.preventDefault();
    this.addItem(this.state.todoText);
    e.target.reset();
};

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
    console.log(this.state.todoList)
  };

  clearCompleted = () => {
    // const filteredList = this.state.todoList.filter(this.state.todoList.completed === false);
    this.setState({
      todoList: this.state.todoList.filter(element => (element.completed === false))
    });
  };

  // render - comparable to a function component's return
  // render is in charge of ... rendering JSX!
  render() {
    console.log('rendering...');
    // you can do any JS stuff above the return

    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} />
        </div>
        <TodoList
          todos={this.state.todoList}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
