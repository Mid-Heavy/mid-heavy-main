import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProfileTile from "../components/ProfileTile";
import Background1 from "../assets/moodyTree.png";
import Background2 from "../assets/redForest.jpg";
import Background3 from "../assets/moodyGuitar.jpg";
import Background4 from "../assets/bear.png";

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
            <ProfileTile
                imgPath={Background1}
                isLeft={true}
                profile={groupData[0]}
            />
            <ProfileTile imgPath={Background2} />
            <ProfileTile imgPath={Background3} isLeft={true} />
            <ProfileTile imgPath={Background4} />
        </Container>
    );
}
