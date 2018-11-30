import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button,Modal } from 'react-bootstrap';
import { addNewTodo } from '../reducer/todos.js';
import { connect } from "react-redux";

class AddTodo extends Component {
     constructor(props) {
         super(props);
         this.state ={isPopupVisible: false, title: '', contents: ''}
     }
    togglePopup = ()=>{
        this.setState((state) => state.isPopupVisible = !state.isPopupVisible )
    };
    
    submitTodo = () => {
        this.props.addNewTodo(this.state.title,this.state.content); 
        this.togglePopup() 
    } 
    titleChange = (e) =>{
        this.setState({title : e.target.value} )    
    }
    contentChange = (e) =>{
        this.setState({content : e.target.value} )    
    }
    render(){
        let modal = this.state.isPopupVisible ? <div className="static-modal">
                      <Modal.Dialog>
                            <form>
                                <input onBlur={this.titleChange}  placeholder="Title" type="text" class="form-control" />
                                <textarea onBlur={this.contentChange} placeholder="todo contents" class="form-control"></textarea>
                            </form>
                            <Modal.Footer>
                            <Button onClick={this.togglePopup}>Close</Button>
                            <Button bsStyle="primary" onClick={this.submitTodo.bind(this)} >Save todo</Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </div>:<div/>;
        return(
            <div><Button className="btn-info" onClick={this.togglePopup} ><FontAwesomeIcon icon="plus-square"/></Button>
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