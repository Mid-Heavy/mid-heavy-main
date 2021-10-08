import React from "react"
import { Card } from "react-bootstrap"

const tileStyle = {
  backgroundColor: "rgba(26, 26, 26, 0.7)",
  fontFamily: "Rajdhani",
  marginTop: "50px",
  maxWidth: "1000px",
  zIndex: "1"
}

const tileTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold"
}

const tileBodyStyle = {
  color: "#b6b6b6"
}

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
  following_url: "https://api.github.com/users/Pandaphobic/following{/other_user}",
  gists_url: "https://api.github.com/users/Pandaphobic/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Pandaphobic/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Pandaphobic/subscriptions",
  organizations_url: "https://api.github.com/users/Pandaphobic/orgs",
  repos_url: "https://api.github.com/users/Pandaphobic/repos",
  events_url: "https://api.github.com/users/Pandaphobic/events{/privacy}",
  received_events_url: "https://api.github.com/users/Pandaphobic/received_events",
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
  updated_at: "2021-09-26T02:50:58Z"
}

export default function ProfileTile(props) {
  const groupData = props.data

  console.log(groupData)
  return (
    <div>
      <Card text="success" style={tileStyle}>
        <Card.Body>
          <Card.Title style={tileTitleStyle}>{TEMP_PROFILE_DATA.login}</Card.Title>
          <br />
          <img style={{ borderRadius: "50%", height: "70px" }} src={TEMP_PROFILE_DATA.avatar_url}></img>
          <Card.Text style={tileBodyStyle}>Body</Card.Text>
          <br />
        </Card.Body>
      </Card>
    </div>
  )
}
