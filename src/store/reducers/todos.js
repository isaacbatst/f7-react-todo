const INITIAL_STATE = {
  todos: [
    { id: 1, name: "Fazer café", checked: false },
    { id: 2, name: "Fazer chá", checked: true },
    { id: 3, name: "Fazer café", checked: false }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return { ...state, todos: [ ...state.todos, action.payload.todo ] };
    case 'TOGGLE_TODO':
      return { ...state, todos: action.payload.todos }
    default: 
      return state;
  }
}