import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Contain from '../components/Contain'

export default function ProjectDetails({data}) {
    const {title, stack, featureImg} = data.mdx.frontmatter

    return (
        <Layout>
            <Contain>
                <h2>{title}</h2>
                <p>{stack}</p>
                <p>{featureImg}</p>
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
                featureImg
            }
            body
        }
    }
`