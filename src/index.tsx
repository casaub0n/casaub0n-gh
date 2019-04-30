import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Layout, * as Area from './components/bodyStyle'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSansJP';
    src: url('./fonts/NotoSansJP-Regular.otf');
  }
`
const MySkill = () => {
  return (
    <>
      <h1>My Skill</h1>
      <ul>
        <li>Java</li>
        <li>Publish SubScribe(Redis)</li>
        <li>ShellScript</li>
        <li>JavaScript</li>
        <li>Linux</li>
      </ul>
    </>
  )
}

const TwitterFollowButton = () => {
  return (
    <>
      <h2>Twitter</h2>
      <a href="https://twitter.com/casaub0n">@casaub0n</a>
    </>
  )
}

const BloggerLink = () => {
  return (
    <>
      <h2>Blog</h2>
      <a href="https://casaubonlib.blogspot.com/">blogger</a>
    </>
  )
}

const GitHubLink = () => {
  return (
    <>
      <h2>GitHub</h2>
      <a href="https://github.com/casaub0n">casaub0n</a>
    </>
  )
}

const Other = () => {
  return (
    <>
      <GitHubLink />
      <BloggerLink />
      <TwitterFollowButton />
    </>
  )
}

const HeaderStyle = styled.h1`
  font-family: 'NotoSansJP';
  font-weight: normal;
`

const Header = (props: { name: string }) => (
  <header>
    <HeaderStyle>{props.name} Page</HeaderStyle>
  </header>
)

const Hello = () => {
  return (
    <>
      <h1>Home</h1>
      <h2>Profile</h2>
      <ul>
        <li>🎂1991/05/23</li>
        <li>I work as Programmer</li>
        <li>My hobby is to watch movies</li>
      </ul>
    </>
  )
}

const App = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=360,initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Casaub0n WebSite" />
        <meta property="og:site_name" content="Casaub0n WebSite" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@casaub0n" />
        <meta property="og:url" content="https://casaub0n.github.io/" />
        <meta property="og:title" content="Casaub0n WebSite" />
        <title>Casaub0n Page</title>
      </Helmet>
      <BrowserRouter>
        <Layout>
          <Area.header>
            <Header name="Casaub0n" />
          </Area.header>
          <Area.main>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/myskill">Myskill</Link>
              </li>
              <li>
                <Link to="/other">Other</Link>
              </li>
            </ul>
            <Route exact path="/" component={Hello} />
            <Route path="/myskill" component={MySkill} />
            <Route path="/other" component={Other} />
          </Area.main>
        </Layout>
        <GlobalStyle />
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('.app'))
