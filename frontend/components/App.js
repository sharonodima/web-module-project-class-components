import React from 'react'
import Form from "./Form";
import TodoList from "./TodoList";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      hideCompleted: false
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleteTodo = this.toggleCompleteTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  addTodo(todoName) {
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        {
          title: todoName,
          completed: false
        }
      ]
    });
  }

  toggleCompleteTodo(toggledIndex) {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo, index) =>
        index === toggledIndex
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    });
  }

  toggleCompleted() {
    this.setState({
      ...this.state,
      hideCompleted: !this.state.hideCompleted
    });
  }

  render() {
    return (
      <div>
        
        <h2>Todos:</h2>
        <TodoList
          todos={this.state.todos}
          hideCompleted={this.state.hideCompleted}
          toggleCompleteTodo={this.toggleCompleteTodo}
        />
        <Form addTodo={this.addTodo} />
        <button onClick={this.toggleCompleted}>Hide Completed</button>
      </div>
    );
  }
}
