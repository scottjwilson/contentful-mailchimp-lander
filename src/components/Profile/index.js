import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Wrapper } from "./Styles"
import Image from "gatsby-image"
export const Profile = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPerson(name: { eq: "Your Business" }) {
        id
        name
        twitter
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  const { contentfulPerson } = data
  return (
    <Wrapper>
      <Image fluid={contentfulPerson.image.fluid} className="image" />

      <h3>{contentfulPerson.twitter}</h3>
    </Wrapper>
  )
}
