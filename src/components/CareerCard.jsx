import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CareerCard = (props) => {
  return (
<>
<div className="col-xl-6 col-lg-6 mb-30">
              <div className="it-career-item p-relative fix">
                <div className="it-career-content">
                  <span>Start from today</span>
                  <p>
                    Join our training courses & <br />
                    Build your skill.
                  </p>
                  <Link className="it-btn black-bg mr-15">
                    <span>
                      Join now
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="custom-icon"
                      />
                    </span>
                  </Link>
                </div>
                <div className="it-career-thumb">
                  <img src={props.img1} alt="CareerThumb1" />
                </div>
                <div className="it-career-shape-1">
                  <img src={props.img2} alt="CareerShape2" />
                </div>
              </div>
            </div>
</>
  )
}

export default CareerCard