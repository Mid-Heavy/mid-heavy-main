import React from "react";
import Nav from "react-bootstrap/Nav";
import { RiTwitterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";

const footerStyle = {
    // choose bg and font colors from the navbar
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    color: "white",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "40px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const gitHubStyle = {
    color: "#b6b6b6",
    height: "15px",
    width: "15px",
};

const twitterStyle = {
    color: "#b6b6b6",
    height: "15px",
    width: "15px",
};

const navLinkStyle = {
    // height: "50px",
    width: "20px",
    textAlign: "center",
};

export default function Footer() {
    return (
        <div>
            <footer style={footerStyle}>
                <Nav.Link
                    href="https://github.com/Mid-Heavy"
                    target="blank"
                    style={navLinkStyle}
                >
                    <RiGithubLine style={gitHubStyle} />
                </Nav.Link>

                <Nav.Link
                    href="https://twitter.com/midheavy"
                    target="blank"
                    style={navLinkStyle}
                >
                    <RiTwitterLine style={twitterStyle} />
                </Nav.Link>
            </footer>
        </div>
    );
}
