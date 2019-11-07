import React from "react";
import { List, ListInput, Block, Button } from "framework7-react";

import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../../../store/actions/todos';

export default () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.todos);

  function handleSaveTodo(event) {
    event.preventDefault();
    
    const input = document.querySelector('input[name="todo"]');
    const inputValue = input.value;

    dispatch(addTodo({
      id: todos.length + 1,
      checked: false,
      name: inputValue
    }));

    input.value = '';
  }
  return (
    <List form onSubmit={handleSaveTodo}>
      <ListInput
        label="Novo Todo"
        floatingLabel
        type="text"
        name="todo"
        required
        validate
      ></ListInput>
      <Block>
        <Button fill type="submit">
          Salvar
        </Button>
      </Block>
    </List>
  );
};
