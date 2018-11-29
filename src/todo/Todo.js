import React, { Component } from 'react';
import { Jumbotron, Panel } from 'react-bootstrap';

class Todo extends Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6">
      <Panel>
        <Panel.Heading>{this.props.title}</Panel.Heading>
        <Panel.Body>{this.props.contents}</Panel.Body>
      </Panel>
      </div>
    );
  }
}

export default Todo;
