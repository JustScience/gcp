import React from 'react'
import Layout from '../../components/Layout'
import Contain from '../../components/Contain'
import ProjectsGallery from './../../components/Gallery'

export default function ProjectsPage() {
    return (
        <Layout>
            <Contain>
                <h1>Portfolio Projects</h1>
                <ProjectsGallery />
            </Contain>
        </Layout>
    )
}