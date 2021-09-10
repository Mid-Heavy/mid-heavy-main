import React from 'react'
import MHLogo from "../assets/logo.svg"
  
  export default function Navbar() {
      return (
            <div className="navbar-wrapper">
            <ul className="navbar">
            <li className="nav-logo-wrapper">
                <a href="/index.html"><img
                    src={MHLogo}
                    className="nav-logo"
                    width="93.75"
                    height="92.25"
                    alt="logo"
                />
                <div className="nav-mh">MidHeavy</div></a>
            </li>
            <li className="nav-link"><a href="/about.html">About</a></li>
            <li className="nav-link"><a href="/contact.html">Contact</a></li>

            </ul>
        </div>
      )
  }
  