import * as React from "react"
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import Contain from '../components/Contain'
import Hero from '../components/Hero'


// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Contain>
          <Hero />
        </Contain>
      </Layout>
    </>
  )
}

export default IndexPage
