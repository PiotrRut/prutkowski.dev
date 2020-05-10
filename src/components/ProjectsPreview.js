import React, { useState, useEffect } from "react";
import axios from 'axios'
import Typist from 'react-typist'
import Grid from '@material-ui/core/Grid'
import Image from 'gatsby-image'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Paper from '@material-ui/core/Paper'

// The top banner with profile pic, name, and some animated text
function ProjectsPreview() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(`https://api.github.com/users/PiotrRut/repos`);
          setRepos(response.data);
      }
      fetchData();
    }, []);
    console.log(repos)

return (
    <section id="proj-preview">
      <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
        <Grid item lg={12} xs={12} xl={12}>
          <b><h2 className="text-gray-400 text-center wow fadeIn">Projects</h2></b>
          <br/>
          <a href="/"><h6 className="text-gray-400 text-center wow fadeIn">Press here for more!</h6></a>
        </Grid>
        {repos.slice(0, 3).map((repo, index) => (
          <Grid item
            className="wow fadeIn"
            key={repo.id}
            style={{
              animationDelay: `${index * 300 + 300}ms`,
            }}
          >
            <Paper elevation={3} style={{width: '300px', maxHeight: '8vh', padding: '15px', background: '#212121',}}>
              <Grid container spacing={2}>
                <Grid item><p className="text-gray-400">{repo.name}</p></Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default ProjectsPreview;   