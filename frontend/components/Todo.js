import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.toggleCompleteTodo(this.props.index);
        }}
      >
        {this.props.todo.title}
        {this.props.todo.completed && "✓"}
      </div>
    );
  }
}
