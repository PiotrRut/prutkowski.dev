import Layout from '@components/Layout';
import RepoCard from '@components/RepoCard/RepoCard';
import SEO from '@components/SEO';
import { Repo } from '@containers/GitProjectsPreview/GitProjectsPreview.models';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import BACKEND_URL from '@misc/backend';
import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    <Layout>
      <SEO title="GitHub Projects" />
      <div className="container grid-cols-1 gap-y-16">
        <br />
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
          container
          spacing={3}
        >
          <Grid item lg={12} xs={12} xl={12}>
            <br />
            <Typography variant="h4" component="h1" className={classes.root}>
              🛠 Github Projects
            </Typography>
          </Grid>
          <Grid item md={12} lg={12} xl={12}>
            <Typography className="text-gray-200 text-center wow fadeIn">
              Below you can see all <b>{repos.length}</b> of my public
              repositories, updated automatically via the GitHub API.
            </Typography>
            <Typography className="text-gray-200 text-center wow fadeIn">
              To visit the GitHub page for any of them, click the project name.
            </Typography>
          </Grid>
          <Grid
            container
            item
            justify="center"
            alignItems="center"
            spacing={3}
            xs={12}
          >
            {repos.map((repo, index) => (
              <Grid
                item
                className="wow fadeIn"
                key={index}
                style={{
                  animationDelay: `${index * 70 + 70}ms`,
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
        </Grid>
        <br />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item lg={12} xs={12} xl={12}>
            <br />
            <Link href="/">
              <Button
                variant="contained"
                color="inherit"
                startIcon={<KeyboardBackspaceIcon />}
              >
                Return home
              </Button>
            </Link>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default GitHubProjects;
