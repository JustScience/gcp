import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/Layout'
import Contain from '../components/Contain'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ProjectDetails({ data }) {
    const { body } = data.mdx
    const { title, stack, featureImg } = data.mdx.frontmatter
    const image = getImage(featureImg)

    return (
        <Layout>
            <Contain>
                <h2>{title}</h2>
                <p>{stack}</p>
                <GatsbyImage image={image} alt="Featured Image" />
                <MDXRenderer>{body}</MDXRenderer>
            </Contain>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery($slug: String) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                title
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