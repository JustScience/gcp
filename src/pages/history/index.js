import * as React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import Contain from '../../components/Contain'
import ResumeJobs from '../../components/Resume'

// markup
const HistoryPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Design Consulting | Branding &amp; UX Strategy | J Galenti</title>
                <link rel="canonical" href="http://galenti.io" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "url": "https://galenti.io",
                            "name": "Galenti Consulting",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "email": "galenticonsulting@gmail.com",
                                "contactType": "Project Booking"
                            }
                        }
                    `}
                </script>
            </Helmet>
            <Layout>
                <Contain>
                    <h1>J Galenti</h1>
                    <ResumeJobs />
                </Contain>
            </Layout>
        </>
    )
}

export default HistoryPage
