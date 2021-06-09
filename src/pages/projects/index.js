import { graphql, Link } from "gatsby"
import React from 'react'
import Layout from '../../components/Layout'
import Contain from '../../components/Contain'

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
                thumb
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