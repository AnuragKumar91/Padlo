import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button"
import bgImg1 from "../../assets/img/video/bg-1-1.jpg";
import ShapeImg1 from "../../assets/img/video/shape-1-1.png";
import ShapeImg2 from "../../assets/img/video/shape-1-2.png";
import ShapeImg3 from "../../assets/img/video/shape-1-3.png";
import ShapeImg4 from "../../assets/img/video/shape-1-4.png";
import ShapeImg5 from "../../assets/img/video/shape-1-5.png";

const Session = () => {
  return (
    <>
      <div
        className="it-video-area it-video-bg p-relative fix pt-100 pb-95"
        style={{ backgroundImage: `url(${bgImg1})` }}
      >
        <div className="it-video-shape-1 d-none d-lg-block">
          <img src={ShapeImg1} alt="ShapeImg1" />
        </div>
        <div className="it-video-shape-2 d-none d-lg-block">
          <img src={ShapeImg2} alt="ShapeImg2" />
        </div>
        <div className="it-video-shape-3 d-none d-lg-block">
          <img src={ShapeImg3} alt="ShapeImg3" />
        </div>
        <div className="it-video-shape-4 d-none d-lg-block">
          <img src={ShapeImg4} alt="ShapeImg4" />
        </div>
        <div className="it-video-shape-5 d-none d-lg-block">
          <img src={ShapeImg5} alt="ShapeImg5" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
              <div className="it-video-content">
                <span>Join Our New Session</span>
                <h3 className="it-video-title">
                  Call To Enroll Your Child <br />
                  <Link>(+91)958423452</Link>
                </h3>
                <div className="it-video-button">
                  <Button name="Join with us"></Button>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-3 col-sm-3">
              <div className="it-video-play-wrap d-flex justify-content-start justify-content-md-end align-items-center">
                <div className="it-video-play text-center">
                  <Link className="popup-video play">
                    <i className="fas fa-play"></i>
                  </Link>
                  <Link className="text">watch now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session;
