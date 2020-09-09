import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faJava,
  faJsSquare,
  faLinux,
  faGithub,
  faBlogger,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25em;
`
const MyList = styled.li`
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
`;

library.add(
  fab,
  far,
  fas,
  faJava,
  faJsSquare,
  faLinux,
  faGithub,
  faBlogger,
  faTwitter
);

const Hello: React.FC = () => <section>
  <h1>Takashi Yoshida</h1>
  <p>Hello, I'm a programmer. My job is web developer.</p>
  <p>I love TypeScript and React. Recently, I'm forcusing on JAMStack that's NextJS and more over, serverless.</p>
  <p>Now I'm living on Auckland in New Zealand. I can work full-time job.</p>
</section>

const MySkill: React.FC = () => (
  <>
    <h1>My Skill</h1>
    <ul>
      <MyList>
        <StyledIcon icon={faJava} />
        Java
      </MyList>
      <MyList>Publish SubScribe(Redis)</MyList>
      <MyList>ShellScript</MyList>
      <MyList>
        <StyledIcon icon={faJsSquare} />
        JavaScript
      </MyList>
      <MyList>
          <StyledIcon icon={faLinux} />
        Linux
      </MyList>
    </ul>
  </>
);

const TwitterFollowButton: React.FC = () => (
  <>
    <h1>
      <StyledIcon icon={faTwitter} />
      Twitter
    </h1>
    <a href="https://twitter.com/casaub0n">@casaub0n</a>
  </>
);

const BloggerLink: React.FC = () => {
  return (
    <>
      <h1>
        <StyledIcon icon={faBlogger} />
        Blog
      </h1>
      <a href="https://casaubonlib.blogspot.com/">blogger</a>
    </>
  );
};

const GitHubLink: React.FC = () => {
  return (
    <>
      <h1>
        <StyledIcon icon={faGithub} />
        CODE
      </h1>
      <a href="https://github.com/casaub0n">casaub0n</a>
    </>
  );
};

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

const MainArea: React.FC = () => {

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Container maxWidth="lg" >
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
  );
};

export { MainArea };