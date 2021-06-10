import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/Layout'
import Contain from '../components/Contain'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ProjectDetails({ data }) {
    const { body } = data.mdx
    const { title, role, category, stack, featureImg } = data.mdx.frontmatter
    const image = getImage(featureImg)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title} | Web Design Consulting | J Galenti</title>
                <link rel="canonical" href="http://galenti.io" />
            </Helmet>
            <Layout>
                <Contain>
                    <h2>{title}</h2>
                    <h4>{role}</h4>
                    <p>{category}</p>
                    <p>{stack}</p>
                    <GatsbyImage image={image} alt="Featured Image" />
                    <MDXRenderer>{body}</MDXRenderer>
                </Contain>
            </Layout>
        </>
    )
}

export const query = graphql`
    query MyQuery($slug: String) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                title
                role
                category
                stack
                featureImg {
                    childImageSharp {
                        gatsbyImageData(width: 900)
                    }
                }
            }
            body
        }
    }
`