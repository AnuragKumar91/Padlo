import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const InstructorImg = (props) => {
  return (
    <>

            
                
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div className="it-team-item">
                      <div className="it-team-thumb-box p-relative">
                        <div className="it-team-thumb">
                          <img src={props.img} alt="Team1" />
                        </div>
                        <div className="it-team-social-box">
                          <button>
                            <i className="fa-sharp fa-light fa-share-nodes"></i>
                          </button>
                          <div className="it-team-social">
                            <Link>
                              <i className="fa-brands fa-facebook"></i>
                            </Link>
                            <Link>
                              <i className="fa-brands fa-pinterest-p"></i>
                            </Link>
                            <Link>
                              <i className="fa-brands fa-instagram"></i>
                            </Link>
                            <Link>
                              <i className="fa-brands fa-linkedin"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="it-team-author-box d-flex align-items-center justify-content-between">
                          <div className="it-team-author-info">
                            <h5 className="it-team-author-name">
                              <Link>{props.headingname}</Link>
                            </h5>
                            <span>{props.profession}</span>
                          </div>
                          <div className="it-team-link">
                            <Link>
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="custom-icon"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  
                 
              
           
            
    </>
  )
}

export default InstructorImg