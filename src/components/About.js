import React from "react";
import { image } from "../data/data";

function About() {
  // const imgalt= {
  //  alt : "I made this"
  //}
  return (
  <div id='about'>About
  <h2>About Me</h2>
  <p>I like learning!</p>
  <img src={image} alt="I made this"></img></div>
  )
}

export default About;
