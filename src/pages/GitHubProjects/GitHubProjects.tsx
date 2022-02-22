import Button from '@components/Button';
import RepoCard from '@components/RepoCard/RepoCard';
import SEO from '@components/SEO';
import { Repo } from '@content/GitProjectsPreview/GitProjectsPreview.models';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { environment } from '@misc/environment';
import axios from 'axios';
import { NextPage } from 'next';
import React, { Fragment, useEffect, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';

import { GitHubProjectsWrapper } from './GitHubProjects.styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

const GitHubProjects: NextPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${environment.apiBaseUrl}/github/repos`
      );
      setRepos(response.data);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <SEO title="GitHub Projects" />
      <Typography
        variant="h4"
        component="h1"
        className={classes.root}
        gutterBottom
      >
        🛠 Github Projects
      </Typography>
      <Typography align="center">
        Below you can see all <b>{repos.length}</b> of my public repositories,
        updated automatically via the GitHub API.
      </Typography>
      <GitHubProjectsWrapper>
        {repos.map((repo, index) => (
          <RepoCard
            language={repo.repoLanguage}
            forks={repo.forks}
            name={repo.repoName}
            stars={repo.stars}
            description={repo.description}
            url={repo.gitUrl}
            key={index}
          />
        ))}
      </GitHubProjectsWrapper>

      <Button
        name="home"
        href="/"
        iconLeft={<BsChevronLeft />}
        label="Back home"
      />
    </Fragment>
  );
};

export default GitHubProjects;
