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

// About me section
function About() {

  // Automatically update my age every year on my birthday
  var bday = moment(new Date('1999/8/24'));
  var now = moment(Date.now());
  var age = now.diff(bday, 'years')

  return (
    <section id="about-me" className="overflow-hidden">
      <Grid direction="column" align-content="center" justify="center" alignItems="center" container spacing={2}>
        <Grid item lg={5} xl={7}>
          <b><h3 className="text-gray-400 text-center wow fadeIn">Who am I?</h3></b>
        </Grid>
        <Grid item lg={9} xl={10}>
          <h5 className="text-gray-400 text-left wow fadeIn">
            Great question! My name is Piotr, although people mostly call me Peter, and I am a {age} year old programmer
            and second-year BSc Computer Science student at City, University of London.
            I was originally born in Poland, but for the majority
            of my life I&#39;ve been living in Norway. In September 2018 I moved to London to study.
            Before I came to the UK I graduated high school with a diploma in general studies,
            as well as electronics and electrical engineering.
          </h5>
          <br />
          <h5 className="text-gray-400 text-left wow fadeIn">
            In my free time, apart from working on various programming projects, I dedicate a lot of time to photography.
            I&#39;ve been taking pictures since I can remember, and the website you&#39;re currently on, doubles as my
            photographic portfolio.
            <br />
            In the <Link to="/photogallery">gallery</Link> section, you can view some of my shots and download them!
          </h5>
          <br />
          <h5 className="text-gray-400 text-left wow fadeIn">
            My passion for programming started a couple of years ago, after
            accidentally finding a Python instruction course on YouTube. Ever
            since I have been trying to learn new languages, concepts, and
            technologies. What amazes me most about computer science, is how
            vast it is, and just how much you can do with even a slight
            knowledge of it. I am learning more and more every single day, both in University
            and in my spare time, through various side-projects.
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