import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProfileTile from "../components/ProfileTile";

export default function About() {
    const team = ["Pandaphobic", "princerori", "MillieGrey", "MH-Mrlamp"];
    const [teamData, setTeamData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const [groupData, setGroupData] = useState({});

    useEffect(() => {
        team.forEach((member) => {
            fetch(`https://api.github.com/users/${member}`)
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setGroupData({ ...groupData, result });
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        });
    }, []);

    return (
        <Container>
            <ProfileTile isLeft={true} profile={groupData[0]} />
            <ProfileTile />
            <ProfileTile isLeft={true} />
            <ProfileTile />
        </Container>
    );
}
