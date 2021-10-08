import React from "react";
import { Card } from "react-bootstrap";

const tileStyle = {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    fontFamily: "Rajdhani",
    marginTop: "50px",
    maxWidth: "1000px",
    zIndex: "1",
};

const tileTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
};

const tileBodyStyle = {
    color: "#b6b6b6",
};

export default function ProfileTile() {
    return (
        <div>
            <Card text="success" style={tileStyle}>
                <Card.Body>
                    <Card.Title style={tileTitleStyle}>TITLE</Card.Title>
                    <br />
                    <Card.Text style={tileBodyStyle}>Body</Card.Text>
                    <br />
                </Card.Body>
            </Card>
        </div>
    );
}
