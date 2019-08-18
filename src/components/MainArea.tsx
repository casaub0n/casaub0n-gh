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
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import { Github } from 'styled-icons/boxicons-logos/Github'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { Pen } from 'styled-icons/boxicons-regular/Pen'

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
    <h1>
      <Twitter size="2em" />
      Twitter
    </h1>
    <a href="https://twitter.com/casaub0n">@casaub0n</a>
  </>
)

const BloggerLink = () => {
  return (
    <>
      <h1>
        <Pen size="2em" />
        Blog
      </h1>
      <a href="https://casaubonlib.blogspot.com/">blogger</a>
    </>
  )
}

const GitHubLink = () => {
  return (
    <>
      <h1>
        <Github size="2em" />
        CODE
      </h1>
      <a href="https://github.com/casaub0n">casaub0n</a>
    </>
  )
}

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
    <Helmet>
      <meta name="viewport" content="width=360,initial-scale=1" />
      <meta name="description" content="Casaub0n WebSite" />
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
    <CssBaseline />
    <Container maxWidth="sm">
      <MySkill />
      <GitHubLink />
      <BloggerLink />
      <TwitterFollowButton />
    </Container>
    <GlobalStyle />
  </>
)

export { MainArea }
