import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="note">
        <b>{this.props.title}</b>
        <ul>
            <li>{this.props.contents}</li>
        </ul>
      </div>
    );
  }
}

export default Todo;
