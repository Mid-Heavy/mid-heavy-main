import React, { Component } from "react";
import MHLogo from "../assets/logo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
  backgroundColor: "rgba(26, 26, 26, 0.7)",
};

export default class MHNavbar extends Component {
  render() {
    return (
      <>
        <Navbar className="p-0" sticky="top" style={style} variant="dark">
          <Nav className="mr-auto p-0">
            <Nav.Link href="/home" as={Link} to="/home">
              <img
                src={MHLogo}
                className="nav-logo m-auto"
                width="93.75"
                height="92.25"
                alt="logo"
              />

              <div className="nav-mh m-auto">MidHeavy</div>
            </Nav.Link>

            <Nav.Link href="/about" as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link href="/contact" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
