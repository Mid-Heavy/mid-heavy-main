import React from "react";
import Nav from "react-bootstrap/Nav";
import { RiTwitterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const navbarStyle = {
  fontFamily: "Rajdhani",
  fontSize: "16px",
  backgroundColor: "rgba(26, 26, 26, 0.7)",
  position: "sticky",
  top: "0",
  width: "100%",
  height: "35px",
  zIndex: "100",
};

const navLinksWrapper = {
  display: "flex",
  flexDirection: "row",
  marginLeft: "auto",
  width: "120px",
};

const navLinksWrapperInvisible = {
  display: "flex",
  flexDirection: "row",
  marginRight: "auto",
  width: "120px",
  visibility: "hidden",
};

const iconStyle = {
  color: "#b6b6b6",
  height: "15px",
  width: "15px",
};

const navLinkStyle = {
  height: "40px",
  width: "40px",
  padding: "0px",
  margin: "0px",
  lineHeight: "40px",
};

const navLinkTextStyle = {
  color: "#b6b6b6",
  height: "40px",
  width: "auto",
  paddingLeft: "6px",
  paddingRight: "6px",
  paddingTop: "0px",
  paddingBottom: "0px",
  margin: "0px",
  lineHeight: "40px",
};

export default function Navbar() {
  return (
    <Nav className="justify-content-center" style={navbarStyle}>
      <div style={navLinksWrapperInvisible}></div>

      <Nav.Link href="/home" as={Link} to="/home" style={navLinkTextStyle}>
        MidHeavy.Tech
      </Nav.Link>

      <p style={navLinkTextStyle}> | </p>

      <Nav.Link href="" style={navLinkTextStyle}>
        Blog
      </Nav.Link>

      <Nav.Link href="/about" as={Link} to="/about" style={navLinkTextStyle}>
        Team
      </Nav.Link>

      <Nav.Link
        href="/contact"
        as={Link}
        to="/contact"
        style={navLinkTextStyle}
      >
        Contact
      </Nav.Link>

      <div style={navLinksWrapper}>
        <Nav.Link
          href="https://github.com/Mid-Heavy"
          target="blank"
          style={navLinkStyle}
        >
          <RiGithubLine style={iconStyle} />
        </Nav.Link>

        <Nav.Link
          href="https://twitter.com/midheavy"
          target="blank"
          style={navLinkStyle}
        >
          <RiTwitterLine style={iconStyle} />
        </Nav.Link>

        <Nav.Link
          href="https://discord.gg/e9mFvZ3W"
          target="blank"
          style={navLinkStyle}
        >
          <RiDiscordLine style={iconStyle} />
        </Nav.Link>
      </div>
    </Nav>
  );
}
