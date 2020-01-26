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
import { Container, CssBaseline, Link, Grid } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
`;

const FaIcon = styled.span`
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
`;

const MyList = styled.li`
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
`;

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

const mainStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

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

const MySkill: React.FC = () => (
  <>
    <h1>My Skill</h1>
    <ul>
      <MyList>
        <FaIcon>
          <FontAwesomeIcon icon={["fab", "java"]} />
        </FaIcon>
        Java
      </MyList>
      <MyList>Publish SubScribe(Redis)</MyList>
      <MyList>ShellScript</MyList>
      <MyList>
        <FaIcon>
          <FontAwesomeIcon icon={["fab", "js-square"]} />
        </FaIcon>
        JavaScript
      </MyList>
      <MyList>
        <FaIcon>
          <FontAwesomeIcon icon={["fab", "linux"]} />
        </FaIcon>
        Linux
      </MyList>
    </ul>
  </>
);

const TwitterFollowButton: React.FC = () => (
  <>
    <h1>
      <FaIcon>
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </FaIcon>
      Twitter
    </h1>
    <a href="https://twitter.com/casaub0n">@casaub0n</a>
  </>
);

const BloggerLink: React.FC = () => {
  return (
    <>
      <h1>
        <FaIcon>
          <FontAwesomeIcon icon={["fab", "blogger"]} />
        </FaIcon>
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
        <FaIcon>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </FaIcon>
        CODE
      </h1>
      <a href="https://github.com/casaub0n">casaub0n</a>
    </>
  );
};

// These are types for navigation bar
type Section = { title: string; url: string };
type Props = {
  sections: Section[];
};

const Header: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { sections } = props;

  return (
    <>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

const sections = [{ title: "home", url: "#" }];

const theme = createMuiTheme({
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
  const classes = mainStyles();

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Container maxWidth="lg">
          <Header sections={sections} />
          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Grid item xs={12} md={8}>
                <MySkill />
                <GitHubLink />
                <BloggerLink />
                <TwitterFollowButton />
              </Grid>
            </Grid>
          </main>
        </Container>
      </MuiThemeProvider>
    </>
  );
};

export { MainArea };
