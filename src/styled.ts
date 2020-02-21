import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
  * {
      text-decoration: none;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
    }
  body, html {
    width: 100%;
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.4;
    background: white;
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 2rem;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'EB Garamond', serif;
    font-weight: bold;
  }
  p, li, div, a {
    font-family: 'EB Garamond', serif;
  }
  *:focus {
    outline: none;
  }
`

export {
  DefaultStyles
}