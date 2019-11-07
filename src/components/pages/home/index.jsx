import React from "react";
import { Page } from "framework7-react";

import NavbarHome from "./components/NavbarHome";
import FormNewTodo from "./components/FormNewTodo";
import ListTodo from "./components/ListTodo";

export default () => {
  return (
    <Page name="home">
      <NavbarHome />
      <FormNewTodo />
      <ListTodo />
    </Page>
  );
};
