import React from "react";
import { Card } from "react-bootstrap";
import { RiGithubLine } from "react-icons/ri";

// CSS THAT IS FOR BOTH LEFT AND RIGHT
const bodyStyle = {
  margin: "0",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr auto 10px",
  zIndex: "3",
};

const iconStyle = {
  height: "14px",
  width: "14px",
  color: "white",
  marginRight: "2px",
};

// LEFT CSS
const tileShadowLeft = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(26, 26, 26, 0.7)",
  clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)",
  zIndex: "2",
};

const tileLoginStyleLeft = {
  fontSize: "2rem",
  fontWeight: "bold",
  gridColumnStart: "1",
  gridColumnEnd: "span 1",
  gridRowStart: "3",
  gridRowEnd: "span 1",
  textAlign: "center",
  alignSelf: "start",
};

const tileNameStyleLeft = {
  fontSize: "2rem",
  fontWeight: "bold",
  gridColumnStart: "3",
  gridColumnEnd: "span 2",
  gridRowStart: "1",
  gridRowEnd: "span 1",
  textAlign: "right",
};

const tileBioStyleLeft = {
  gridColumnStart: "2",
  gridColumnEnd: "span 3",
  gridRowStart: "2",
  gridRowEnd: "span 3",
  textAlign: "right",
};

const tileLogosStyleLeft = {
  display: "flex",
  flex: "inline",
  justifyContent: "right",
  gridColumnStart: "4",
  gridColumnEnd: "span 1",
  gridRowStart: "5",
  gridRowEnd: "span 1",
};

const tileProfilePicLeft = {
  borderRadius: "50%",
  height: "125px",
  width: "125px",
  gridColumnStart: "1",
  gridColumnEnd: "span 1",
  gridRowStart: "1",
  gridRowEnd: "span 2",
  margin: "auto",
};

// RIGHT CSS
const tileShadow = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(26, 26, 26, 0.7)",
  clipPath: "polygon(0 0, 80% 0, 60% 100%, 0 100%)",
  zIndex: "2",
};

const tileLoginStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  gridColumnStart: "4",
  gridColumnEnd: "span 1",
  gridRowStart: "3",
  gridRowEnd: "span 1",
  textAlign: "center",
  alignSelf: "start",
};

const tileNameStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  gridColumnStart: "1",
  gridColumnEnd: "span 2",
  gridRowStart: "1",
  gridRowEnd: "span 1",
  textAlign: "left",
};

const tileBioStyle = {
  gridColumnStart: "1",
  gridColumnEnd: "span 3",
  gridRowStart: "2",
  gridRowEnd: "span 3",
  textAlign: "left",
};

const tileLogosStyle = {
  display: "flex",
  flex: "inline",
  justifyContent: "left",
  gridColumnStart: "1",
  gridColumnEnd: "span 1",
  gridRowStart: "5",
  gridRowEnd: "span 1",
};

const tileProfilePic = {
  borderRadius: "50%",
  height: "125px",
  width: "125px",
  gridColumnStart: "4",
  gridColumnEnd: "span 1",
  gridRowStart: "1",
  gridRowEnd: "span 2",
  margin: "auto",
};

/// TEMPLATE DATA OBJECT
const TEMP_PROFILE_DATA = {
  login: "Pandaphobic",
  avatar_url: "https://avatars.githubusercontent.com/u/11794877?v=4",
  html_url: "https://github.com/Pandaphobic",
  name: "Christopher Steffes",
  bio: "Beginner Programmer & Electronics Hobbyist",
};

export default function ProfileTile(props) {
  const groupData = props.profile;

  console.log(groupData);
  const background = props.imgPath;
  const isLeft = props.isLeft;
  if (isLeft) {
    return (
      <div>
        <Card
          style={{
            fontFamily: "Rajdhani",
            color: "white",
            marginTop: "50px",
            maxWidth: "700px",
            zIndex: "1",
            height: "300px",
            marginRight: "auto",
            marginLeft: "auto",
            padding: "0",
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            backgroundColor: "black",
          }}
        >
          <div style={tileShadowLeft}></div>
          <Card.Body style={bodyStyle}>
            <Card.Title style={tileLoginStyleLeft}>
              {groupData.login}
            </Card.Title>
            <Card.Title style={tileNameStyleLeft}>{groupData.name}</Card.Title>
            <img style={tileProfilePicLeft} src={groupData.avatar_url}></img>
            <Card.Text style={tileBioStyleLeft}>{groupData.bio}</Card.Text>
            <div style={tileLogosStyleLeft}>
              <Card.Link href={groupData.html_url} target="blank">
                <RiGithubLine style={iconStyle} />
              </Card.Link>
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              ></div>
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              ></div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <Card
        style={{
          fontFamily: "Rajdhani",
          color: "white",
          marginTop: "50px",
          maxWidth: "700px",
          zIndex: "1",
          height: "300px",
          marginRight: "auto",
          marginLeft: "auto",
          padding: "0",
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
          backgroundColor: "black",
        }}
      >
        <div style={tileShadow}></div>
        <Card.Body style={bodyStyle}>
          <Card.Title style={tileLoginStyle}>{groupData.login}</Card.Title>
          <Card.Title style={tileNameStyle}>{groupData.name}</Card.Title>
          <img style={tileProfilePic} src={groupData.avatar_url}></img>
          <Card.Text style={tileBioStyle}>{groupData.bio}</Card.Text>
          <div style={tileLogosStyle}>
            <Card.Link href={groupData.html_url} target="blank">
              <RiGithubLine style={iconStyle} />
            </Card.Link>
            <div
              style={{
                height: "10px",
                width: "10px",
                backgroundColor: "white",
                borderRadius: "50%",
                marginRight: "2px",
              }}
            ></div>
            <div
              style={{
                height: "10px",
                width: "10px",
                backgroundColor: "white",
                borderRadius: "50%",
                marginRight: "2px",
              }}
            ></div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
