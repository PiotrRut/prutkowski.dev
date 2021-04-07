import RepoCard from '@components/RepoCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BACKEND_URL from '@misc/backend';
import axios from 'axios';
import Link from 'next/link';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { Repo } from './GitProjectsPreview.models';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// The projects section on the main page, with three latest
const GitProjectsPreview: FunctionComponent = () => {
  const classes = useStyles();
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}/platforms/github/repos`);
      setRepos(response.data);
    };
    fetchData();
  }, []);

  return (
    <section id="proj-preview">
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={2}
      >
        <Grid item lg={12} xs={12} xl={12}>
          <Typography variant="h4" className={`wow fadeIn ${classes.root}`}>
            GitHub Projects
          </Typography>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Typography
            variant="subtitle1"
            className={`wow fadeIn ${classes.root}`}
          >
            All my GitHub repositories, fetched in real time.
          </Typography>
        </Grid>
        <Grid container item justify="center" alignItems="center" spacing={3}>
          {repos.slice(0, 3).map((repo, index) => (
            <Grid
              item
              className="wow fadeIn"
              key={index}
              style={{
                animationDelay: `${index * 100 + 100}ms`,
              }}
            >
              <RepoCard
                language={repo.language}
                forks={repo.forks}
                name={repo.name}
                stars={repo.stars}
                description={repo.description}
                url={repo.url}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Link href="/projects" passHref>
            <Button
              className="wow fadeIn"
              variant="contained"
              color="inherit"
              endIcon={<NavigateNextIcon />}
            >
              See more
            </Button>
          </Link>
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
};

export default GitProjectsPreview;
