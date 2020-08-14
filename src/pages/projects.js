import React, { useState, useEffect } from "react";
import { Link } from 'gatsby'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SEO from '../components/seo'
import GradeIcon from '@material-ui/icons/Grade';
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SourceFork from 'mdi-material-ui/SourceFork'

import Layout from "../components/layout";

// The projects page, with all of my projects fetched through the GitHub API
function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.github.com/users/PiotrRut/repos?sort=created`);
      setRepos(response.data);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <SEO keywords={[`piotr`, `rutkowski`, `prutkowski`, `projects`, `github`]} title="Projects" />
      <div className="container grid-cols-1 row-gap-16">
        <br />
        <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
          <Grid item lg={12} xs={12} xl={12}>
            <br />
            <b><h2 className="text-gray-400 text-center wow fadeIn"><span>🛠</span> My Projects</h2></b>
            <h6 className="text-center wow fadeIn"><Link to="/">Return home</Link></h6>
          </Grid>
          <Grid item md={12} lg={12} xl={12}>
            <p className="text-gray-400 text-center wow fadeIn">
              Below you can see all <b>{repos.length}</b> of my public repositories, updated automatically via the GitHub API.
            </p>
            <p className="text-gray-400 text-center wow fadeIn">
              To visit the GitHub page for any of them, click the project name.
            </p>
          </Grid>
          {repos.filter(repo => repo.name !== 'PiotrRut').map((repo, index) => (
            <Grid item
              className="wow fadeIn"
              key={repo.id}
              style={{
                animationDelay: `${index * 100 + 100}ms`,
              }}
            >
              <Paper elevation={3} style={{ width: '350px', maxHeight: '110vh', padding: '15px', background: '#212121', }}>
                <Grid direction="column" container spacing={2}>
                  <Grid item><i><h5><a className="text-gray-400" href={repo.html_url}>{repo.name}</a></h5></i></Grid>
                  <Grid item><h6 className="text-gray-400">{repo.description}</h6></Grid>
                  <Grid item>
                    <h6 className="text-gray-400">
                      <FiberManualRecordIcon
                        className={repo.language}
                        fontSize="small"
                        style={{ paddingBottom: '3px' }}
                      /> {repo.language}
                      &nbsp;
                      {repo.stargazers_count >= 1 &&
                        <span><GradeIcon fontSize="small" style={{ paddingBottom: '3px' }} />{repo.stargazers_count}</span>
                      }
                      &nbsp;
                      {
                      repo.forks >= 1 &&
                      <span><SourceFork style={{fontSize: '18px', paddingBottom: '3px' }}/>{repo.forks}</span>
                      }
                    </h6>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <br />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item lg={12} xs={12} xl={12}>
            <br />
            <Link className="no-underline text-black" to="/">
              <Button variant="contained" color="inherit" startIcon={<KeyboardBackspaceIcon />}>
                Return home
            </Button>
            </Link>
          </Grid>
        </Grid>
        <br /><br /><br />
      </div>
    </Layout>
  );
}

export default Projects;