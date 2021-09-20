import React from "react"

const style1 = {
  textAlign: "center"
}
const style2 = {
  borderRadius: "10px"
}
const style3 = {
  height: "250px",
  borderRadius: "20px"
}

const style4 = {
  borderRadius: "10px",
  maxWidth: "48%"
}

const header1 = {
  fontFamily: "Rajdhani",
  fontWeight: 900
}

const bringToTop = {
  position: "relative",
  zIndex: 10
}

export default function Contact() {
  return (
    <div style={bringToTop} className="container m-auto">
      <div style={style1}>
        <p style={header1} className="h1 text-info">
          Contact Us
        </p>
        <p>Send us a message!</p>
      </div>
      <form action="/action_page.php">
        <label className="text-info" for="name">
          Name
        </label>
        <input style={style2} type="text" id="fname" name="firstname" placeholder="Your Name" />
        <label className="text-info" for="email">
          Email
        </label>
        <input style={style2} type="email" id="email" name="email" placeholder="Your Email" />
        <label className="text-info" for="country">
          Country
        </label>
        <select style={style2} id="country" name="country">
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="norway">Norway</option>
          <option value="singapore">Singapore</option>
          <option value="greenland">Greenland</option>
          <option value="iceland">Iceland</option>
          <option value="new zealand">New Zealand</option>
        </select>
        <label className="text-info" for="message">
          Message
        </label>
        <textarea style={style3} id="message" name="message" placeholder="Write something.."></textarea>
        <input style={style4} type="submit" className="btn btn-info btn-block pl-3 pr-3 m-auto" />
      </form>
    </div>
  )
}
