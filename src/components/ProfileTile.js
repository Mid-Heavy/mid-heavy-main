import React from 'react'
import { Card } from 'react-bootstrap'
import { RiGithubLine } from 'react-icons/ri'
import { RiTwitterLine } from 'react-icons/ri'

// CSS THAT IS FOR BOTH LEFT AND RIGHT
const bodyStyle = {
  margin: '0',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr auto 10px',
  zIndex: '3'
}

const iconStyle = {
  color: 'white',
  margin: '0',
  marginRight: '2px'
}

// LEFT CSS
const tileShadowLeft = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(26, 26, 26, 0.7)',
  clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 20% 100%)',
  zIndex: '2'
}

const tileLoginStyleLeft = {
  fontWeight: 'bold',
  gridColumnStart: '1',
  gridColumnEnd: 'span 1',
  gridRowStart: '3',
  gridRowEnd: 'span 1',
  textAlign: 'center',
  alignSelf: 'start',
  whiteSpace: 'nowrap'
}

const tileNameStyleLeft = {
  fontWeight: 'bold',
  gridColumnStart: '3',
  gridColumnEnd: 'span 2',
  gridRowStart: '1',
  gridRowEnd: 'span 1',
  textAlign: 'right',
  whiteSpace: 'nowrap'
}

const tileBioStyleLeft = {
  gridColumnStart: '2',
  gridColumnEnd: 'span 3',
  gridRowStart: '2',
  gridRowEnd: 'span 3',
  textAlign: 'right',
  margin: '0'
}

const tileLogosStyleLeft = {
  display: 'flex',
  flex: 'inline',
  justifyContent: 'flex-end',
  gridColumnStart: '4',
  gridColumnEnd: 'span 1',
  gridRowStart: '5',
  gridRowEnd: 'span 1'
}

const tileProfilePicLeft = {
  borderRadius: '50%',

  gridColumnStart: '1',
  gridColumnEnd: 'span 1',
  gridRowStart: '1',
  gridRowEnd: 'span 2',
  margin: 'auto'
}

// RIGHT CSS
const tileShadow = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(26, 26, 26, 0.7)',
  clipPath: 'polygon(0 0, 80% 0, 60% 100%, 0 100%)',
  zIndex: '2'
}

const tileLoginStyle = {
  fontWeight: 'bold',
  gridColumnStart: '4',
  gridColumnEnd: 'span 1',
  gridRowStart: '3',
  gridRowEnd: 'span 1',
  textAlign: 'center',
  alignSelf: 'start',
  whiteSpace: 'nowrap'
}

const tileNameStyle = {
  fontWeight: 'bold',
  gridColumnStart: '1',
  gridColumnEnd: 'span 2',
  gridRowStart: '1',
  gridRowEnd: 'span 1',
  textAlign: 'left',
  whiteSpace: 'nowrap'
}

const tileBioStyle = {
  gridColumnStart: '1',
  gridColumnEnd: 'span 3',
  gridRowStart: '2',
  gridRowEnd: 'span 3',
  textAlign: 'left',
  margin: '0'
}

const tileLogosStyle = {
  display: 'flex',
  flex: 'inline',
  justifyContent: 'flex-start',
  gridColumnStart: '1',
  gridColumnEnd: 'span 1',
  gridRowStart: '5',
  gridRowEnd: 'span 1'
}

const tileProfilePic = {
  borderRadius: '50%',
  gridColumnStart: '4',
  gridColumnEnd: 'span 1',
  gridRowStart: '1',
  gridRowEnd: 'span 2',
  margin: 'auto'
}

/// TEMPLATE DATA OBJECT
// const TEMP_PROFILE_DATA = {
//   login: "Pandaphobic",
//   avatar_url: "https://avatars.githubusercontent.com/u/11794877?v=4",
//   html_url: "https://github.com/Pandaphobic",
//   name: "Christopher Steffes",
//   bio: "Beginner Programmer & Electronics Hobbyist",
// };

