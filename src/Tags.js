import React from "react";
import "./Tags.css";
import a1 from "./assests/a1.png";
import a2 from "./assests/a2.png";
import a3 from "./assests/a3.png";
import a4 from "./assests/a4.png";
import a5 from "./assests/a4.png";

const Tags = () => {
  return (
    <div class="container-fluid ">
      <div class="row Tags__conatiners ">
        <div class="col-md-3 col-sm-6 pt-5 pb-5">
          <img src={a1} alt="" />
        </div>
        <div class="col-md-3 col-sm-6 pt-5 pb-5">
          <img src={a2} alt="" />
        </div>
        <div class="col-md-3 col-sm-6 pt-5 pb-5">
          <img src={a3} alt="" />
        </div>
        <div class="col-md-3 col-sm-6 pt-5 pb-5">
          <img src={a4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tags;
