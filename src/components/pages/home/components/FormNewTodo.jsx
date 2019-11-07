import React from "react";
import { List, ListInput, Block, Button } from "framework7-react";

export default () => {
  function handleSaveTodo(event) {
    event.preventDefault();
    console.log(event);
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
