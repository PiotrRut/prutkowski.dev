import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import GradeIcon from '@material-ui/icons/Grade';

// The projects section on the main page, with three latest
function ProjectsPreview() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.github.com/users/PiotrRut/repos?sort=created`);
      setRepos(response.data);
    }
    fetchData();
  }, []);

  return (
    <section id="proj-preview">
      <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
        <Grid item lg={12} xs={12} xl={12}>
          <b><h3 className="text-gray-400 text-center wow fadeIn">...and some that I&#39;ve done.</h3></b>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <h6 className="text-gray-400 text-center wow fadeIn">
            Below you can only see three of my latest projects.
            <h6><Link to="/projects">Press here to see all of them!</Link></h6>
          </h6>
        </Grid>
        {repos.slice(0, 3).map((repo, index) => (
          <Grid item
            className="wow fadeIn"
            key={repo.id}
            style={{
              animationDelay: `${index * 200 + 200}ms`,
            }}
          >
            <Paper elevation={3} style={{ width: '300px', maxHeight: '110vh', padding: '15px', background: '#212121', }}>
              <Grid direction="column" container spacing={2}>
                <Grid item><i><h5><a className="text-gray-400" href={repo.html_url}>{repo.name}</a></h5></i></Grid>
                <Grid item><h6 className="text-gray-400">{repo.description}</h6></Grid>
                <Grid item>
                  <h6 className="text-gray-400">
                    <FiberManualRecordIcon className={repo.language} fontSize="small" style={{ paddingBottom: '3px' }} /> {repo.language}
                    &nbsp;
                      {repo.stargazers_count >= 1 &&
                      <span><GradeIcon style={{ paddingBottom: '3px', fontSize: 'large' }} />{repo.stargazers_count}</span>
                    }
                  </h6>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default ProjectsPreview;   