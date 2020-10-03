import React from "react";
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import { Link } from 'gatsby'
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const socials =
  [
    {
      name: "GitHub",
      path: "https://github.com/PiotrRut",
      icon: FaGithub,
      color: "#fff"
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/piotr-rutkowski-7082a917a/",
      icon: FaLinkedinIn,
      color: "#0e76a8"
    },
    {
      name: "Twitter",
      path: "https://twitter.com/PiotrRut99",
      icon: FaTwitter,
      color: "#00acee"
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/prutkowskii/",
      icon: FaInstagram,
      color: "#C13584"
    },
  ];

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white'
  }
});

// About me section
function About() {
  const classes = useStyles();

  // Automatically update my age every year on my birthday
  var bday = moment(new Date('1999/8/24'));
  var now = moment(Date.now());
  var age = now.diff(bday, 'years')

  return (
    <section id="about-me" className="overflow-hidden">
      <Grid direction="column" align-content="center" justify="center" alignItems="center" container spacing={3}>
        <Grid item lg={5} xl={7}>
          <Typography variant="h4" className={`wow fadeIn ${classes.root}`}>Who am I?</Typography>
        </Grid>
        <Grid item lg={9} xl={10}>
          <h5 className="text-gray-400 text-left wow fadeIn">
            Great question! My name is Piotr, although people mostly call me Peter, and I am a {age} year old programmer
            and second-year BSc Computer Science student at City, University of London.
            I was originally born in Poland, but for the majority
            of my life I&#39;ve been living in Norway. In September 2018 I moved to London to study.
            Before I came to the UK I graduated high school with a diploma in general studies,
            as well as electronics and electrical engineering. I am currently working as an intern software engineer for <a href="http://equalsmoney.com">Equals</a>!
          </h5>
          <br />
          <h5 className="text-gray-400 text-left wow fadeIn">
            In my free time, apart from working on various programming projects, I dedicate a lot of time to photography.
            I&#39;ve been taking pictures since I can remember, and the website you&#39;re currently on, doubles as my
            photographic portfolio.
            In the <Link to="/photogallery">gallery</Link> section, you can view some of my shots and download them!
          </h5>
          <br />
          <h5 className="text-gray-400 text-left wow fadeIn">
            I hope you enjoy this website as much as I&#39;ve enjoyed making it, and don&#39;t forget to
            check out my socials! <span>😁</span>
          </h5>
          <br />
          <Grid container item direction="row" justify="center" alignItems="center" spacing={4}>
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Grid item
                  className="wow fadeIn"
                  key={social.name}
                  style={{
                    animationDelay: `${index * 150 + 150}ms`,
                  }}>
                  <IconButton style={{ color: `${social.color}` }} href={social.path} target="_blank" rel="noopener">
                    <Icon />
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
          <br />
        </Grid>
      </Grid>
    </section>
  );
}

export default About;