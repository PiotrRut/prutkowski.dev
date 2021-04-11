import Section from '@components/Section';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FunctionComponent } from 'react';

// Styles override
const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

// About me section
const Contact: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Section id="contact" heading="Contact">
      <Typography variant="subtitle1" className={`wow fadeIn ${classes.root}`}>
        You can get in touch at:
      </Typography>

      <Typography variant="subtitle1">
        <a href="mailto:contact@prutkowski.dev">contact@prutkowski.dev</a>
      </Typography>
    </Section>
  );
};

export default Contact;
