
const initialState = {
      todos: [
          {title:'note 1' , contents:'notes abc'},
          {title:'note 2' , contents:'notes xyz'},
          {title:'note 3' , contents:'notes def'}
        ]
    };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD_TODO":
      return {...state,todos : state.todos.append({title:'note 1' , contents:'notes abc'})};
    default:
      return state;
  }
}

export var addNewTodo1 = (title,contents)=>{
  console.error(`NOT IMPLEMENTED! should add todo ${title} ${contents}`);
}

export const addNewTodo = content => ({
  type: "ADD_TODO",
  payload: {
    content
  }
});
