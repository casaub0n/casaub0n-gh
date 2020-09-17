import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  faLinux,
  faGithub,
  faBlogger,
  faTwitter,
  faPython,
  faJsSquare,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Grid } from '@material-ui/core'
import React from 'react'

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
  faPython,
  faCoffee
)

const iconComponentStyle: React.CSSProperties = {
  width: '1em',
  height: '1em',
  marginRight: '0.25em',
}

const Hello: React.FC = () => (
  <>
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
  </>
)

const MySkill: React.FC = () => {
  return (
    <>
      <h2>Technical Skills</h2>
      <p>I’m able to development Web Services from scratch.</p>
      <ul>
        <li>
          Languages: TypeScript,{' '}
          <FontAwesomeIcon style={iconComponentStyle} icon={faPython} />
          Python, <FontAwesomeIcon style={iconComponentStyle} icon={faJava} />
          Java
        </li>
        <li>VCS: Git(GitHub)</li>
        <li>Web Framework : JSF, Spring, Struts</li>
        <li>Front-End : React, JQuery</li>
        <li>DB: PostgreSQL, MySQL, SQL Server, Oracle DB</li>
        <li>
          OS: <FontAwesomeIcon style={iconComponentStyle} icon={faLinux} />
          Linux(Ubuntu, Cent OS), Windows, Windows Server
        </li>
        <li>Publish SubScribe(Redis), ShellScript</li>
      </ul>
      <p>We have a video hosting service. My job was full-stack developer.</p>
    </>
  )
}

const MainArea: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" justify="center">
        <main>
          <Hello />
          <MySkill />
          <h2>
            <FontAwesomeIcon style={iconComponentStyle} icon={faGithub} />
            CODE
          </h2>
          <a href="https://github.com/casaub0n">casaub0n</a>
          <h2>
            <FontAwesomeIcon style={iconComponentStyle} icon={faBlogger} />
            Blog
          </h2>
          <a href="https://casaubonlib.blogspot.com/">blogger</a>
          {/* <TwitterFollowButton /> */}
          <h2>
            <FontAwesomeIcon style={iconComponentStyle} icon={faTwitter} />
            Twitter
          </h2>
          <a href="https://twitter.com/casaub0n">@casaub0n</a>
        </main>
      </Grid>
    </Container>
  )
}

export { MainArea }
