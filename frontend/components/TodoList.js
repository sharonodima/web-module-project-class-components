import React from 'react'
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return this.props.todos
      .filter((todo) => !this.props.hideCompleted || !todo.completed)
      .map((todo, index) => (
        <Todo
          toggleCompleteTodo={this.props.toggleCompleteTodo}
          todo={todo}
          index={index}
        />
      ));
  }
}
