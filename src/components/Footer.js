import React from "react";
import Nav from "react-bootstrap/Nav";

const footerStyle = {
    // choose bg and font colors from the navbar
    backgroundColor: "black",
    color: "white",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "50px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const gitHubStyle = {
    backgroundColor: "white",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
};

export default function Footer() {
    return (
        <div>
            <footer style={footerStyle}>
                <Nav.Item>
                    <Nav.Link
                        href="https://github.com/Mid-Heavy"
                        target="blank"
                    >
                        <div style={gitHubStyle}></div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        href="https://twitter.com/midheavy"
                        target="blank"
                    >
                        Twitter
                    </Nav.Link>
                </Nav.Item>
            </footer>
        </div>
    );
}
