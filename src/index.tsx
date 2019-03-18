import React from 'react'
import ReactDOM from 'react-dom'
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

const HeaderStyle = styled.header`
  font-family: 'NotoSansJP';
  font-weight: normal;
`

const Header = (props: { name: string }) => <HeaderStyle>{props.name} Page</HeaderStyle>

const App = () => {
  return <>
    <Header name='Casaub0n' />
    <MySkill />
    <GlobalStyle />
  </>
}
ReactDOM.render(<App />, document.querySelector(".app"))
