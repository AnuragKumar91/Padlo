import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TeamShapeImg1 from "../../assets/img/team/shape-1-1.png";
import TeamShapeImg2 from "../../assets/img/team/shape-1-2.png";
import TeamShapeImg3 from "../../assets/img/team/shape-1-3.png";
import Team1 from "../../assets/img/team/team-1-1.png";
import Team2 from "../../assets/img/team/team-1-2.png";
import Team3 from "../../assets/img/team/team-1-3.png";
import Team4 from "../../assets/img/team/team-1-4.png";


import InstructorImg from "../InstructorImg";

const Intructor = () => {
  return (
    <>
      <div className="it-team-area p-relative pt-120 pb-120">
        <div className="it-team-shape-1 d-none d-xl-block">
          <img src={TeamShapeImg1} alt="TeamShapeImg1" />
        </div>
        <div className="it-team-shape-2 d-none d-xl-block">
          <img src={TeamShapeImg2} alt="TeamShapeImg2" />
        </div>
        <div className="it-team-shape-3 d-none d-xl-block">
          <img src={TeamShapeImg3} alt="TeamShapeImg3" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="it-team-left">
                <div className="it-team-title-box pb-15">
                  <span className="it-section-subtitle">OUR INSTRUCTOR</span>
                  <h4 className="it-section-title">
                    Meet Our
                    <span className="p-relative z-index">
                      Expert
                      <svg
                        className="title-shape-2"
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
                    <br />
                    Instructor
                  </h4>
                </div>
                <div className="it-team-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris..
                  </p>
                </div>
                <div className="it-team-button">
                  <Link className="it-btn mr-15">
                    <span>
                      Contact us
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="custom-icon"
                      />
                    </span>
                  </Link>
                  <Link className="it-btn black-bg">
                    <span>
                      Explore courses
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="custom-icon"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
               <div className="col-xl-7 col-lg-7">
              <div div className="it-team-right-box">

         <div className="row">

        
             
              <InstructorImg   
                img={Team1} 
                headingname="Esther Howard"
                profession="Junior Instructor"
                />
                 <InstructorImg   
                img={Team2} 
                headingname="Beverly Hathcock"
                profession="Junior Instructor"
                />
                <InstructorImg   
                img={Team3} 
                headingname="Donald Gonzales"
                profession="Junior Instructor"
                />
                <InstructorImg   
                img={Team4} 
                headingname="Eddie Lenz"
                profession="Junior Instructor"
                />
                </div>
                </div>
              </div>
                
                
              
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Intructor;
