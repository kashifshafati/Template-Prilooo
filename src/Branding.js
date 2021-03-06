import React from "react";
import "./Branding.css";
import { Star, Alarm, Bag, Heart } from "react-bootstrap-icons";

const Branding = () => {
  return (
    <div class="container-fluid ">
      <div class="row Branding___conatiner">
        <div class="col-md-3 col-sm-6">
          <Bag
            height={42}
            width={32}
            color="white"
            className="branding__Icons"
          />
          <div className="branding__divs">
            <p className="branding__pa">
              548
              <br />
              <span className="branding__pa">Project Completed</span>
            </p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <Alarm
            height={42}
            width={32}
            color="white"
            className="branding__Icons"
          />
          <div className="branding__divs">
            <p className="branding__pa">
              1465
              <br />
              <span className="branding__pa">Working Hours</span>
            </p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          {" "}
          <Star
            height={42}
            width={32}
            color="white"
            className="branding__Icons"
          />
          <div className="branding__divs">
            <p className="branding__pa">
              612
              <br />
              <span className="branding__pa">Positive FeedBack</span>
            </p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          {" "}
          <Heart
            height={42}
            width={32}
            color="white"
            className="branding__Icons"
          />
          <div className="branding__divs">
            <p className="branding__pa">
              548
              <br />
              <span className="branding__pa">Happy Clients</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
