import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      todoName: ""
    };

    this.addTodo = this.addTodo.bind(this);
    this.updateTodoName = this.updateTodoName.bind(this);
  }

  addTodo(event) {
    event.preventDefault();

    this.props.addTodo(this.state.todoName);
    this.setState({
      todoName: ""
    });
  }

  updateTodoName(event) {
    this.setState({
      ...this.state,
      todoName: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input value={this.state.todoName} onChange={this.updateTodoName} />
        <button>Submit</button>
      </form>
    );
  }
}
