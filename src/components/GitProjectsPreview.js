import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import GradeIcon from '@material-ui/icons/Grade';
import SourceFork from 'mdi-material-ui/SourceFork';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// The projects section on the main page, with three latest
function GitProjectsPreview() {
  const classes = useStyles();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.github.com/users/PiotrRut/repos?sort=created`
      );
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
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Typography variant="subtitle1" className="wow fadeIn">
            <Link to="/projects">Take me to all Github projects &gt;</Link>
          </Typography>
        </Grid>
        <Grid container item justify="center" alignItems="center" spacing={3}>
          {repos
            .filter((repo) => repo.name !== 'PiotrRut')
            .slice(0, 3)
            .map((repo, index) => (
              <Grid
                item
                className="wow fadeIn"
                key={repo.id}
                style={{
                  animationDelay: `${index * 100 + 100}ms`,
                }}
              >
                <Paper
                  elevation={3}
                  style={{
                    width: '300px',
                    maxHeight: '110vh',
                    padding: '15px',
                    background: '#212121',
                  }}
                >
                  <Grid direction="column" container spacing={2}>
                    <Grid item>
                      <i>
                        <h5>
                          <a className="text-gray-400" href={repo.html_url}>
                            {repo.name}
                          </a>
                        </h5>
                      </i>
                    </Grid>
                    <Grid item>
                      <h6 className="text-gray-400">{repo.description}</h6>
                    </Grid>
                    <Grid item>
                      <h6 className="text-gray-400">
                        <FiberManualRecordIcon
                          className={repo.language}
                          fontSize="small"
                          style={{ paddingBottom: '3px' }}
                        />{' '}
                        {repo.language}
                        &nbsp;
                        {repo.stargazers_count >= 1 && (
                          <span>
                            <GradeIcon
                              style={{
                                paddingBottom: '3px',
                                fontSize: 'large',
                              }}
                            />
                            {repo.stargazers_count}
                          </span>
                        )}
                        &nbsp;
                        {repo.forks >= 1 && (
                          <span>
                            <SourceFork
                              style={{ fontSize: '18px', paddingBottom: '3px' }}
                            />
                            {repo.forks}
                          </span>
                        )}
                      </h6>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default GitProjectsPreview;
