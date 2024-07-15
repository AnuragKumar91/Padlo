import React from "react";
import { Link } from "react-router-dom";
import Shape2_1 from "../../assets/img/hero/shape-2-1.png";
import Shape2_2 from "../../assets/img/hero/shape-2-2.png";
import Shape2_3 from "../../assets/img/hero/shape-2-3.png";
import Shape2_4 from "../../assets/img/hero/shape-2-4.png";
import Shape2_5 from "../../assets/img/hero/shape-2-5.png";
import Shape2_6 from "../../assets/img/hero/shape-2-6.png";
import Shape2_7 from "../../assets/img/hero/shape-2-7.png";
import Shape2_8 from "../../assets/img/hero/shape-2-8.png";
import GirlImg from "../../assets/img/hero/hero-2.png";
import Background from "../../assets/img/hero/hero-bg-1.jpg";
import Button from "../Button";


const HeroSection = () => {
  return (
    <>
      <div
        className="it-hero-2-area it-hero-2-bg fix p-relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="it-hero-2-shape-4">
          <img src={Shape2_7} alt="Shape2_7" />
        </div>

        <div className="it-hero-2-shape-5 d-xl-block">
          <img src={Shape2_3} alt="Shape2_7" />
        </div>
        <div className="it-hero-2-shape-6 d-none d-xl-block">
          <img src={Shape2_2} alt="Shape2_2" />
        </div>
        <div className="it-hero-2-shape-7 d-xl-block">
          <img src={Shape2_1} alt="Shape2_1" />
        </div>
        <div className="it-hero-2-funfact text-center d-none d-xl-block">
          <span>
            <i
              className="purecounter"
              data-purecounter-duration="1"
              data-purecounter-end="30"
            >
              30
            </i>
            k+
          </span>
          <span>Total Student</span>
          <img src={Shape2_8} alt="Shape2_8" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6">
              <div className="it-hero-2-content">
                <h1 className="it-hero-2-title">
                  Develop
                  <span className="p-relative">
                    Your
                    <span className="title-shape">
                      <svg
                        width="168"
                        height="65"
                        viewBox="0 0 168 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332"
                          stroke="#0AB99D"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </span>
                  skills <br />
                  with online courses <br />
                  From A Pro
                </h1>
                <div className="it-hero-2-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="it-hero-2-btn-box d-flex align-items-center">
                  <Button  name="Explore All courses"  />
                    <div className="it-hero-2-play">
                     <Link   className="popup-video">
                      
                     <i className="fas fa-play"></i>
                     </Link>
                      <span>Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="it-hero-2-thumb-box p-relative">
              <div className="it-hero-2-thumb p-relative">
                <img src={GirlImg} alt="true" />
                
                <div className="it-hero-2-shape-1 d-none d-xl-block">
                  <img src={Shape2_6} alt="true" />
                </div>
                <div className="it-hero-2-shape-2 d-none d-xl-block">
                  <img src={Shape2_4} alt="true" />
                </div>
                <div className="it-hero-2-shape-3 d-none d-xl-block">
                  <img src={Shape2_5} alt="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default HeroSection;
