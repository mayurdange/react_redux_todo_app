import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoList from './todo/TodoList.js';
import  { createStore } from 'redux';
import reducers from './reducer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './index.css';

class App extends Component {
  render() {
    library.add(faPlusSquare, faTrashAlt)
    const store = createStore(reducers,[],window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return ( 
      <Provider store={store}>
        <TodoList />
      </Provider>
      );
  }
}

export default App;
