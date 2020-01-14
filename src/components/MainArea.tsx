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
import { Container, CssBaseline } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

const FaIcon = styled.span`
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
`;

const MyList = styled.li`
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
`;

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

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

const MySkill: React.SFC = () => (
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

const TwitterFollowButton: React.SFC = () => (
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

const BloggerLink: React.SFC = () => {
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

const GitHubLink: React.SFC = () => {
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

type Props = {
  name: string;
};

const Header: React.SFC<Props> = (props: { name: string }) => {
  const classes = useStyles();

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
  );
};

const MainArea: React.FC = () => (
  <>
    <Header name="Casaub0n" />
    <CssBaseline />
    <Container maxWidth="sm">
      <MySkill />
      <GitHubLink />
      <BloggerLink />
      <TwitterFollowButton />
    </Container>
  </>
);

export { MainArea };
