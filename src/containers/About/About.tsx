import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { socials } from '@misc/socials';
import dayjs from 'dayjs';
import { FunctionComponent } from 'react';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// About me section
const About: FunctionComponent = () => {
  const classes = useStyles();

  // Automatically update my age every year on my birthday
  const bday = dayjs(new Date('1999/8/24'));
  const now = dayjs();
  const age = now.diff(bday, 'year');

  return (
    <section id="about-me" className="overflow-hidden">
      <Grid
        direction="column"
        align-content="center"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid item lg={5} xl={7}>
          <Typography variant="h4" className={`wow fadeIn ${classes.root}`}>
            Who am I?
          </Typography>
        </Grid>
        <Grid item lg={9} xl={10}>
          <p className="text-gray-200 text-left wow fadeIn">
            Great question! My name is Piotr, although people mostly call me
            Peter, and I am a {age} year old programmer and a BSc Computer
            Science student at City, University of London. I was originally born
            in Poland, but for the majority of my life I&#39;ve been living in
            Norway. I am currently working as an intern software engineer at{' '}
            <a href="http://equalsmoney.com">Equals</a>!
          </p>
          <p className="text-gray-200 text-left wow fadeIn">
            In my free time, apart from working on various programming projects,
            I dedicate a lot of time to photography. I&#39;ve been taking
            pictures since I can remember, and the website you&#39;re currently
            on, doubles as my photographic portfolio. In the gallery section,
            you can view some of my shots and download them! I am also a fan of
            space exploration and new technologies <span>🚀</span>
          </p>
          <p className="text-gray-200 text-left wow fadeIn">
            I hope you enjoy this website as much as I&#39;ve enjoyed making it,
            and don&#39;t forget to check out my socials! <span>😁</span>
          </p>
          <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Grid
                  item
                  className="wow fadeIn"
                  key={social.name}
                  style={{
                    animationDelay: `${index * 150 + 150}ms`,
                  }}
                >
                  <IconButton
                    style={{ color: `${social.color}` }}
                    href={social.path}
                    target="_blank"
                    rel="noopener"
                  >
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
};

export default About;
