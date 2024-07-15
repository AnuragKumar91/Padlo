import React from "react";
import BannerSection from "../../../BannerSection";
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import { Link } from "react-router-dom";



const SignUp = () => {
  return <>
  <BannerSection img={BreadImg} title="SignUp" name="Sign Up"/>
  <div className="it-signup-area pt-120 pb-120">
          <div className="container">
            <div className="it-signup-bg p-relative">
              <div className="it-signup-thumb d-none d-lg-block">
                <img src="assets/img/contact/signup.jpg" alt="signup" />
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <form action="#">
                    <div className="it-signup-wrap">
                      <h4 className="it-signup-title">sign up</h4>
                      <div className="it-signup-input-wrap mb-40">
                        <div className="it-signup-input mb-20">
                          <input type="text" placeholder="Full Name *" />
                        </div>
                        <div className="it-signup-input mb-20">
                          <input type="text" placeholder="Phone *" />
                        </div>
                        <div className="it-signup-input mb-20">
                          <input type="email" placeholder="Email *" />
                        </div>
                        <div className="it-signup-input mb-20">
                          <input type="password" placeholder="Password *" />
                        </div>
                      </div>
                      <div className="it-signup-btn mb-40">
                        <button className="it-btn large">sign up</button>
                      </div>
                      <div className="it-signup-text">
                        <span>
                          Already have an account? <Link>Sign In</Link>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>;
};

export default SignUp;