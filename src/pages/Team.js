import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ProfileTile from '../components/ProfileTile'
import Background1 from '../assets/moodyTree.png'
import Background2 from '../assets/redForest.jpg'
import Background3 from '../assets/moodyGuitar.jpg'
import Background4 from '../assets/moodyMontreal.jpg'
import TeamTile from '../components/TeamTile'

export default function Team() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState([])
  const teamLogins = ['pandaphobic', 'MH-Mrlamp', 'MillieGrey', 'princerori']
  const background = [Background1, Background2, Background3, Background4]

  // ---------API Calls Reference----------
  // https://reactjs.org/docs/faq-ajax.html

  useEffect(() => {
    const membersToAdd = []

    teamLogins.forEach((member) =>
      fetch(`https://api.github.com/users/${member}`)
        .then((res) => res.json())
        .then(
          (result) => {
            membersToAdd.push(result)

            // When it's done getting everone
            if (membersToAdd.length == teamLogins.length) {
              membersToAdd.sort((a, b) => a.login.localeCompare(b.login))
              setMembers(membersToAdd)
              setLoading(false)
            }
          },
          (error) => {
            setLoading(false)
            setError(error)
          }
        )
    )
  }, [])
  console.log(members)

  // loading is true by default
  if (loading) {
    return <>Loading....</>
  }

  if (error) {
    return <Container>{error}</Container>
  }

  // renders if loading is false
  return (
    <Container className="buttface">
      <TeamTile imgPath={background} profile={members} />
      <ProfileTile imgPath={background[0]} isLeft={true} profile={members[0]} />
      <ProfileTile imgPath={background[1]} profile={members[1]} />
      <ProfileTile imgPath={background[2]} isLeft={true} profile={members[2]} />
      <ProfileTile imgPath={background[3]} profile={members[3]} />
    </Container>
  )
}
