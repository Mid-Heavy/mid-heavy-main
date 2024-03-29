import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { RiTwitterLine } from 'react-icons/ri'
import { RiGithubLine } from 'react-icons/ri'
import { RiDiscordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const navbarStyle = {
  fontFamily: 'Rajdhani',
  fontSize: '16px',
  backgroundColor: 'rgba(26, 26, 26, 0.7)',
  position: 'sticky',
  top: '0',
  width: '100%',
  zIndex: '100'
}

const navLinksWrapper = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 'auto',
  width: '120px'
}

const navLinksWrapperInvisible = {
  display: 'flex',
  flexDirection: 'row',
  visibility: 'hidden'
}

const iconStyle = {
  color: '#b6b6b6'
}

const navLinkStyle = {
  height: '35px',
  width: '40px',
  padding: '0px',
  margin: '0px',
  lineHeight: '40px'
}

const navLinkTextStyle = {
  color: '#b6b6b6',
  height: '35px',
  width: 'auto',
  paddingLeft: '6px',
  paddingRight: '6px',
  paddingTop: '0px',
  paddingBottom: '0px',
  margin: '0px',
  lineHeight: '35px'
}

export default function Navbar() {
  return (
    <Nav className="justify-content-center navbarStyle" style={navbarStyle}>
      <div
        className="navLinksWrapperInvisible"
        style={navLinksWrapperInvisible}
      ></div>

      <Nav.Link
        href="/home"
        as={Link}
        to="/home"
        style={navLinkTextStyle}
        className="navLinkTextStyle"
      >
        MidHeavy.Tech
      </Nav.Link>

      <p style={navLinkTextStyle} className="navLinkTextStyle">
        |
      </p>

      <Nav.Link
        href="https://log.midheavy.tech/"
        style={navLinkTextStyle}
        className="navLinkTextStyle"
      >
        Blog
      </Nav.Link>

      <Nav.Link
        href="/team"
        as={Link}
        to="/team"
        style={navLinkTextStyle}
        className="navLinkTextStyle"
      >
        Team
      </Nav.Link>

      {/* <Nav.Link
        href="/contact"
        as={Link}
        to="/contact"
        style={navLinkTextStyle}
        className="navLinkTextStyle"
      >
        Contact
      </Nav.Link> */}

      <div style={navLinksWrapper}>
        <Nav.Link
          href="https://github.com/Mid-Heavy"
          target="blank"
          style={navLinkStyle}
        >
          <RiGithubLine className="navIconStyle" style={iconStyle} />
        </Nav.Link>

        <Nav.Link
          href="https://twitter.com/midheavy"
          target="blank"
          style={navLinkStyle}
        >
          <RiTwitterLine className="navIconStyle" style={iconStyle} />
        </Nav.Link>

        <Nav.Link
          href="https://discord.gg/e9mFvZ3W"
          target="blank"
          style={navLinkStyle}
        >
          <RiDiscordLine className="navIconStyle" style={iconStyle} />
        </Nav.Link>
      </div>
    </Nav>
  )
}
