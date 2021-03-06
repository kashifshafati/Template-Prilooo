import React from "react";
import "./ProcessWork.css";
import video from './assests/video.png'
const ProcessWork = () => {
  return (
    <div class="jumbotron text-center">
      <h1 class="heading">Our Work Process</h1>
      <p class="para">
        The fundamental principles by which Wikipedia operates are the five
        pillars
        <br /> developed many policies and guidelines to improve.
      </p>
      <img src={video} class="img-fluid" alt="..."></img>
    </div>
  );
};

export default ProcessWork;
