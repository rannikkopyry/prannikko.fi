import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import LinkedIn from "../images/linkedin.png"
import Github from "../images/Github.png"
import Twitter from "../images/twitter.png"
import Instagram from "../images/instagram.png"
import Mail from "../images/mail.png"
import Pyry from "../images/pyry.png"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center"
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const linkStackStyles = {
  display: "grid"
}

const linksStyles = {
  display: "table-cell"
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
      <a href="https://www.linkedin.com/in/pyry-rannikko-770368217/" style={linksStyles}>
      <img
        alt="LinkedIn logo"
        src={LinkedIn}
        width="30px"
      />
      </a>
      <a href="https://github.com/rannikkopyry" style={linksStyles}>
      <img
        alt="Github logo"
        src={Github}
        width="30px"
      />
      </a>
      <a href="mailto:pyry.rannikko1@gmail.com" style={linksStyles}>
      <img
        alt="Gmail logo"
        src={Mail}
        width="30px"
      />
      </a>
      <a href="https://twitter.com/PyryRannikko" style={linksStyles}>
      <img
        alt="Twitter logo"
        src={Twitter}
        width="30px"
      />
      </a>
      <a href="https://www.instagram.com/rannikkopyry/" style={linksStyles}>
      <img
        alt="Instagram logo"
        src={Instagram}
        width="30px"
      />
      </a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Pyry Rannikko</title>
