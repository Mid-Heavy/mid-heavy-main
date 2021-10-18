import React from "react";
import { Card } from "react-bootstrap";
import Background1 from "../assets/moodyTree.png";

const tileStyle = {
    fontFamily: "Rajdhani",
    color: "white",
    marginTop: "50px",
    maxWidth: "700px",
    zIndex: "1",
    height: "300px",
    marginRight: "auto",
    marginLeft: "auto",
    padding: "0",
    backgroundImage: "url(" + Background1 + ")",
    backgroundSize: "cover",
};

const tileShadow = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)",
    zIndex: "2",
};

const bodyStyle = {
    margin: "0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr auto 10px",
    zIndex: "3",
};

const tileTitleLoginStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    gridColumnStart: "1",
    gridColumnEnd: "span 1",
    gridRowStart: "3",
    gridRowEnd: "span 1",
    textAlign: "center",
    alignSelf: "start",
};

const tileTitleNameStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    gridColumnStart: "3",
    gridColumnEnd: "span 2",
    gridRowStart: "1",
    gridRowEnd: "span 1",
    textAlign: "right",
};

const tileBioStyle = {
    gridColumnStart: "2",
    gridColumnEnd: "span 3",
    gridRowStart: "2",
    gridRowEnd: "span 3",
    textAlign: "right",
};

const logos = {
    display: "flex",
    flex: "inline",
    justifyContent: "right",
    gridColumnStart: "4",
    gridColumnEnd: "span 1",
    gridRowStart: "5",
    gridRowEnd: "span 1",
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
    return (
        <div>
            <Card style={tileStyle}>
                <div style={tileShadow}></div>
                <Card.Body style={bodyStyle}>
                    <Card.Title style={tileTitleLoginStyle}>
                        {TEMP_PROFILE_DATA.login}
                    </Card.Title>
                    <Card.Title style={tileTitleNameStyle}>
                        {TEMP_PROFILE_DATA.name}
                    </Card.Title>
                    <img
                        style={{
                            borderRadius: "50%",
                            height: "100px",
                            width: "100px",
                            gridColumnStart: "1",
                            gridColumnEnd: "span 1",
                            gridRowStart: "1",
                            gridRowEnd: "span 2",
                            margin: "auto",
                        }}
                        src={TEMP_PROFILE_DATA.avatar_url}
                    ></img>
                    <Card.Text style={tileBioStyle}>
                        {TEMP_PROFILE_DATA.bio}
                    </Card.Text>
                    <div style={logos}>
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
