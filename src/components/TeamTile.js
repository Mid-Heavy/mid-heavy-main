import React from "react";
import { Card } from "react-bootstrap";

const bodyStyle = {
    margin: "0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "60px auto auto",
    zIndex: "3",
    paddingBottom: "5px",
};

const teamTileTitleStyle = {
    fontWeight: "bold",
    letterSpacing: "0.25em",
    gridColumnStart: "1",
    gridColumnEnd: "span 3",
    gridRowStart: "1",
    gridRowEnd: "span 1",
    textAlign: "left",
    alignSelf: "start",
    whiteSpace: "nowrap",
};

const teamTileBioStyle = {
    gridColumnStart: "1",
    gridColumnEnd: "span 4",
    gridRowStart: "2",
    gridRowEnd: "span 1",
    textAlign: "left",
    margin: "0",
    borderBottom: "solid 1px white",
};

export default function TeamTile(props) {
    const groupData = props.profile;

    console.log(groupData);
    const background = props.imgPath;

    return (
        <Card
            className="teamTileCardStyle"
            style={{
                fontFamily: "Rajdhani",
                color: "white",
                marginTop: "50px",
                maxWidth: "700px",
                zIndex: "1",
                marginRight: "auto",
                marginLeft: "auto",
                padding: "0",
                backgroundImage: "url(" + background + ")",
                backgroundSize: "cover",
                backgroundColor: "rgba(26, 26, 26, 0.7)",
                border: "0px none",
            }}
        >
            <Card.Body style={bodyStyle}>
                <Card.Title
                    className="teamTileTitleStyle"
                    style={teamTileTitleStyle}
                >
                    MidHeavy - Team
                </Card.Title>
                <Card.Text
                    className="teamTileBioStyle"
                    style={teamTileBioStyle}
                >
                    Mid Heavy is a team of tech enthusiasts, passionate about
                    making cool projects, and learning along the way!
                </Card.Text>
                <Card.Link
                    className="teamTileNameLinks"
                    style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "span 1",
                        gridRowStart: "3",
                        gridRowEnd: "span 1",
                        textAlign: "center",
                        alignSelf: "center",
                    }}
                >
                    {/* {groupData[0].name} */} Christopher
                </Card.Link>
                <Card.Link
                    className="teamTileNameLinks"
                    style={{
                        gridColumnStart: "2",
                        gridColumnEnd: "span 1",
                        gridRowStart: "3",
                        gridRowEnd: "span 1",
                        textAlign: "center",
                        alignSelf: "center",
                    }}
                >
                    {groupData[1].name}
                </Card.Link>
                <Card.Link
                    className="teamTileNameLinks"
                    style={{
                        gridColumnStart: "3",
                        gridColumnEnd: "span 1",
                        gridRowStart: "3",
                        gridRowEnd: "span 1",
                        textAlign: "center",
                        alignSelf: "center",
                    }}
                >
                    {groupData[2].name}
                </Card.Link>
                <Card.Link
                    className="teamTileNameLinks"
                    style={{
                        gridColumnStart: "4",
                        gridColumnEnd: "span 1",
                        gridRowStart: "3",
                        gridRowEnd: "span 1",
                        textAlign: "center",
                        alignSelf: "center",
                    }}
                >
                    {groupData[3].name}
                </Card.Link>
            </Card.Body>
        </Card>
    );
}