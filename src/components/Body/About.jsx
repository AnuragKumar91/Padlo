import React from 'react'
import Button from "../Button"
import Shape from "../../assets/img/about/shape-1-4.png";
import Thumb1 from "../../assets/img/about/thumb-1.jpg"
import Thumb2 from "../../assets/img/about/thumb-2.jpg";
import Thumb3 from "../../assets/img/about/thumb-3.jpg";
import Shape1 from "../../assets/img/about/shape-1-1.png";
import Shape2 from "../../assets/img/about/shape-1-2.png";
import Shape3 from "../../assets/img/about/shape-1-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';





const About = () => {
  return (
   <>
   <div className="it-about-area p-relative pt-185 pb-185">
        <div className="it-about-shape-4 d-none d-md-block">
          <img src={Shape} alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="it-about-thumb-box p-relative">
                <div className="it-about-thumb-1 d-none d-xl-block">
                  <img src={Thumb1} alt="Thumb1"/>
                </div>
                <div className="it-about-thumb-2 d-none d-xl-block">
                  <img src={Thumb2} alt="Thumb2" />
                </div>
                <div className="it-about-main-thumb text-xl-end text-center">
                  <img src={Thumb3} alt="Thumb3" />
                </div>
                <div className="it-about-shape-1 d-none d-md-block">
                  <img src={Shape1} alt="Shape1" />
                </div>
                <div className="it-about-shape-2 d-none d-md-block">
                  <img src={Shape2} alt="Shape2" />
                </div>
                <div className="it-about-shape-3 d-none d-md-block">
                  <img src={Shape3} alt="Shape3" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-about-right-box">
                <div className="it-about-title-box mb-20">
                  <span className="it-section-subtitle">Our about us</span>
                  <h4 className="it-section-title">
                    Learn & Grow your
                    <span className="p-relative z-index">skills <FontAwesomeIcon icon={faChevronDown} className="title-shape-2" /></span>
                    <br />
                    From anywhere
                  </h4>
                </div>
                <div className="it-about-text pb-10">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris..
                  </p>
                </div>
                <div
                  className="it-about-content-wrapper d-flex align-items-center justify-content-between pb-15"
                >
                  <div className="it-about-content">
                    <h5>Flexible classNamees</h5>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                  <div className="it-about-content">
                    <h5>Flexible classNamees</h5>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                </div>
              <Button name="More About us ">

              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default About