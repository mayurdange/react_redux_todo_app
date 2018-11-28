import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddTodo extends Component {
    render(){
        return(
            <div>
                <input />
                <button> <FontAwesomeIcon icon="trash" /> </button>
            </div>    
        )
    }
}

export default AddTodo