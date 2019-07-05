import { Container, CssBaseline } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
const MySkill = () => (
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

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

const TwitterFollowButton = () => (
  <>
    <h1>Twitter</h1>
    <a href="https://twitter.com/casaub0n">@casaub0n</a>
  </>
)

const BloggerLink = () => {
  return (
    <>
      <h1>Blog</h1>
      <a href="https://casaubonlib.blogspot.com/">blogger</a>
    </>
  )
}

const GitHubLink = () => {
  return (
    <>
      <h1>GitHub</h1>
      <a href="https://github.com/casaub0n">casaub0n</a>
    </>
  )
}

const HeaderStyle = styled.h1`
  font-family: 'NotoSansJP';
  font-weight: normal;
`

const Header = (props: { name: string }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <HeaderStyle>{props.name} Page</HeaderStyle>
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
}

const MainArea = () => (
  <>
    <CssBaseline />
    <Container maxWidth="sm">
      <MySkill />
      <GitHubLink />
      <BloggerLink />
      <TwitterFollowButton />
    </Container>
  </>
)

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
      <Header name="Casaub0n" />
      <MainArea />
      <GlobalStyle />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('.app'))
