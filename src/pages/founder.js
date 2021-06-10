import * as React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Contain from '../components/Contain'


// markup
const FounderPage = () => {
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
                </Contain>
            </Layout>
        </>
    )
}

export default FounderPage
