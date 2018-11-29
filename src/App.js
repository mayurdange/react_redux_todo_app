import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoList from './todo/TodoList.js';
import  { createStore } from 'redux';
import reducers from './reducer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render() {
    library.add(faPlusSquare)
    const store = createStore(reducers);
    return ( 
      <Provider store={store}>
        <TodoList />
      </Provider>
      );
  }
}

export default App;
