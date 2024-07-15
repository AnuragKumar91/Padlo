import React from 'react'
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BannerSection from '../../../BannerSection';
import { Link } from 'react-router-dom';
import Subscribe from '../../../Body/Subscribe';


const TeacherDetails = () => {
  return (
    <>
    <BannerSection img={BreadImg} title="Teacher Details" name="Teacher Details"/>
    <div className="it-teacher-details-area pt-120 pb-120">
          <div className="container">
            <div className="it-teacher-details-wrap">
              <div className="row">
                <div className="col-xl-3 col-lg-3">
                  <div className="it-teacher-details-left">
                    <div className="it-teacher-details-left-thumb">
                      <img src="assets/img/team/team-inner.jpg" alt="" />
                    </div>
                    <div className="it-teacher-details-left-social text-center">
                        <Link>
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                     <Link>
                     <i className="fab fa-twitter"></i>

                     </Link>
                      <Link>
                      <i className="fab fa-skype"></i>

                      </Link>
                   <Link>
                   <i className="fab fa-linkedin-in"></i>

                   </Link>
                      
                    </div>
                    <div className="it-teacher-details-left-info">
                      <ul>
                        <li>
                          <i className="fa-light fa-phone-volume"></i>
                          <Link>(568) 367-987-237</Link>
                        </li>
                        <li>
                          <i className="fa-light fa-location-dot"></i>
                          <Link> Hudson, Wisconsin(WI), 54016</Link>
                          
                        </li>
                        <li>
                          <i className="fa-light fa-envelope"></i>
                          <Link><span
                              className="__cf_email__"
                              data-cfemail="cea9a1b8a7a2a2afa9ab8ea9a3afa7a2e0ada1a3"
                            >
                              [email&#160;protected]
                            </span></Link>
                         
                        </li>
                      </ul>
                    </div>
                    <div className="it-teacher-details-left-btn">
                        <Link className="it-btn"><span>
                          Contact us teacher
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span></Link>
                     
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9">
                  <div className="it-teacher-details-right">
                    <div className="it-teacher-details-right-title-box">
                      <h4>Melvin Warner</h4>
                      <span>teacher</span>
                      <p>
                        Tempor orci dapibus ultrices in iaculis nunc sed augue.
                        Feugiat in ante metus dictum at tempor commodo.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor. Arcu dictum varius duis at consectetur lorem
                        donec massa.
                      </p>
                      <p>
                        Tempor orci dapibus ultrices in iaculis nunc sed augue.
                        Feugiat in ante metus dictum at tempor commodo lectus
                        magna fringilla.
                      </p>
                    </div>
                    <div className="it-teacher-details-right-content mb-40">
                      <h4>Education:</h4>
                      <p>
                        I’ve spent years figuring out the “formula” to teaching
                        technical skills in a classNameroom environment, and I’m
                        really excited to finally share my expertise with you. I
                        can confidently say that my online courses are without a
                        doubt the most comprehensive ones on the market.
                      </p>
                    </div>
                    <div className="it-progress-bar-wrap">
                      <h4>Expertise & Skills:</h4>
                      <div className="it-progress-bar-item">
                        <label>Lectures</label>
                        <div className="it-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              data-wow-delay=".1s"
                              data-wow-duration="2s"
                              role="progressbar"
                              data-width="90%"
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{
                                width: "90%",
                                visibility: "visible",
                                animationDuration: "2s",
                                animationDelay: "0.1s",
                                animationName: "slideInLeft",
                              }}
                            >
                              <span>90%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="it-progress-bar-item">
                        <label>My Skill</label>
                        <div className="it-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              data-wow-delay=".1s"
                              data-wow-duration="2s"
                              role="progressbar"
                              data-width="82%"
                              aria-valuenow="82"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{
                                width: "82%",
                                visibility: "visible",
                                animationDuration: "2s",
                                animationDelay: "0.1s",
                                animationName: "slideInLeft",
                              }}
                            >
                              <span>82%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="it-progress-bar-item">
                        <label>Consulting</label>
                        <div className="it-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              data-wow-delay=".1s"
                              data-wow-duration="2s"
                              role="progressbar"
                              data-width="65%"
                              aria-valuenow="58"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{
                                width: "65%",
                                visibility: "visible",
                                animationDuration: "2s",
                                animationDelay: "0.1s",
                                animationName: "slideInLeft",
                              }}
                            >
                              <span>65%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-team-3-area it-team-3-style-2 p-relative z-index pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-testimonial-5-title-box text-center mb-60">
                  <span className="it-section-subtitle-5">
                    <i className="fa-light fa-book"></i> teacher{" "}
                    <i className="fa-light fa-book"></i>
                  </span>
                  <h4 className="it-section-title-5">
                    meet our expert teacher
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="it-team-3-item text-center">
                  <div className="it-team-3-thumb fix">
                    <img src="assets/img/team/team-3-1.jpg" alt="" />
                  </div>
                  <div className="it-team-3-content">
                    <div className="it-team-3-social-box p-relative">
                      <button>
                        <i className="fa-light fa-share-nodes"></i>
                      </button>
                      <div className="it-team-3-social-wrap">
                      <Link>
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                     <Link>
                     <i className="fab fa-twitter"></i>

                     </Link>
                      <Link>
                      <i className="fab fa-skype"></i>

                      </Link>
                   <Link>
                   <i className="fab fa-linkedin-in"></i>

                   </Link>
                      </div>
                    </div>
                    <div className="it-team-3-author-box">
                      <h4 className="it-team-3-title">
                        <Link>
                        Nathan Allen
                        </Link>
                        
                      </h4>
                      <span>Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="it-team-3-item text-center">
                  <div className="it-team-3-thumb fix">
                    <img src="assets/img/team/team-3-2.jpg" alt="" />
                  </div>
                  <div className="it-team-3-content">
                    <div className="it-team-3-social-box p-relative">
                      <button>
                        <i className="fa-light fa-share-nodes"></i>
                      </button>
                      <div className="it-team-3-social-wrap">
                      <Link>
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                     <Link>
                     <i className="fab fa-twitter"></i>

                     </Link>
                      <Link>
                      <i className="fab fa-skype"></i>

                      </Link>
                   <Link>
                   <i className="fab fa-linkedin-in"></i>

                   </Link>
                      </div>
                    </div>
                    <div className="it-team-3-author-box">
                      <h4 className="it-team-3-title">
                        <Link>Esther Boyd</Link>
                        
                      </h4>
                      <span>Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="it-team-3-item text-center">
                  <div className="it-team-3-thumb fix">
                    <img src="assets/img/team/team-3-3.jpg" alt="" />
                  </div>
                  <div className="it-team-3-content">
                    <div className="it-team-3-social-box p-relative">
                      <button>
                        <i className="fa-light fa-share-nodes"></i>
                      </button>
                      <div className="it-team-3-social-wrap">
                      <Link>
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                     <Link>
                     <i className="fab fa-twitter"></i>

                     </Link>
                      <Link>
                      <i className="fab fa-skype"></i>

                      </Link>
                   <Link>
                   <i className="fab fa-linkedin-in"></i>

                   </Link>
                      </div>
                    </div>
                    <div className="it-team-3-author-box">
                      <h4 className="it-team-3-title">
                        <Link>Jamie Keller</Link>
                      </h4>
                      <span>Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="it-team-3-item text-center">
                  <div className="it-team-3-thumb fix">
                    <img src="assets/img/team/team-3-4.jpg" alt="" />
                  </div>
                  <div className="it-team-3-content">
                    <div className="it-team-3-social-box p-relative">
                      <button>
                        <i className="fa-light fa-share-nodes"></i>
                      </button>
                      <div className="it-team-3-social-wrap">
                      <Link>
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                     <Link>
                     <i className="fab fa-twitter"></i>

                     </Link>
                      <Link>
                      <i className="fab fa-skype"></i>

                      </Link>
                   <Link>
                   <i className="fab fa-linkedin-in"></i>

                   </Link>
                      </div>
                    </div>
                    <div className="it-team-3-author-box">
                      <h4 className="it-team-3-title">
                        <Link>Jesus Pendley</Link>
                      </h4>
                      <span>Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Subscribe/>


    </>
  )
}

export default TeacherDetails