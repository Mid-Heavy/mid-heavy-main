import React from "react";
import { Card } from "react-bootstrap";

// CSS THAT IS FOR BOTH LEFT AND RIGHT
const bodyStyle = {
    margin: "0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr auto 10px",
    zIndex: "3",
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
    id: 11794877,
    node_id: "MDQ6VXNlcjExNzk0ODc3",
    avatar_url: "https://avatars.githubusercontent.com/u/11794877?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Pandaphobic",
    html_url: "https://github.com/Pandaphobic",
    followers_url: "https://api.github.com/users/Pandaphobic/followers",
    following_url:
        "https://api.github.com/users/Pandaphobic/following{/other_user}",
    gists_url: "https://api.github.com/users/Pandaphobic/gists{/gist_id}",
    starred_url:
        "https://api.github.com/users/Pandaphobic/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Pandaphobic/subscriptions",
    organizations_url: "https://api.github.com/users/Pandaphobic/orgs",
    repos_url: "https://api.github.com/users/Pandaphobic/repos",
    events_url: "https://api.github.com/users/Pandaphobic/events{/privacy}",
    received_events_url:
        "https://api.github.com/users/Pandaphobic/received_events",
    type: "User",
    site_admin: false,
    name: "Christopher Steffes",
    company: "MidHeavy",
    blog: "MidHeavy.tech",
    location: "Winnipeg, MB",
    email: null,
    hireable: true,
    bio: "Beginner Programmer & Electronics Hobbyist",
    twitter_username: "midheavy",
    public_repos: 26,
    public_gists: 0,
    followers: 3,
    following: 3,
    created_at: "2015-04-04T08:00:52Z",
    updated_at: "2021-09-26T02:50:58Z",
};

export default function ProfileTile(props) {
    const groupData = props.data;
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
                            {TEMP_PROFILE_DATA.login}
                        </Card.Title>
                        <Card.Title style={tileNameStyleLeft}>
                            {TEMP_PROFILE_DATA.name}
                        </Card.Title>
                        <img
                            style={tileProfilePicLeft}
                            src={TEMP_PROFILE_DATA.avatar_url}
                        ></img>
                        <Card.Text style={tileBioStyleLeft}>
                            {TEMP_PROFILE_DATA.bio}
                        </Card.Text>
                        <div style={tileLogosStyleLeft}>
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
                    <Card.Title style={tileLoginStyle}>
                        {TEMP_PROFILE_DATA.login}
                    </Card.Title>
                    <Card.Title style={tileNameStyle}>
                        {TEMP_PROFILE_DATA.name}
                    </Card.Title>
                    <img
                        style={tileProfilePic}
                        src={TEMP_PROFILE_DATA.avatar_url}
                    ></img>
                    <Card.Text style={tileBioStyle}>
                        {TEMP_PROFILE_DATA.bio}
                    </Card.Text>
                    <div style={tileLogosStyle}>
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
