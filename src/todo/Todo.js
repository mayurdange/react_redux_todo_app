import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Todo extends Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6">
        <div className="panel panel-default">
          <div style={{backgroundColor: "#FAA", padding:"5px 5px 5px 5px"}}>
            <b>{this.props.title}
            <button style={{float: "right", "backgroundColor": "#FAA", border:"none", display: "inline-block"}} onClick={this.togglePopup} >
              <FontAwesomeIcon icon="trash-alt"/>
            </button></b>
          </div>
          <div className="panel-body" style={{backgroundColor: "#FCC", padding:"1px 1px 1px 1px"}} >
            {this.props.contents}
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
