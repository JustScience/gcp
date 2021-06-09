import * as React from "react"
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import Contain from '../components/Contain'


// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Contain>
          <h1>Galenti Design Consulting</h1>
          <p>Professional Branding and UX Design Consulting for Startups and Enterprise</p>
        </Contain>
      </Layout>
    </>
  )
}

export default IndexPage
