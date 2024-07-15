import React from 'react';
import Avatar from "../assets/img/avatar/avatar-1.png"


const TestimonialCard = () => {
  return (

  <>
  <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-3">
                    <div className="it-testimonial-slide-nav-active text-center">
                      <div className="it-testimonial-nav-item">
                        <div className="it-testimonial-nav-thumb">
                          <img src={Avatar} alt="true" />
                        </div>
                      </div>
                      <div className="it-testimonial-nav-item">
                        <div className="it-testimonial-nav-thumb">
                          <img src={Avatar}alt="true" />
                        </div>
                      </div>
                      <div className="it-testimonial-nav-item">
                        <div className="it-testimonial-nav-thumb">
                        <img src={Avatar} alt="true" />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9">
                    <div className="it-testimonial-slide-active">
                      <div className="it-testimonial-slide-item">
                        <div className="it-testimonial-slide-info">
                          <h4 className="it-testimonial-user-name">
                            Courtney Henry
                          </h4>
                          <span>happy customer</span>
                          <p>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                        </div>
                      </div>
                    
                     
                    </div>
                  </div>
                </div>
  </>
  )
}

export default TestimonialCard