import { graphql, Link } from "gatsby"
import React from 'react'
import Layout from '../../components/Layout'
import Contain from '../../components/Contain'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function index({ data }) {
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <Contain>
                <h1>Portfolio Projects</h1>
                <p>{contact}</p>
                <div>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt="thumb" />
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Contain>
        </Layout>
    )
}

export const query = graphql`
query ProjectsPage {
    projects: allMdx {
        nodes {
            frontmatter {
                slug
                stack
                title
                thumb {
                    childImageSharp {
                        gatsbyImageData(width: 200)
                    }
                }
            }
            id
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
}  
`