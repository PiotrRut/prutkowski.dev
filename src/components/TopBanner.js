import React, { useState } from "react";
import ProfileImg from '../images/ProfileImg.png'
import Typist from 'react-typist'
import Grid from '@material-ui/core/Grid'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



function TopBanner() {

const [showArrow, setShowArrow] = useState(false);

return (
<section id="top-banner" className="min-h-screen flex items-center container">
  <Grid direction="column" justify="center" align-content="center" alignItems="center" container spacing={5}>
    <Grid item className="List" lg={6} xl={5}>
      <img src={`${ProfileImg}`} height="400" width="400"/>
    </Grid>
    <Grid item className="List" lg={6} xl={5}>
      <h1 className="text-gray-200 text-center wow fadeIn">Piotr Rutkowski</h1>
      <Typist cursor={{ show: false }} onTypingDone={() => setShowArrow(true)} className="my-2 flex">
        <code>
          <span className="text-gray-400 text-center">console</span>
          <span className="text-blue-600 text-center">.log</span>
          <span className="text-gray-400 text-center">(</span>
          <span className="text-green-600 text-center">&#39;Welcome to my website&#39;</span>
          <span className="text-gray-400 text-center">)</span>
        </code>
      </Typist>
    </Grid>
    <Grid item className="w-full md:w-auto h-6 my-6">
      { showArrow && <KeyboardArrowDownIcon className="wow fadeIn" fontSize="large" style={{color: 'white'}}/> }
    </Grid>
  </Grid>
</section>
  );
}

 export default TopBanner;   