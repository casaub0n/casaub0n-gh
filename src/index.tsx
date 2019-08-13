import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  faJava,
  faJsSquare,
  faLinux
} from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, CssBaseline } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSansJP';
    src: url('./fonts/NotoSansJP-Regular.otf');
  }
`

library.add(fab, far, fas, faJava, faJsSquare, faLinux)

const MySkill = () => (
  <>
    <h1>My Skill</h1>
    <ul>
      <li>
        <i>
          <FontAwesomeIcon icon={['fab', 'java']} />
        </i>
        Java
      </li>
      <li>Publish SubScribe(Redis)</li>
      <li>ShellScript</li>
      <li>
        <i>
          <FontAwesomeIcon icon={['fab', 'js-square']} />
        </i>
        JavaScript
      </li>
      <li>
        <i>
          <FontAwesomeIcon icon={['fab', 'linux']} />
        </i>
        Linux
      </li>
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
      <h1>
        <Icon
          src="./assets/GitHub-Mark-120px-plus.png"
          width="1.5em"
          height="1.5em"
        />
        CODE
      </h1>
      <a href="https://github.com/casaub0n">casaub0n</a>
    </>
  )
}

const Icon = styled.img`
  height: 1.5em;
  width: 1.5em;
`

const Header = (props: { name: string }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.name} Page
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
    <Provider store={createStore(() => ({}))}>
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
    </Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('.app'))
