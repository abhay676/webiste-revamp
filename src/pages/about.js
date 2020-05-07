import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Hi 😊, Loves to see you here.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">Abhay Goswami</h3>
          <p>I am from India, place from where most of the CEO's come😁 loves to code on <span style={{color: "#663399"}}>React, Node and MongoDB</span></p>
          <p>Having an experience of <span style={{color: "#663399"}}>8-months in MERN-stack</span>. Worked with some product-based startup and happy to look into new and more challenging opportunity</p>
          <p>I am big fan of listening <i>punjabi-music</i> and writting <i>articles</i> on what I learned so far.</p>
        </div>
        <div className="post-content-body">
          <h3 id="dynamic-styles">Contact</h3>
          <p style={{alignItems: "center"}}><span style={{color: '#663399'}}>Shoot a mail @ </span><a href="mailto:abhaygoswami79265@gmail.com">abhaygoswami79265@gmail.com</a></p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
