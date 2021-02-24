import React from "react"
import { Layout } from "../layout"
import { Hero } from "../components/Hero"
import { Profile } from "../components/Profile"
import { Optin } from "../components/Optin"
const IndexPage = ({ data }) => {
  const {
    allContentfulLink: { nodes: links },
  } = data
  return (
    <Layout>
      <Hero>
        <Profile />
        {links.map(link => {
          return (
            <>
              <a className="link" href={link.url}>
                {link.text}
              </a>
            </>
          )
        })}
        <Optin />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulLink {
      nodes {
        text
        url
      }
    }
  }
`

export default IndexPage
