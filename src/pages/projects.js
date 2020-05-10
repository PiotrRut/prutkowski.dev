import React, { useState, useEffect } from "react";
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Layout from "../components/layout";

function Projects() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(`https://api.github.com/users/PiotrRut/repos?sort=created`);
          setRepos(response.data);
      }
      fetchData();
    }, []);
    console.log(repos)

  return (
    <Layout>
      <div>
        <br/>
        <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
          <Grid Grid item lg={12} xs={12} xl={12}>
            <b><h2 className="text-gray-400 text-center wow fadeIn">Projects</h2></b>
            <a href="/"><h6 className="text-center wow fadeIn">Return home</h6></a>
          </Grid>
          <Grid item md={12} lg={12} xl={12}>
            <p className="text-gray-400 text-center wow fadeIn">
              Below you can see all my public repositories, fetched through calls to the GitHub API. 
            </p>
            <p className="text-gray-400 text-center wow fadeIn">
              To visit the repository page for any of them, click the project name. 
            </p>
          </Grid>
          {repos.map((repo, index) => (
          <Grid item
            className="wow fadeIn"
            key={repo.id}
            style={{
              animationDelay: `${index * 100 + 100}ms`,
            }}
          >
            <Paper elevation={3} style={{width: '350px', maxHeight: '110vh', padding: '15px', background: '#212121',}}>
              <Grid direction="column" container spacing={2}>
                <Grid item><i><h5><a className="text-gray-400" href={repo.html_url}>{repo.name}</a></h5></i></Grid>
                <Grid item><h6 className="text-gray-400">{repo.description}</h6></Grid>
                <Grid item>
                  <h6 className="text-gray-400">
                    &oline;&oline;&oline;&oline;&oline;&oline;&oline;&oline;&oline;&oline;&oline;&oline;&oline;&oline;&oline;
                  </h6>
                </Grid>
                <Grid item>
                  <h6 className="text-gray-400">
                    <FiberManualRecordIcon className={repo.language} fontSize="small" style={{paddingBottom: '3px'}}/> {repo.language}
                    &nbsp;/&nbsp;
                      {repo.stargazers_count === 1 ?
                        `${repo.stargazers_count} Star` :
                        `${repo.stargazers_count} Stars`
                      }
                  </h6>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
        </Grid>
      </div>
    </Layout>
  );
}

export default Projects;