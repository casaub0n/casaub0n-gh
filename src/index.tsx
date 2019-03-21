import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

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

const HeaderStyle = styled.h1`
  font-family: 'NotoSansJP';
  font-weight: normal;
`

const Header = (props: { name: string }) => <header><HeaderStyle>{props.name} Page</HeaderStyle></header>

const App = () => {
  return <>
    <Helmet>
      <meta property='og:type' content='website'/>
      <meta property='og:description' content='Casaub0n WebSite'/>
      <meta property='og:site_name' content='Casaub0n WebSite'/>
      <title>Casaub0n Page</title>
    </Helmet>
    <Header name='Casaub0n' />
    <MySkill />
    <GlobalStyle />
  </>
}
ReactDOM.render(<App />, document.querySelector(".app"))
