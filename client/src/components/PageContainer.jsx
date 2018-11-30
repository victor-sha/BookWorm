import React, { Fragment } from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";

export default function PageContainer(props) {
  return (
    <Fragment>
      <Navbar color="grey" expand="md">
        <NavbarBrand href="/">BookWorm</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <Col>
            <Row>
              <NavItem>
                <NavLink
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
            </Row>
          </Col>
          <NavItem className="ml-2 float-right">
            <a
              href="#"
              onClick={() => props.handleLogout()}
              style={{ color: "grey" }}
              // className="btn btn-light"
            >
              <i className="fa fa-sign-out" />
              Выйти
            </a>
            {/* <NavLink
              style={{ color: "grey" }}
              activeStyle={{ color: "blue" }}
              to="/logout"
              >
              Выйти
            </NavLink> */}
          </NavItem>
        </Nav>
      </Navbar>
      <Container>{props.children}</Container>
    </Fragment>
  );
}
