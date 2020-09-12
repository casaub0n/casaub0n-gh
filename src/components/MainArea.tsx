import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  faJava,
  faJsSquare,
  faLinux,
  faGithub,
  faBlogger,
  faTwitter,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, CssBaseline, Grid } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25em;
`
const MyList = styled.li`
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
`

library.add(
  fab,
  far,
  fas,
  faJava,
  faJsSquare,
  faLinux,
  faGithub,
  faBlogger,
  faTwitter,
  faPython
)

const Hello: React.FC = () => (
  <section>
    <h1>Takashi Yoshida</h1>
    <h2>About me</h2>
    <p>I&apos;m a programmer. My job is web developer.</p>
    <p>
      I love TypeScript and React. Recently, My current focus are JAMStack
      that&apos;s NextJS and more serverless.
    </p>
    <p>
      Now I&apos;m living on Auckland in New Zealand. My work visa can be worked
      full-time job.
    </p>
    <h2>Wrok Experience</h2>
    <h3>Apr 2017-Aug 2019 Programmer</h3>
    <p>EVC Inc. Chiyoda-Ku Tokyo</p>
    <ul>
      <li>Designed engineering Web System for video hosting service</li>
      <li>Guidance and Training of subordinates(Web development)</li>
      <li>Phone support</li>
      <li>Quality Assurance</li>
      <li>Exhibition salesman</li>
      <li>Writing tutorial document</li>
    </ul>
    <h2>Education</h2>
    <h3>Sep 2019 Kaplan International Languages Auckland</h3>
    <p>Studying English</p>
    <h3>
      Apr 2011-Mar 2017 Tokyo University of Technology Hachioji city Japan
    </h3>
    <ul>
      <li>Level of education: Bachelor of Computer Science</li>
      <li>
        Training: Graduation Research(Machine learning for Object detection)
      </li>
      <li>Training: Programming(Python, Java)</li>
      <li>Setting up our lab</li>
      <li>Setting up the server for machine learning(Linux, Cuda, Python)</li>
    </ul>
  </section>
)

const MySkill: React.FC = () => (
  <>
    <h2>Technical Skills</h2>
    <p>I’m able to development Web Services from scratch.</p>
    <ul>
      <MyList>
        Languages: TypeScript, <StyledIcon icon={faPython} />
        Python, <StyledIcon icon={faJava} />
        Java
      </MyList>
      <MyList>VCS: Git(GitHub)</MyList>
      <MyList>Web Framework : JSF, Spring, Struts</MyList>
      <MyList>Front-End : React, JQuery</MyList>
      <MyList>DB: PostgreSQL, MySQL, SQL Server, Oracle DB</MyList>
      <MyList>
        OS: <StyledIcon icon={faLinux} />
        Linux(Ubuntu, Cent OS), Windows, Windows Server
      </MyList>
      <MyList>Publish SubScribe(Redis), ShellScript</MyList>
    </ul>
    <p>We have a video hosting service. My job was full-stack developer.</p>
  </>
)

const TwitterFollowButton: React.FC = () => (
  <>
    <h2>
      <StyledIcon icon={faTwitter} />
      Twitter
    </h2>
    <a href="https://twitter.com/casaub0n">@casaub0n</a>
  </>
)

const BloggerLink: React.FC = () => {
  return (
    <>
      <h2>
        <StyledIcon icon={faBlogger} />
        Blog
      </h2>
      <a href="https://casaubonlib.blogspot.com/">blogger</a>
    </>
  )
}

const GitHubLink: React.FC = () => {
  return (
    <>
      <h2>
        <StyledIcon icon={faGithub} />
        CODE
      </h2>
      <a href="https://github.com/casaub0n">casaub0n</a>
    </>
  )
}

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

const MainArea: React.FC = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Container maxWidth="lg">
          <Grid container alignItems="center" justify="center">
            <main>
              <Hello />
              <MySkill />
              <GitHubLink />
              <BloggerLink />
              <TwitterFollowButton />
            </main>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </>
  )
}

export { MainArea }
