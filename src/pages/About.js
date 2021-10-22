import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProfileTile from "../components/ProfileTile";
import Background1 from "../assets/moodyTree.png";
import Background2 from "../assets/redForest.jpg";
import Background3 from "../assets/moodyGuitar.jpg";
import Background4 from "../assets/bear.png";
import TeamTile from "../components/TeamTile";

export default function About() {
    const teamData = [
        {
            login: "Pandaphobic",
            avatar_url: "https://avatars.githubusercontent.com/u/11794877?v=4",
            html_url: "https://github.com/Pandaphobic",
            name: "Christopher Steffes",
            bio: "Beginner Programmer & Electronics Hobbyist",
            twitter_username: "midheavy",
        },
        {
            login: "MillieGrey",
            avatar_url: "https://avatars.githubusercontent.com/u/83617863?v=4",
            html_url: "https://github.com/MillieGrey",
            name: "Millie Grey",
            bio: "I make stuff.",
        },
        {
            login: "princerori",
            avatar_url: "https://avatars.githubusercontent.com/u/83619857?v=4",
            html_url: "https://github.com/princerori",
            name: "rori",
            bio: "I love making all sorts of things! I have been learning JS, CSS, HTML, and recently, react. I love being able to style a page and watch it all come together.",
        },
        {
            login: "MH-Mrlamp",
            avatar_url: "https://avatars.githubusercontent.com/u/73482519?v=4",
            html_url: "https://github.com/MH-Mrlamp",
            name: "Mac",
            bio: "Mac",
        },
    ];
    const background = [Background1, Background2, Background3, Background4];

    const [groupData, setGroupData] = useState(teamData);

    return (
        <Container style={{ position: "abosolute", overflow: "auto" }}>
            <TeamTile imgPath={background} profile={groupData} />
            <ProfileTile
                imgPath={background[0]}
                isLeft={true}
                profile={groupData[2]}
            />
            <ProfileTile imgPath={background[1]} profile={groupData[1]} />
            <ProfileTile
                imgPath={background[2]}
                isLeft={true}
                profile={groupData[3]}
            />
            <ProfileTile imgPath={background[3]} profile={groupData[0]} />
        </Container>
    );
}
