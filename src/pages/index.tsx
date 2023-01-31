import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import LinkedIn from "../images/linkedin.png"
import Github from "../images/github.png"
import Twitter from "../images/twitter.png"
import Instagram from "../images/instagram.png"
import Mail from "../images/mail.png"
import Pyry from "../images/pyry.png"
import Briefcase from "../images/briefcase.jpeg"

import "./index.css"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center",
  marginTop: "50px",
  width: "100vw"
}
const linkStackStyles = {
  display: "grid",
  marginTop: "20px"
}

const linksStyles = {
  margin: "20px"
} 

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div>
      <img
        alt="LinkedIn logo"
        src={Pyry}
        width="250px"
      />  
      </div>
      <div style={linkStackStyles}>
      <div>
      <a href="https://www.linkedin.com/in/pyry-rannikko-770368217/" style={linksStyles}>
      <img
        alt="LinkedIn logo"
        src={LinkedIn}
        width="50px"
      />
      </a>
      <a href="https://github.com/rannikkopyry" style={linksStyles}>
      <img
        alt="Github logo"
        src={Github}
        width="50px"
      />
      </a>
      </div>
      <div>
      <a href="mailto:pyry.rannikko1@gmail.com" style={linksStyles}>
      <img
        alt="Gmail logo"
        src={Mail}
        width="50px"
      />
      </a>
      <a href="https://twitter.com/PyryRannikko" style={linksStyles}>
      <img
        alt="Twitter logo"
        src={Twitter}
        width="50px"
      />
      </a>
      </div>
      <div>
      <a href="https://www.instagram.com/rannikkopyry/" style={linksStyles}>
      <img
        alt="Instagram logo"
        src={Instagram}
        width="50px"
      />
      </a>
      <a href="https://www.rpsolutions.fi/" style={linksStyles}>
      <img
        alt="Man at a desk icon"
        src={Briefcase}
        width="50px"
      />
      </a>
      </div>
      <p>Working on:</p>
      <a href="https://www.formitor.com/" style={linksStyles}>formitor.com</a>
      <a href="https://www.motorlinks.io/" style={linksStyles}>motorlinks.io</a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Pyry Rannikko</title>
