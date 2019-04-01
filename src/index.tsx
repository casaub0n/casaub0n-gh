import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import Layout, * as Area from './components/bodyStyle'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSansJP';
    src: url('./fonts/NotoSansJP-Regular.otf');
  }
`
const MySkill = () => {
  return <>
    <h1>My Skill</h1>
      <ul>
        <li>Java</li>
        <li>Publish SubScribe(Redis)</li>
        <li>ShellScript</li>
        <li>JavaScript</li>
        <li>Linux</li>
      </ul>
  </>
}

const TwitterFollowButton = () => {
  return <>
    <h1>Twitter</h1>
    <a href="https://twitter.com/casaub0n">@casaub0n</a>
  </>
}

const BloggerLink = () => {
  return <>
    <h1>Blog</h1>
    <a href="https://casaubonlib.blogspot.com/">blogger</a>
  </>
}

const GitHubLink = () => {
  return <>
    <h1>GitHub</h1>
    <a href="https://github.com/casaub0n">casaub0n</a>
  </>
}

const HeaderStyle = styled.h1`
  font-family: 'NotoSansJP';
  font-weight: normal;
`

const Header = (props: { name: string }) => <header><HeaderStyle>{props.name} Page</HeaderStyle></header>

const App = () => {
  return <>
    <Helmet>
      <meta name="viewport" content="width=360,initial-scale=1"/>
      <meta property='og:type' content='website'/>
      <meta property='og:description' content='Casaub0n WebSite'/>
      <meta property='og:site_name' content='Casaub0n WebSite'/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@casaub0n"/>
      <meta property="og:url" content="https://casaub0n.github.io/"/>
      <meta property="og:title" content="Casaub0n WebSite" />
      <title>Casaub0n Page</title>
    </Helmet>
    <Layout>
      <Area.header><Header name='Casaub0n' /></Area.header>
      <Area.main>
        <MySkill />
        <GitHubLink />
        <BloggerLink />
        <TwitterFollowButton />
      </Area.main>
    </Layout>
    <GlobalStyle />
  </>
}
ReactDOM.render(<App />, document.querySelector(".app"))
