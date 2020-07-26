import React from "react";
import classes from './Logos.module.css';

const logos = () => {
  return (
    <div className={classes.Div}>
      <img
        src="./assets/facebook.png"
        alt="jpg"
         
      />
      <img
        src="./assets/instagram.png"
        alt="jpg"
         
      />
      <img
        src="./assets/google.png"
        alt="jpg"
        
      />
      <img
        src="./assets/twitter.png"
        alt="jpg"
         
      />
    </div>
  );
};

export default logos;
