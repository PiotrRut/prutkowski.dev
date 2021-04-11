import RepoCard from '@components/RepoCard/RepoCard';
import SEO from '@components/SEO';
import { Repo } from '@content/GitProjectsPreview/GitProjectsPreview.models';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import BACKEND_URL from '@misc/backend';
import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';

import { GitHubProjectsWrapper } from './GitHubProjects.styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// The projects page, with all of my projects fetched through the GitHub API
const GitHubProjects: NextPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}/platforms/github/repos`);
      setRepos(response.data);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <SEO title="GitHub Projects" />
      <br />
      <Typography variant="h4" component="h1" className={classes.root}>
        🛠 Github Projects
      </Typography>
      <br />
      <Typography className="text-gray-200 text-center wow fadeIn">
        Below you can see all <b>{repos.length}</b> of my public repositories,
        updated automatically via the GitHub API.
      </Typography>
      <Typography className="text-gray-200 text-center wow fadeIn">
        To visit the GitHub page for any of them, click the project name.
      </Typography>
      <GitHubProjectsWrapper>
        {repos.map((repo, index) => (
          <RepoCard
            language={repo.language}
            forks={repo.forks}
            name={repo.name}
            stars={repo.stars}
            description={repo.description}
            url={repo.url}
            key={index}
          />
        ))}
      </GitHubProjectsWrapper>

      <Link href="/">
        <Button
          variant="contained"
          color="inherit"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Return home
        </Button>
      </Link>
    </Fragment>
  );
};

export default GitHubProjects;
