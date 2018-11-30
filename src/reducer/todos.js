
const initialState = [
  { title: "title", contents: "contents", key: 1 }
];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { title: action.payload.title, contents: action.payload.content }];
    default:
      return state;
  }
}

export const addNewTodo = (title, content) => ({
  type: "ADD_TODO",
  payload: {
    content, title
  }
});
