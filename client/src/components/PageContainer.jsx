import React, { Fragment } from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from "reactstrap";
import { Container } from "reactstrap";

export default function PageContainer(props) {
  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BookWorm</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/authors">Авторы</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/books">Книги</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container>{props.children}</Container>
    </Fragment>
  );
}
