import React from "react";
import "../../scss/custom.scss";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import snppic from "./snp.png";
import nsnppic from "./nsnp.png";
function LandingPage() {
  return (
    <div className="welcome">
      <div className="greet">
        <h1>Welcome to WebSnapse 2.1</h1>
        <br />
        <p>a visual simulator for Spiking Neural Networks:</p>
        <p>Please Hover on a side for specifications</p>
      </div>
      <div className="LinkContainer">
        <div className="divide-lside">
          SN P Simulation
          <Link to="http://snapse.website/WebSnapse2.0-NSNP-Extension">
            <img src={snppic} alt="" />
            <br />
            <div class="SNP">
              -Traditional
              <br />
              -1:1 Node to number of Spikes
              <br />
              -Linear rules
            </div>
          </Link>
        </div>
        <div className="divide-rside">
          NSN P Simulation
          <Link to="http://snapse.website/NSNP-Extension">
            <img src={nsnppic} alt="" />
            <br />
            <div className="NSNP">
              -1:Many Node to number of Spikes
              <br />
              -can contain non-linear rule functions
              <br />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
