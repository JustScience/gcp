import React from 'react'
import Layout from '../../components/Layout'
import Contain from '../../components/Contain'
import { PageTitle } from './../../components/Text/style'
import ProjectsGallery from './../../components/Gallery'

export default function ProjectsPage() {
    return (
        <Layout>
            <Contain>
                <PageTitle>Portfolio Projects</PageTitle>
                <ProjectsGallery />
            </Contain>
        </Layout>
    )
}