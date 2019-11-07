import React from "react";
import { useSelector } from 'react-redux';
import { List, ListItem } from "framework7-react";

export default () => {

  const todos = useSelector(state => state.todos.todos);

  return (
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
  );
};
