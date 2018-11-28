
const initialState = {
      todos: [
          {title:'note 1' , contents:'notes abc'},
          {title:'note 2' , contents:'notes xyz'},
          {title:'note 3' , contents:'notes def'}
        ]
    };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}
