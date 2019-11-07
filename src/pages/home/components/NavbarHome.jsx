import React from "react";

import {
  Navbar,
  NavLeft,
  NavTitle,
  Link
} from 'framework7-react'

export default () => (
  <Navbar sliding={false}>
    <NavLeft>
      <Link
        iconIos="f7:menu"
        iconAurora="f7:menu"
        iconMd="material:menu"
        panelOpen="left"
      />
    </NavLeft>
    <NavTitle sliding>f7-react-todos</NavTitle>
  </Navbar>
);
