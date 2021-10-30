import React from "react"
import { Card } from "react-bootstrap"

const bodyStyle = {
  margin: "0",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  zIndex: "3",
  paddingBottom: "5px"
}

const teamTileTitleStyle = {
  fontWeight: "bold",
  letterSpacing: "0.25em",
  gridColumnStart: "1",
  gridColumnEnd: "span 3",
  textAlign: "left",
  alignSelf: "start",
  whiteSpace: "nowrap"
}

const teamTileBioStyle = {
  gridColumnStart: "1",
  gridColumnEnd: "span 4",
  textAlign: "left",
  margin: "0",
  borderBottom: "solid 1px white"
}

export default function TeamTile(props) {
  const groupData = props.profile

  const background = props.imgPath
  // console.log(background);

  function MouseOver0(event) {
    event.target.style.backgroundImage = ["url(" + background[0] + ")"]
  }
  function MouseOver1(event) {
    event.target.style.backgroundImage = ["url(" + background[1] + ")"]
  }
  function MouseOver2(event) {
    event.target.style.backgroundImage = ["url(" + background[2] + ")"]
  }
  function MouseOver3(event) {
    event.target.style.backgroundImage = ["url(" + background[3] + ")"]
  }
  function MouseOut(event) {
    event.target.style.backgroundImage = ""
  }

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
        backgroundSize: "cover",
        backgroundColor: "rgba(26, 26, 26, 0.7)",
        border: "0px none"
      }}
    >
      <Card.Body className="teamTileBodyStyle" style={bodyStyle}>
        <Card.Title className="teamTileTitleStyle" style={teamTileTitleStyle}>
          MidHeavy - Team
        </Card.Title>
        <Card.Text className="teamTileBioStyle" style={teamTileBioStyle}>
          Mid Heavy is a team of tech enthusiasts, passionate about making cool projects, and learning along the way!
        </Card.Text>
        <Card.Link
          href=""
          className="teamTileNameLinks"
          onMouseOver={MouseOver3}
          onMouseOut={MouseOut}
          style={{
            gridColumnStart: "1",
            gridColumnEnd: "span 1",
            textAlign: "center",
            alignSelf: "center",
            // backgroundImage: "url(" + background[3] + ")",
            backgroundSize: "cover",
            color: "white"
          }}
        >
          {groupData[0].name.split(" ")[0]}
        </Card.Link>
        <Card.Link
          href=""
          className="teamTileNameLinks"
          onMouseOver={MouseOver1}
          onMouseOut={MouseOut}
          style={{
            gridColumnStart: "2",
            gridColumnEnd: "span 1",
            textAlign: "center",
            alignSelf: "center",
            // backgroundImage: "url(" + background[1] + ")",
            backgroundSize: "cover",
            color: "white"
          }}
        >
          {groupData[1].name.split(" ")[0]}
        </Card.Link>

        <Card.Link
          href=""
          className="teamTileNameLinks"
          onMouseOver={MouseOver0}
          onMouseOut={MouseOut}
          style={{
            gridColumnStart: "3",
            gridColumnEnd: "span 1",
            textAlign: "center",
            alignSelf: "center",
            // backgroundImage: "url(" + background[0] + ")",
            backgroundSize: "cover",
            color: "white"
          }}
        >
          {groupData[2].name.split(" ")[0]}
        </Card.Link>
        <Card.Link
          href=""
          className="teamTileNameLinks"
          onMouseOver={MouseOver2}
          onMouseOut={MouseOut}
          style={{
            gridColumnStart: "4",
            gridColumnEnd: "span 1",
            textAlign: "center",
            alignSelf: "center",
            // backgroundImage: "url(" + background[2] + ")",
            backgroundSize: "cover",
            color: "white"
          }}
        >
          {groupData[3].name.split(" ")[0]}
        </Card.Link>
      </Card.Body>
    </Card>
  )
}
