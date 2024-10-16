import React from "react";
import "./Features.css";
import navImg from "../Images/navigate.png";

function Features() {
  return (
    <div class="container">
      <div class="box">
        <div class="info-block">
          <div class="info-header">
            <div className="part1">
              <h2>Add a new Job</h2>
            </div>
            <div className="part2">
              <img src={navImg} alt="" />
            </div>
          </div>
          <div class="info-body">
            <p>
              Track your job applications easily! Add details like job title,
              company, date of application, status updates, and interview
              rounds. Stay organized and manage your application progress in one
              place.
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="info-block">
          <div class="info-header">
            <div className="part1">
              <h2>Explore Companies</h2>
            </div>
            <div className="part2">
              <img src={navImg} alt="" />
            </div>
          </div>
          <div class="info-body">
            <p>
              Explore in-depth insights about various companies. Stay informed
              about the latest industry trends, salary ranges, and career growth
              prospects to help you make informed decisions when applying. Gain
              a competitive edge by learning more about the companies you aspire
              to work with.
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="info-block">
          <div class="info-header">
            <div className="part1">
              <h2>Track your Success Rate</h2>
            </div>
            <div className="part2">
              <img src={navImg} alt="" />
            </div>
          </div>
          <div class="info-body">
            <p>
              Track your success rate by monitoring your job applications,
              interview progress, and offers received. Stay organized and see
              where you're excelling or need improvement to enhance your job
              search strategy and increase your chances of landing the perfect
              role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
