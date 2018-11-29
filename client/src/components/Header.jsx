import React, { Fragment } from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function PageContainer(props) {
  return (
    <Fragment>
      <Navbar color="grey" expand="md">
        <NavbarBrand href="/">BookWorm</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink
              // className="nav-item"
              // activeClassName="active"
              style={{ color: "grey" }}
              activeStyle={{ color: "blue" }}
              to="/authors"
            >
              Авторы
            </NavLink>
          </NavItem>
          <NavItem className="ml-2">
            <NavLink
              style={{ color: "grey" }}
              activeStyle={{ color: "blue" }}
              to="/books"
            >
              Книги
            </NavLink>
          </NavItem>
          <NavItem className="ml-2">
            <NavLink
              style={{ color: "grey" }}
              activeStyle={{ color: "blue" }}
              to="/logout"
            >
              Выйти
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  );
}
