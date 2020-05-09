import React from "react";
import Grid from '@material-ui/core/Grid'

const About = () => {
  return (
    <section id="about-me">
      <Grid direction="column" align-content="center" justify="center" alignItems="center" container spacing={3}>
        <Grid item lg={5} xl={3}>
          <h2 className="text-gray-400 text-center wow fadeIn">About me</h2>
        </Grid>
        <Grid item lg={9} xl={3}>
          <h5 className="text-gray-400 text-left wow fadeIn">
            I am a 20 year old programmer and second year student at City, University of London, 
            where I study BSc Computer Science. I was originally born in Poland, but for the majority 
            of my life I&#39;ve been living in Norway. In september 2018 I moved to London to study. 
            Before I came to the UK, I graduated high school with a diploma in general studies, 
            as well as electronical and electric engineering.
          </h5>
          <br/>
          <h5 className="text-gray-400 text-left wow fadeIn">
            In my free time, apart from working on various programming projects, I dedicate a lot of time to photography. 
            I&#39;ve been taking pictures since I can remember, and the website you&#39;re currently on, doubles as my portfolio. 
            Here you can browse the projects I&#39;ve been working on, 
            as well as some of the shots I&#39;ve taken during the last months (gallery coming really soon).
          </h5>
          <br/>
          <h5 className="text-gray-400 text-left wow fadeIn">
            My passion for programming started a couple years ago, after
            accidentally finding a Python instruction course on YouTube. Ever
            since I have been trying to learn new languages, concepts, and
            technologies. What amazes me most about computer science, is how
            vast it really is, and how much you can do with even a slight
            knowledge of it. I am learning more and more every single day, both in University
            and in my spare time, through various side-projects.
          </h5>
          <br/>
          <br/>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;