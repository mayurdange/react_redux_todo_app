import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button,Modal,FormControl } from 'react-bootstrap';
import { addNewTodo } from '../reducer/todos.js';
import { connect } from "react-redux";

class AddTodo extends Component {
     constructor(props) {
         super(props);
         this.state ={isPopupVisible: false}
     }
    togglePopup = ()=>{
        this.setState((state) => state.isPopupVisible = !state.isPopupVisible )

    };

    render(){
        let modal = this.state.isPopupVisible ? <div className="static-modal">
                      <Modal.Dialog><form>
                                  <FormControl type="text" placeholder="Title"  />
                                <FormControl componentClass="textarea" placeholder="todo contents" />
                            </form>
                            <Modal.Footer>
                            <Button onClick={this.togglePopup}>Close</Button>
                            <Button bsStyle="primary" onClick={()=> { this.props.addNewTodo(this,"title","contents"); this.togglePopup() } } >Save todo</Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </div>:<div/>;
        return(
            <div><Button onClick={this.togglePopup} ><FontAwesomeIcon icon="plus-square"/></Button>
            {modal}
            </div>    
        )
    }
}
const mapStateToProps = (state ) => {
  return {
    state
  };
};

const mapDispatchToProps = { addNewTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)