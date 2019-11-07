import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from "framework7-react";

import { toggleTodo } from '../../../../store/actions/todos'

export default props => {
  const { todo } = props;
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  function handleToggleTodo(event) {
    
    const todosAtualizados = todos.map(todoAntigo => {
      if(todoAntigo.id === todo.id){
        return { ...todoAntigo, checked: !todoAntigo.checked }
      }
      return todoAntigo;
    })

    dispatch(toggleTodo(todosAtualizados))
  }

  return (
    <ListItem
      id={"todo-" + todo.id}
      className={todo.checked ? 'checked' : ''}
      title={todo.name}
      checked={todo.checked}
      checkbox
      onClick={handleToggleTodo}
    ></ListItem>
  );
};
