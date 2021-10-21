import React from "react";
import { Card } from "react-bootstrap";

const bodyStyle = {
    margin: "0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr auto 10px",
    zIndex: "3",
};

const teamTileTitleStyle = {
    fontWeight: "bold",
    gridColumnStart: "4",
    gridColumnEnd: "span 1",
    gridRowStart: "3",
    gridRowEnd: "span 1",
    textAlign: "center",
    alignSelf: "start",
    whiteSpace: "nowrap",
};

const teamTileBioStyle = {
    gridColumnStart: "1",
    gridColumnEnd: "span 3",
    gridRowStart: "2",
    gridRowEnd: "span 3",
    textAlign: "left",
    margin: "0",
};

/// TEMPLATE DATA OBJECT
// const TEMP_PROFILE_DATA = {
//   login: "Pandaphobic",
//   avatar_url: "https://avatars.githubusercontent.com/u/11794877?v=4",
//   html_url: "https://github.com/Pandaphobic",
//   name: "Christopher Steffes",
//   bio: "Beginner Programmer & Electronics Hobbyist",
// };

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
                    {groupData[0].bio}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
