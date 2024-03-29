import * as React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Contain from '../components/Contain'
import Hero from '../components/Hero'
import ProjectsGallery from "../components/Gallery"
// import { SectionTitle } from '../components/Text/style'

// markup
const IndexPage = () => {
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
        <Hero />
        <Contain>
          <h2>This page is under construction. In the mean time please visit my <a href="https://jgalenti.myportfolio.com/">temporary portfolio</a>.</h2>
        </Contain>
      </Layout>
    </>
  )
}

export default IndexPage
