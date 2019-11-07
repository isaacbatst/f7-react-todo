import React from "react";
import {
  f7,
  Page,
  List,
  ListItem,
  ListInput,
  Block,
  Button
} from "framework7-react";

import NavbarHome from "./components/NavbarHome";
import FormNewTodo from "./components/FormNewTodo";

export default () => {
  const todos = [
    { id: 1, name: "Fazer café", checked: false },
    { id: 2, name: "Fazer café", checked: true },
    { id: 3, name: "Fazer café", checked: false }
  ];

  return (
    <Page name="home">
      <NavbarHome />
      <FormNewTodo />

      <List>
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            title={todo.name}
            defaultChecked={todo.checked}
            checkbox
          ></ListItem>
        ))}
      </List>
    </Page>
  );
};
