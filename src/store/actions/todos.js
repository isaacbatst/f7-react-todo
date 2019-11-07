export function addTodo(todo){
  return {
    type: 'ADD_TODO',
    payload: {
      todo
    }
  }
}

export function toggleTodo(todos){
  return {
    type: 'TOGGLE_TODO',
    payload: {
      todos
    }
  }
}