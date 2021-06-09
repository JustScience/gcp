import { createGlobalStyle } from 'styled-components'

const textColor = "#222"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        line-height: 100%;
        margin: 0;
        padding: 0;
    }

    html,body {
        color: ${textColor};
        font-family: 'Baloo Tammudu 2', -apple-system, Arial, Helvetica, sans-serif, sans-serif;
        font-size: 1em;
        height: 100%;
        letter-spacing: 0.1em;
        min-height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100vw;
        min-width: 100vw;
    }

    a,
    a:visited,
    a:any-link {
        color: ${textColor};
        text-decoration: none;
    }
`

export default GlobalStyle