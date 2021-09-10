import React, { Component } from "react";
import MHLogo from "../assets/logo.svg";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <Nav className="navbar">
          <Nav.Item className="nav-logo-wrapper">
            <Nav.Link href="/home" as={Link} to="/home">
              <img
                src={MHLogo}
                className="nav-logo"
                width="93.75"
                height="92.25"
                alt="logo"
              />
              <div className="nav-mh">MidHeavy</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-link">
            <Nav.Link href="/about" as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-link">
            <Nav.Link href="/contact" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
