import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const divStyle ={
    color: 'firebrick'
  }
  // update the JSX being returned!
  return <div id='home'>Home
    <h1 style={{color: 'firebrick'}}>{name} is a Web Developer from {city}</h1>
    <h2>{name} from {city}</h2>
  </div>;
}

export default Home;
