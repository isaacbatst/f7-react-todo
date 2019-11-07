import React from "react";
import { useSelector } from "react-redux";
import { List } from "framework7-react";

import Todo from "./Todo";

export default () => {
  const todos = useSelector(state => state.todos.todos);
  console.log(todos)
  return (
    <List>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </List>
  );
};
