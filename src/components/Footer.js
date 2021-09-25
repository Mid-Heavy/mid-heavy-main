import React from "react";
import Nav from "react-bootstrap/Nav";
import { RiTwitterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";

const footerStyle = {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "35px",
    zIndex: "1",
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

export default function Footer() {
    return (
        <Nav className="justify-content-center" style={footerStyle}>
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
        </Nav>
    );
}
