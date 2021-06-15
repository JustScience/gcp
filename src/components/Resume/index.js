import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import { ResumeWrap, ResumeItem } from './style'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ResumeJobs() {
    const data = useStaticQuery(graphql`
        query ResumeJobs {
            allMdx(filter: {frontmatter: {type: {eq: "job"}}}) {
                nodes {
                    frontmatter {
                        clients
                        company
                        endDate
                        location
                        reasonLeft
                        role
                        startDate
                        siteUrl
                        logo {
                            childImageSharp {
                                gatsbyImageData(height: 60)
                            }
                        }
                    }
                    body
                    id
                }
            }
        }
    `)

    const jobs = data.allMdx.nodes

    return (
        <ResumeWrap>
            {jobs.map(job => (
                <ResumeItem key={job.id}>
                    <div>
                        <GatsbyImage image={getImage(job.frontmatter.logo)} alt={job.frontmatter.company + "logo"} />
                        <h3>{job.frontmatter.role}</h3>
                        <h4>{job.frontmatter.company}</h4>
                    </div>
                </ResumeItem>
            ))}
        </ResumeWrap>
    )
}