export default function ProfileTile(props) {
  const groupData = props.profile
  const background = props.imgPath
  const isLeft = props.isLeft
  // 'props.imgPath in window' checks if the prop is undefined somehow and returns boolean true if it is
  if (props.imgPath in window) {
    console.log('yes')
    fetch(
      `https://api.unsplash.com/search/photos?query=${props.imgQuery}&client_id=SfbYeZls6r-423sq3JfKFURM0DITgSS0DbVrErW-v7k`
    )
      .then((res) => res.json())
      .then((result) => {
        // TODO the result needs to be parsed for an image path before being pushed to the background
        background.push(result)
      })
  }
  console.log(background)

  if (isLeft) {
    return (
      <Card
        className="profileTileCardStyle"
        style={{
          fontFamily: 'Rajdhani',
          color: 'white',
          marginTop: '25px',
          marginBottom: '25px',
          maxWidth: '700px',
          zIndex: '1',
          marginRight: 'auto',
          marginLeft: 'auto',
          padding: '0',
          backgroundImage: 'url(' + background + ')',
          backgroundSize: 'cover',
          backgroundColor: 'black',
          border: '0px none'
        }}
      >
        <div style={tileShadowLeft}></div>
        <Card.Body className="profileTileCardBody" style={bodyStyle}>
          <Card.Title
            className="profileTileLoginStyle"
            style={tileLoginStyleLeft}
          >
            @{groupData.login}
          </Card.Title>
          <Card.Title
            className="profileTileNameStyle"
            style={tileNameStyleLeft}
          >
            {groupData.name}
          </Card.Title>
          <img
            className="profileTileProfilePic"
            style={tileProfilePicLeft}
            alt="Avatar"
            src={groupData.avatar_url}
          ></img>
          <Card.Text className="profileTileBioStyle" style={tileBioStyleLeft}>
            {groupData.bio}
          </Card.Text>
          <div className="profileTileLogosStyle" style={tileLogosStyleLeft}>
            <Card.Link href={groupData.html_url} target="blank">
              <RiGithubLine
                className="profileTileIconStyle"
                style={iconStyle}
              />
            </Card.Link>
            {groupData.twitter_username && (
              <Card.Link
                href={'https://twitter.com/' + groupData.twitter_username}
                target="blank"
              >
                <RiTwitterLine
                  className="profileTileIconStyle"
                  style={iconStyle}
                />
              </Card.Link>
            )}
          </div>
        </Card.Body>
      </Card>
    )
  }
  return (
    <Card
      className="profileTileCardStyle"
      style={{
        fontFamily: 'Rajdhani',
        color: 'white',
        marginTop: '50px',
        maxWidth: '700px',
        zIndex: '1',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '0',
        backgroundImage: 'url(' + background + ')',
        backgroundSize: 'cover',
        backgroundColor: 'black',
        border: '0px none'
      }}
    >
      <div style={tileShadow}></div>
      <Card.Body style={bodyStyle}>
        <Card.Title className="profileTileLoginStyle" style={tileLoginStyle}>
          @{groupData.login}
        </Card.Title>
        <Card.Title className="profileTileNameStyle" style={tileNameStyle}>
          {groupData.name}
        </Card.Title>
        <img
          className="profileTileProfilePic"
          style={tileProfilePic}
          alt="Avatar"
          src={groupData.avatar_url}
        ></img>
        <Card.Text className="profileTileBioStyle" style={tileBioStyle}>
          {groupData.bio}
        </Card.Text>
        <div className="profileTileLogosStyle" style={tileLogosStyle}>
          <Card.Link href={groupData.html_url} target="blank">
            <RiGithubLine className="profileTileIconStyle" style={iconStyle} />
          </Card.Link>
          {groupData.twitter_username && (
            <Card.Link
              href={'https://twitter.com/' + groupData.twitter_username}
              target="blank"
            >
              <RiTwitterLine
                className="profileTileIconStyle"
                style={iconStyle}
              />
            </Card.Link>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
