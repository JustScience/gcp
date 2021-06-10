import { useStaticQuery, graphql, Link } from "gatsby"
import React from 'react'
import { GalleryWrap, GalleryCard } from './style'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ProjectsGallery() {
    const data = useStaticQuery(graphql`
        query ProjectsList {
            allMdx {
                nodes {
                    frontmatter {
                        category
                        role
                        slug
                        stack
                        title
                        thumb {
                            childImageSharp {
                                gatsbyImageData(height: 240)
                            }
                        }
                    }
                    id
                }
            }
        }
    `)

    const projects = data.allMdx.nodes

    return (
        <GalleryWrap>
            {projects.map(project => (
                <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                    <GalleryCard>
                        <GatsbyImage image={getImage(project.frontmatter.thumb)} alt="thumb" />
                        <h3>{project.frontmatter.title}</h3>
                        <h4>{project.frontmatter.role}</h4>
                        <p>{project.frontmatter.category}</p>
                        <p>{project.frontmatter.stack}</p>
                    </GalleryCard>
                </Link>
            ))}
        </GalleryWrap>
    )
}